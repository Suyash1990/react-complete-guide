import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filerChangeHandler = (selectedYearValue) => {
    setFilteredYear(selectedYearValue);
  };

  const filteredExpenses = props.items.filter((x) => {
    return filteredYear === x.date.getFullYear().toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeDropDownYear={filerChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList data={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
