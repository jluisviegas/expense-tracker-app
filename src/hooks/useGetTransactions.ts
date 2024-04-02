import { useEffect, useState } from 'react';

import {
	collection,
	deleteDoc, doc,
	onSnapshot,
	orderBy,
	query,
	where
} from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { useGetUserInfo } from './useGetUserInfo';

interface TransactionProps {
	description: string;
	transactionAmount: number;
	transactionType: string;
	id: string;
}

export const useGetTransactions = () => {
	const [transactions, setTransactions] = useState<TransactionProps[]>([]);
	const [transactionTotals, setTransactionTotals] = useState({
		balance: 0.0, income: 0.0, expenses: 0.0
	});

	const transactionsCollectionRef = collection(db, 'transactions');
	const { userID } = useGetUserInfo();

	const getTransactions = async () => {
		let unsubscribe;
		try {
			const queryTransactions = query(
				transactionsCollectionRef,
				where('userID', '==', userID),
				orderBy('createdAt')
			);

			unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
				const docs = [];
				let totalIncome = 0;
				let totalExpenses = 0;

				snapshot.forEach((doc) => {
					const data = doc.data();
					const id = doc.id;

					docs.push({ ...data, id })

					if (data.transactionType === "expense") {
						totalExpenses += Number(data.transactionAmount);
					} else {
						totalIncome += Number(data.transactionAmount);
					}
				});

				setTransactions(docs);
				const balance = totalIncome - totalExpenses
				setTransactionTotals({
					balance, income: totalIncome, expenses: totalExpenses
				})
			});
		} catch (err) {
			console.error(err);
		}
		return () => unsubscribe();
	};
	const deleteTransaction = async (transactionId: string) => {
		try {
			const transactionDocRef = doc(db, 'transactions', transactionId);
			await deleteDoc(transactionDocRef);
			getTransactions();
		} catch (err) {
			console.error('Error deleting transaction:', err);
		}
	};


	useEffect(() => {
		getTransactions();
	});

	return { transactions, transactionTotals, deleteTransaction };
};


