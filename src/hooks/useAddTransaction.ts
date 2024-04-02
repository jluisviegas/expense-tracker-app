import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { useGetUserInfo } from './useGetUserInfo';


interface AddTransactionProps {
	description: string;
	transactionAmount: number;
	transactionType: string;
}

export const useAddTransaction = () => {
	const transactionCollectionRef = collection(db, 'transactions');

	const { userID } = useGetUserInfo()
	const addTransaction = async ({
		description,
		transactionAmount,
		transactionType,

	}: AddTransactionProps) => {
		await addDoc(transactionCollectionRef, {
			userID,
			description,
			transactionAmount,
			transactionType,
			createdAt: serverTimestamp(),
		});
	};
	return { addTransaction };
};

