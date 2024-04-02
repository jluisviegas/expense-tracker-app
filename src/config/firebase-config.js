// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAjsp502Hlu1u6TyjaknZTqQkfpJ7lW0I0',
	authDomain: 'expense-tracker-60ee9.firebaseapp.com',
	projectId: 'expense-tracker-60ee9',
	storageBucket: 'expense-tracker-60ee9.appspot.com',
	messagingSenderId: '336046252996',
	appId: '1:336046252996:web:88bc6d5ecca283bdee3a91',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
