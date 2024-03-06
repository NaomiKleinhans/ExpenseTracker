import React, { useState } from 'react'
import ExpenseItem from '@/components/ExpenseItem'
import ExpenseList from '@/components/ExpenseList'
import Image from 'next/image'

const ExpenseTracker = () => {
	const [expenses, setExpenses] = useState([])
	const [description, setDescription] = useState('')
	const [amount, setAmount] = useState('')
	const [type, setType] = useState('expense') // Default to expense
	const [balance, setBalance] = useState(0)
	const [totalIncome, setTotalIncome] = useState(0)
	const [totalExpense, setTotalExpense] = useState(0)
	const [date, setDate] = useState(new Date().toLocaleDateString())

	const addExpense = () => {
		if (!description.trim() || !amount.trim()) return
		const newExpense = {
			id: expenses.length + 1,
			description,
			amount: parseFloat(amount),
			type,
			date
		}
		setExpenses([...expenses, newExpense])
		setBalance(
			type === 'expense'
				? balance - parseFloat(amount)
				: balance + parseFloat(amount)
		)
		if (type === 'expense') {
			setTotalExpense(totalExpense + parseFloat(amount))
		} else {
			setTotalIncome(totalIncome + parseFloat(amount))
		}
		setDescription('')
		setAmount('')
		setDate(new Date().toLocaleDateString())
	}

	const removeExpense = (id) => {
		const expenseToRemove = expenses.find((expense) => expense.id === id)
		if (expenseToRemove) {
			setExpenses(expenses.filter((expense) => expense.id !== id))
			setBalance(
				expenseToRemove.type === 'expense'
					? balance + expenseToRemove.amount
					: balance - expenseToRemove.amount
			)
			if (expenseToRemove.type === 'expense') {
				setTotalExpense(totalExpense - expenseToRemove.amount)
			} else {
				setTotalIncome(totalIncome - expenseToRemove.amount)
			}
		}
	}

	return (
		<>
			<div className=''>
				<Image
					src='/logo.png'
					alt='Logo'
					height='200'
					width='200'
				/>
			</div>
			<div className='-mt-32 text-4xl text-white font-bold text-center'>
				Expense Tracker
			</div>
			<div
				className='container bg-compBg w-3/4 mx-auto mt-20 p-5 rounded-lg shadow-lg'
			>
				<ExpenseItem
					description={description}
					setDescription={setDescription}
					amount={amount}
					setAmount={setAmount}
					date={date}
					setDate={setDate}
					type={type}
					setType={setType}
					balance={balance}
					setBalance={setBalance}
					totalIncome={totalIncome}
					setTotalIncome={setTotalIncome}
					totalExpense={totalExpense}
					setTotalExpense={setTotalExpense}
					addExpense={addExpense}
				/>
				<ExpenseList
					expenses={expenses}
					removeExpense={removeExpense}
					
				/>
			</div>
		</>
	)
}

export default ExpenseTracker
