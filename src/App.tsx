import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Auth } from './pages/auth/index';
import { ExpenseTracker } from './pages/expense-tracker';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Auth />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/expense-tracker',
		element: <ExpenseTracker />,
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
