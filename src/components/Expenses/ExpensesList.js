import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filteredExpenses = props.data;

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found !!!</h2>;
  }

  if (filteredExpenses.length > 0) {
    return filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
};

export default ExpensesList;
