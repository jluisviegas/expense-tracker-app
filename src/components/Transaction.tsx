import { BsFillTrashFill } from 'react-icons/bs';
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md';
import { useGetTransactions } from '../hooks/useGetTransactions';

const Transaction = () => {
	const { transactions, deleteTransaction } = useGetTransactions();

	const handleDeleteTransaction = (transactionId) => {
		deleteTransaction(transactionId);
	};

	return (
		<ul className="flex flex-col">
			{transactions.map((transaction) => {
				const { description, transactionAmount, transactionType } = transaction;

				return (
					<li className="flex items-center p-2  bg-gray-100 rounded-md  justify-between drop-shadow-sm my-2">
						<div>
							{transactionType === 'expense' ? (
								<MdTrendingDown className="bg-red-400 p-2 flex w-8 h-8 rounded-md items-center justify-center" />
							) : (
								<MdTrendingUp className="bg-green-400 p-2 flex w-8 h-8 rounded-md items-center justify-center" />
							)}
						</div>
						<h4> {description} </h4>
						<p>$ {transactionAmount} </p>
						<span className="cursor-pointer">
							<BsFillTrashFill
								onClick={() => handleDeleteTransaction(transaction.id)}
							/>
						</span>
					</li>
				);
			})}
		</ul>
	);
};

export default Transaction;
