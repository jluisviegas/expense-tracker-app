import { FC, useState } from 'react';

import Profile from '../../components/Profile';
import Totals from '../../components/Totals';
import Transaction from '../../components/Transaction';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

import { useAddTransaction } from '../../hooks/useAddTransaction';

interface ExpenseTrackerProps {
	onClick: () => void;
}

export const ExpenseTracker: FC<ExpenseTrackerProps> = () => {
	const { addTransaction } = useAddTransaction();
	const [description, setDescription] = useState<string>('');
	const [transactionAmount, setTransactionAmount] = useState<number>(0);
	const [transactionType, setTransactionType] = useState<string>('expense');

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTransaction({
			description,
			transactionAmount,
			transactionType,
		});

		setDescription('');
		setTransactionAmount(Number(''));
	};

	return (
		<div className="bg-gray-200 min-h-screen overflow-hidden font-body">
			<div className="flex">
				<div className="bg-gray-900 p-6 flex flex-col gap-4 rounded-3xl m-4">
					<Profile />
					<Totals />
				</div>
				<div className="p-4">
					<form
						className="flex flex-col gap-4 items-center"
						onSubmit={onSubmit}
					>
						<div className="flex gap-4 ">
							<div className="flex flex-col gap-1">
								<label htmlFor="description" className="text-xs font-bold">
									DESCRIPTION
								</label>
								<Input
									type="text"
									placeholder="Ex: Gym, Car..."
									value={description}
									required
									onChange={(e) => setDescription(e.target.value)}
									className="p-2"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="Amount" className="text-xs font-bold">
									AMOUNT
								</label>
								<Input
									type="number"
									placeholder="Amount"
									value={transactionAmount}
									required
									onChange={(e) => setTransactionAmount(Number(e.target.value))}
									className="p-2"
								/>
							</div>
						</div>
						<div className=" flex items-center gap-4 justify-between">
							<input
								type="radio"
								id="expense"
								value="expense"
								checked={transactionType === 'expense'}
								onChange={(e) => setTransactionType(e.target.value)}
							/>
							<label htmlFor="expense"> Expense</label>
							<input
								type="radio"
								id="income"
								value="income"
								checked={transactionType === 'income'}
								onChange={(e) => setTransactionType(e.target.value)}
							/>
							<label htmlFor="income"> Income</label>
							<Button>Add Transaction</Button>
						</div>
					</form>

					<div>
						<h3 className="font-bold text-3xl">Transactions</h3>
						<Transaction />
					</div>
				</div>
			</div>
		</div>
	);
};
