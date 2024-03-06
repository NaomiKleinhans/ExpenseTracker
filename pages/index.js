// pages/index.js
import React, { useState } from 'react'
import ExpenseList from '../components/ExpenseList'

const Index = () => {
	const [items, setItems] = useState([])
	const [itemName, setItemName] = useState('')
	const [itemCost, setItemCost] = useState('')
	const [total, setTotal] = useState(0)

	const handleChange = (e) => {
		const { name, value } = e.target
		if (name === 'itemName') {
			setItemName(value)
		} else if (name === 'itemCost') {
			setItemCost(value)
		}
	}

	const handleAddItem = () => {
		if (itemName && itemCost) {
			const newItem = {
				name: itemName,
				cost: parseFloat(itemCost)
			}
			setItems([...items, newItem])
			setTotal(total + parseFloat(itemCost))
			setItemName('')
			setItemCost('')
		}
	}

	const handleDeleteItem = (index) => {
		const newItems = [...items]
		const deletedItemCost = newItems[index].cost
		newItems.splice(index, 1)
		setItems(newItems)
		setTotal(total - deletedItemCost)
	}

	const handleClearList = () => {
		setItems([])
		setTotal(0)
	}

  return (
		<>
			<div className='text-2xl text-center mt-10 font-bold mb-4 text-white'>
				Expense Tracker
			</div>
			<div className='card m-10 p-4 bg-gray-500 rounded-md'>
				<div className='mb-4  flex justify-center'>
					<input
						type='text'
						placeholder='Item Name'
						name='itemName'
						value={itemName}
						onChange={handleChange}
						className='border border-gray-400 rounded p-2 mr-2 text-black'
					/>
					<input
						type='number'
						placeholder='Cost'
						name='itemCost'
						value={itemCost}
						onChange={handleChange}
						className='border border-gray-400 rounded p-2 mr-2 text-black'
					/>
					<button
						onClick={handleAddItem}
						className='bg-blue-500 text-white px-4 py-2 rounded'
					>
						Add Item
					</button>
				</div>

				<ExpenseList
					items={items}
					onDelete={handleDeleteItem}
				/>
				<div className='mb-4  flex justify-center'>
					<span>Total: {total.toFixed(2)}</span>
				</div>
				<button
					onClick={handleClearList}
					className='bg-gray-900 text-white px-4 py-2 rounded place-content-center'
				>
					Clear List
				</button>
			</div>
		</>
	)
}

export default Index
