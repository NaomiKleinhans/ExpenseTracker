import React from 'react';

const ExpenseList = ({ expenses, removeExpense }) => {
  const totalExpenses = expenses.length;

  const handleClearAll = () => {
    // Remove all expenses
    expenses.forEach((expense) => removeExpense(expense.id));
  };

  return (
    <div>
      <ul className='container bg-compBg mt-3'>
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className={`divider-y p-3 flex bg-compBg items-center justify-between 
                                    R{
                                      expense.type === 'expense'
                                        ? 'text-danger'
                                        : 'text-success'
                                    }`}
          >
            <div>
              <div className='text-2xl font-semibold '>
                {expense.description} - R{expense.amount}
              </div>
              <div className='text-md text-details'>{expense.date}</div>
            </div>
            <div>
              <button
                className='bg-danger text-[#fff] px-2 py-1 rounded-lg'
                onClick={() => removeExpense(expense.id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* {totalExpenses > 1 && (
        <div className='my-3 flex justify-end'>
          <button
            className='bg-danger text-[#fff] px-2 py-1 rounded-lg text-xs'
            onClick={handleClearAll}
          >
            Clear all
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ExpenseList;
