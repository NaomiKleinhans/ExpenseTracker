import React from 'react'

const ExpenseItem = ({
	description,
	setDescription,
	amount,
	setAmount,
	date,
	setDate,
	type,
	setType,
	balance,
	setBalance,
	totalIncome,
	setTotalIncome,
	totalExpense,
	setTotalExpense,
	addExpense
}) => {
	return (
		<>
			<div className='col-md-4 offset-md-4 text-center'>
				<div className='row mt-3'>
					<div className='text-center text-white text-2xl font-bold'>
						<h3>
							Balance:
							<b
								className={`text-2xl R{
									balance === 0
										? 'text-[#fff]'
										: balance > 0
										? 'text-success'
										: 'text-danger'
								}`}
							>
								{' '}
								R{balance.toFixed(2)}
							</b>
						</h3>
					</div>
				</div>
				<div className='flex flex-row justify-center items-center mt-3 gap-20 text-xl'>
					<div className='col-md-4'>
						<h3>
							Income <br />
							<span className='text-success'>R{totalIncome.toFixed(2)}</span>
						</h3>
					</div>
					<div className='col-md-4'>
						<h3>
							Expense <br />
							<span className='text-danger'>R{totalExpense.toFixed(2)}</span>
						</h3>
					</div>
				</div>
			</div>

			<div className='my-3 justify-between'>
				<input
					type='text'
					className='form-control bg-mainBg border-2 border-white rounded-sm w-full p-2'
					placeholder='Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className='lg:flex md:flex gap-5'>
				<div className='my-3'>
					<input
						type='number'
						className='form-control bg-mainBg w-auto p-2 border-2 border-white rounded-sm'
						placeholder='Amount'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>

				<div className='my-3'>
					<input
						type='date'
						className='form-control bg-mainBg w-auto p-2 border-2 border-white rounded-sm'
						placeholder='Date'
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>

				<div className='my-3'>
					<select
						className='form-select bg-mainBg w-auto p-2 border-2 border-white rounded-sm'
						placeholder='Type'
						value={type}
						onChange={(e) => setType(e.target.value)}
					>
						<option value='expense'>Expense</option>
						<option value='income'>Income</option>
					</select>
				</div>
			</div>
			<div className='row'>
				<button
					className='bg-themeColorMain rounded-lg p-3'
					onClick={addExpense}
				>
					Add Transaction
				</button>
			</div>
		</>
	)
}

export default ExpenseItem
