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
							<b className='text-white text-2xl'>${balance.toFixed(2)}</b>
						</h3>
					</div>
				</div>
				<div className='flex flex-row justify-center items-center mt-3 gap-20 text-xl'>
					<div className='col-md-4'>
						<h3>
							Income <br />
							<span className='text-success'>${totalIncome.toFixed(2)}</span>
						</h3>
					</div>
					<div className='col-md-4'>
						<h3>
							Expense <br />
							<span className='text-danger'>${totalExpense.toFixed(2)}</span>
						</h3>
					</div>
				</div>
			</div>

			<div className='mb-3'>
				<input
					type='text'
					className='form-control'
					placeholder='Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className='row'>
				<div className='col-md-4'>
					<div className='mb-3'>
						<input
							type='number'
							className='form-control'
							placeholder='Amount'
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='mb-3'>
						<input
							type='date'
							className='form-control'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='mb-3'>
						<select
							className='form-select'
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<option value='expense'>Expense</option>
							<option value='income'>Income</option>
						</select>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-6'>
					<button
						className='btn btn-primary'
						onClick={addExpense}
					>
						Add Transaction
					</button>
				</div>
			</div>
		</>
	)
}

export default ExpenseItem
