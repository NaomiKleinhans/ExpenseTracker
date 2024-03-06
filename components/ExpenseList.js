// components/ExpenseList.js
import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ items, onDelete }) => {
	return (
		<ul className='list-disc ml-6 mb-4'>
			{items.map((item, index) => (
				<ExpenseItem
					key={index}
					item={item}
					onDelete={() => onDelete(index)}
				/>
			))}
		</ul>
	)
}

export default ExpenseList
