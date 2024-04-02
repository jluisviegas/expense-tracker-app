import { useGetTransactions } from '@/hooks/useGetTransactions';
import { IoIosArrowDown, IoMdArrowDown, IoMdArrowUp } from 'react-icons/io';

const Totals = () => {
	const { transactionTotals } = useGetTransactions();
	const { balance, income, expenses } = transactionTotals;

	return (
		<div className="bg-gray-700 p-6 rounded-2xl">
			<div className="flex flex-col text-2xl text-white mb-10 ">
				<div className="flex items-center gap-4">
					<h3 className="font-bold text-2xl uppercase">Total Balance</h3>
					<IoIosArrowDown className="bg-slate-500 rounded-full p-1" />
				</div>
				{balance >= 0 ? <h2>$ {balance}</h2> : <h2> -$ {balance * -1}</h2>}
			</div>
			<div className="flex gap-6 justify-between">
				<div className="">
					<div className="flex items-center text-2xl gap-2">
						<h4 className="font-bold text-2xl text-white">Income</h4>
						<IoMdArrowUp className="text-green-400 bg-slate-500 rounded-full p-1" />
					</div>
					<p className="text-white">$ {income}</p>
				</div>
				<div>
					<div className="flex items-center text-2xl gap-2">
						<h4 className="font-bold text-2xl text-white">Expenses</h4>
						<IoMdArrowDown className="text-red-400 bg-slate-500 rounded-full p-1" />
					</div>
					<p className="text-white">$ {expenses}</p>
				</div>
			</div>
		</div>
	);
};

export default Totals;
