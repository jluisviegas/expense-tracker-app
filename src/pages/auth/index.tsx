import { signInWithPopup } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth, provider } from '../../config/firebase-config';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';

export const Auth: React.FC = () => {
	const navigate = useNavigate();
	const { isAuth } = useGetUserInfo();
	const signInWithGoogle = async () => {
		const results = await signInWithPopup(auth, provider);
		const authInfo = {
			userID: results.user.uid,
			name: results.user.displayName,
			profilePhoto: results.user.photoURL,
			isAuth: true,
		};
		localStorage.setItem('auth', JSON.stringify(authInfo));
		navigate('/expense-tracker');
	};

	if (isAuth) {
		return <Navigate to="/expense-tracker" />;
	}

	return (
		<div className="flex justify-center items-center min-h-screen text-center bg-slate-200">
			<div className="w-full m-2 sm:w-[400px] h-[70vh] rounded-md flex items-center justify-center flex-col bg-slate-300 gap-4 shadow-lg">
				<h4 className="font-bold text-2xl">Welcome to EXPENSE TRACKER</h4>
				<p>Sign In to your account</p>
				<button
					onClick={signInWithGoogle}
					className="p-4 mx-auto bg-slate-200 rounded-md"
				>
					Sign In With Google
				</button>
			</div>
		</div>
	);
};
