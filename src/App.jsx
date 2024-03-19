import { useState, useEffect } from 'react';
import {
	useMenuStore,
	useCartStore,
	useUserStore,
	useOrdersStore,
} from './components/shared/store/store';
import {
	RiMenu3Fill,
	RiUser3Line,
	RiAddLine,
	RiPieChartLine,
	RiCloseLine,
} from 'react-icons/ri';
//Components
import Sidebar from './components/shared/Sidebar';
import Car from './components/shared/Car';
import Header from './components/shared/Header';

import { Routes, Route } from 'react-router-dom';
import Drinks from './components/shared/header/Drinks';
import HotDishes from './components/shared/header/HotDishes';
import Home from './components/shared/sidebar/Home';
import OrdersTab from './components/shared/sidebar/OrdersTab';
import SignOff from './components/shared/SignOff';
import Ramen from './components/shared/header/Ramen';

function App() {
	const { showMenu, setShowMenu } = useMenuStore();

	const { showOrder, setShowOrder, showOrdersTab } = useOrdersStore();

	const { setTotal, setCountProducts, setAllProducts } = useCartStore();

	const { setName, setShowModal } = useUserStore();

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);

		const timer = setTimeout(() => {
			setShowMenu(false);
		}, 6000);
		return () => clearTimeout(timer);
	};

	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};

	const handleExit = () => {
		setName('');
		setShowModal(true);
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	/* Theme */

	const [theme, setTheme] = useState(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	});

	useEffect(() => {
		if (theme === 'dark') {
			document.querySelector('html').classList.add('dark');
		} else {
			document.querySelector('html').classList.remove('dark');
		}
	}, [theme]);

	return (
		<div className='dark:bg-secondary bg-light bg-repeat w-full min-h-screen font-Nunito font-semibold'>
			<Sidebar theme={theme} setTheme={setTheme} />

			<SignOff />

			<div>{showOrdersTab ? '' : <Car />}</div>
			{/* Menu movil */}
			<nav className='bg-dark 2xl:hidden fixed w-full bottom-0 left-0 text-3xl text-light py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl z-20'>
				<button onClick={handleExit} className='p-2'>
					<RiUser3Line />
				</button>
				<button className='p-2'>
					<RiAddLine />
				</button>
				<button onClick={toggleOrders} className='p-2'>
					<RiPieChartLine />
				</button>
				<button className='text-light p-2' onClick={toggleMenu}>
					{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
				</button>
			</nav>
			<main className='2xl:pl-32 2xl:pr-96 pb-20'>
				<div className='md:p-8 p-4'>
					{/* Header */}
					<Header />

					{/* Content */}
					<Routes>
						<Route path='/orders' element={<OrdersTab />} />
						<Route path='/' element={<Home />} />
						<Route path='/ramen' element={<Ramen />} />
						<Route path='/hotdishes' element={<HotDishes />} />
						<Route path='/drinks' element={<Drinks />} />
					</Routes>
				</div>
			</main>
		</div>
	);
}

export default App;
