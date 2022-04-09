import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import AddExpense from "./components/AddExpense";
import DisplayExpenses from "./components/DisplayExpenses";
import expenses from "./components/sampleExpenses";
import { nanoid } from "nanoid";
import "./App.css";

const BASE_URL = "https://v6.exchangerate-api.com/v6/8928f74d1372e6fe7e9cdc5d";

function App() {
  const amountRef = useRef();
  const titleRef = useRef();

  const [allExpenses, setAllExpenses] = useState(expenses);
  const [allAmounts, setAllAmounts] = useState([]);
  const [total, setTotal] = useState("");
  const [convertedTotal, setConvertedTotal] = useState("");

  const [lengthErrorMessage, setLengthErrorMessage] = useState(null);

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("PLN");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState("");

  const fromAmount = 1;
  const convertedFromAmount = (fromAmount * exchangeRate).toFixed(2);

  // Load currency options
  useEffect(() => {
    fetch(`${BASE_URL}/latest/EUR`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyOptions([...Object.keys(data.conversion_rates)]);
      });
  }, []);

  // Set exchange rate
  useEffect(() => {
    fetch(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.conversion_rate);
      });
  }, [fromCurrency, toCurrency]);

  // Set new currencies on change
  const onChangeCurrency = (currencyChanged, event) => {
    currencyChanged === "from"
      ? setFromCurrency(event.target.value)
      : setToCurrency(event.target.value);
  };

  // Switch between currencies on click
  const handleSwapCurrencies = () => {
    const oldFromCurrency = fromCurrency;
    const oldToCurrency = toCurrency;

    setFromCurrency(oldToCurrency);
    setToCurrency(oldFromCurrency);
  };

  // Create new expense object, add it to the allExpenses array
  const onFormSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      amount: Number(amountRef.current.value).toFixed(2),
      title: titleRef.current.value,
      convertedAmount: Number(amountRef.current.value * exchangeRate).toFixed(
        2
      ),
      id: nanoid(),
    };

    setAllExpenses([...allExpenses, newExpense]);
  };

  // Convert added expenses to chosen currency
  useEffect(() => {
    const test = (allExpenses) =>
      allExpenses.map((expense) => ({
        ...expense,
        convertedAmount: Number(expense.amount * exchangeRate).toFixed(2),
      }));

    setAllExpenses(test);
  }, [exchangeRate]);

  // Create an array of amounts, add them together to get a total
  React.useEffect(() => {
    setAllAmounts(allExpenses.map((expense) => Number(expense.amount)));

    const sumTotal = allAmounts.reduce(
      (total, newExpense) => total + newExpense,
      0
    );

    const sumConvertedTotal = allAmounts.reduce(
      (total, newExpense) => total + newExpense * exchangeRate,
      0
    );

    setConvertedTotal(sumConvertedTotal.toFixed(2));
    setTotal(sumTotal.toFixed(2));
  }, [allExpenses, allAmounts, exchangeRate]);

  // Delete rows
  const deleteTableRows = (expenseId) => {
    const rows = [...allExpenses];
    const index = rows.findIndex((expense) => expense.id === expenseId);

    rows.splice(index, 1);
    setAllExpenses(rows);
  };

  // Validate title length and show error
  const onTitleChange = (event) => {
    const minLength = event.target.value.length >= 5;

    setLengthErrorMessage(
      minLength ? null : "Title should have at least 5 characters"
    );
  };

  return (
    <>
      <div className="main">
        <div className="expenses-list-wrap">
          <Header title={"LIST OF EXPENSES"} className="add-expense-title" />
          <AddExpense
            onFormSubmit={onFormSubmit}
            amountRef={amountRef}
            titleRef={titleRef}
            currencyOptions={currencyOptions}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            exchangeRate={exchangeRate}
            selectedCurrency={fromCurrency}
            handleSwapCurrencies={handleSwapCurrencies}
            onChangeCurrency={onChangeCurrency}
            fromAmount={fromAmount}
            toAmount={convertedFromAmount}
            convertedAmount={convertedFromAmount}
            onTitleChange={onTitleChange}
            lengthErrorMessage={lengthErrorMessage}
          />
          <DisplayExpenses
            allExpenses={allExpenses}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            exchangeRate={exchangeRate}
            total={total}
            convertedTotal={convertedTotal}
            deleteTableRows={deleteTableRows}
          />
        </div>
      </div>
    </>
  );
}

export default App;
