// components/ExpenseItem.js
import React from 'react'

const ExpenseItem = ({ item, onDelete }) => {
	return (
		<li className='mb-2'>
			{item.name} - {item.cost.toFixed(2)}
			<button
				onClick={onDelete}
				className='ml-2 bg-red-500 text-black px-2 py-1 rounded'
			>
				Delete
			</button>
		</li>
	)
}

export default ExpenseItem
