import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const expenseItems = props.expenses;
  return (
    <div>
      {expenseItems.map((item, index) => (
        <div className="expense-item">
          <ExpenseDate date={item.date} />
          <div className="expense-item__description">
            <h2>{item.title}</h2>
            <div className="expense-item__price">${item.amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ExpenseItem;
