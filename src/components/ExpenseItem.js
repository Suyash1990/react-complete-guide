import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
        <div>07-Sept-2022</div>
        <div className='expense-item__description'>
            <h2>Car Insurance</h2>
            <div className='expense-item__price'>Rs.5000</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
