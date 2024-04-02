import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';
import { useGetUserInfo } from '../hooks/useGetUserInfo';
import { Button } from './ui/button';

const Profile = () => {
	const { name, profilePhoto } = useGetUserInfo();
	const navigate = useNavigate();

	const signUserOut = async () => {
		try {
			await signOut(auth);
			localStorage.clear();
			navigate('/');
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div>
			{profilePhoto && (
				<div className="flex flex-col justify-center items-center gap-4 text-white border-b-2 border-gray-800">
					<img src={profilePhoto} alt="" className="rounded-2xl" />
					<h1 className="text-lg font-bold">Hello, {name}!</h1>
					<Button onClick={signUserOut} className="mb-6">
						Sign Out
					</Button>
				</div>
			)}
		</div>
	);
};

export default Profile;
