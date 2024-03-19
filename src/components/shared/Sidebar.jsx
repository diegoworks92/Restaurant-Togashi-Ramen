import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
	useMenuStore,
	useOrdersStore,
	useCartStore,
	useUserStore,
} from './store/store';
import {
	RiHome6Line,
	RiPercentLine,
	RiPieChartLine,
	RiMailLine,
	/* 	RiNotification2Line, */
	RiLogoutBoxRLine,
} from 'react-icons/ri';
import { MdDarkMode, MdOutlineLightMode, MdPhotoCamera } from 'react-icons/md';

const Sidebar = (props) => {
	const { theme, setTheme } = props;

	const [color, setColor] = useState(false);

	const { isOrdersActive, setIsOrdersActive, setShowOrdersTab, showOrdersTab } =
		useOrdersStore();

	const { setCountProducts, setAllProducts, setTotal } = useCartStore();

	const { name, setName, setShowModal } = useUserStore();

	const { showMenu, activeButton, setActiveButton, isActive, setIsActive } =
		useMenuStore();

	const toggleOrdersTab = (id) => {
		setShowOrdersTab(!showOrdersTab);
		setColor(!color);
		setActiveButton(id);
		setIsOrdersActive(false);
	};

	const toggleOrdersTabF = (id) => {
		setShowOrdersTab(false);
		setColor(!color);
		setActiveButton(id);
	};

	const handleExit = () => {
		setName('');
		setShowModal(true);
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
		setIsActive(true);
	};

	const button = (id) => {
		if (id !== activeButton) {
			setIsActive(false);
			setActiveButton(id);
		}
		if (id === 1) {
			setIsActive(true);
			homeClick(id);
			toggleOrdersTabF(id);
		} else if (id === 2) {
			toggleOrdersTab(id);
			orderClick(id);
		} else if (id === 3) {
			discountClick(id);
		} else if (id === 4) {
			contactClick(id);
		} else if (id === 6) {
			galleryClick(id);
		} else if (id === 7) {
			handleChangeTheme(id);
		} else if (id === 8) {
			handleExit(id);
			homeClick(id);
		} else {
			toggleOrdersTabF(id);
		}
	};

	useEffect(() => {
		if (isActive) {
			toggleOrdersTabF(1);
		}
	}, [isActive]);

	useEffect(() => {
		if (isOrdersActive) {
			toggleOrdersTab(2);
			setIsActive(false);
		}
	}, [isOrdersActive]);

	const sidebar = [
		{
			id: 1,
			buttons: [
				{
					id: 1,
					link: '/',
					icons: <RiHome6Line />,
				},
				{
					id: 2,
					link: '/orders',
					icons: <RiPieChartLine />,
				},
				{
					id: 3,
					link: '/',
					icons: <RiPercentLine />,
				},
				{
					id: 4,
					link: '/',
					icons: <RiMailLine />,
				},
				/*                 {
                    id: 5,
                    link: "/notification", 
                    icons: <RiNotification2Line/>,
                }, */
				{
					id: 6,
					link: '/',
					icons: <MdPhotoCamera />,
				},
				{
					id: 7,
					icons: theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />,
				},
				{
					id: 8,
					link: '/',
					icons: <RiLogoutBoxRLine />,
				},
			],
		},
	];

	/* Theme */

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	/* gallery */
	const navigate = useNavigate();

	const galleryClick = () => {
		navigate('/');

		// Wait a bit to make sure the navigation is finished
		setTimeout(() => {
			const contactoElement = document.getElementById('gallery');
			contactoElement.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	const contactClick = () => {
		navigate('/');

		setTimeout(() => {
			const contactoElement = document.getElementById('contact');
			contactoElement.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	const discountClick = () => {
		navigate('/');

		setTimeout(() => {
			const contactoElement = document.getElementById('discount');
			contactoElement.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	const homeClick = () => {
		navigate('/');

		setTimeout(() => {
			const contactoElement = document.getElementById('home');
			contactoElement.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	const orderClick = () => {
		navigate('/orders');

		setTimeout(() => {
			const contactoElement = document.getElementById('orders');
			contactoElement.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	return (
		<div
			className={` bg-primary dark:bg-dark fixed 2xl:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
				showMenu ? 'left-0' : '-left-full'
			}`}
		>
			<div>
				<ul className='pl-4'>
					<div>
						{sidebar.map((data) => (
							<div key={data.id}>
								{data.buttons.map((e) => {
									const isMobile = window.innerWidth <= 1535;
									const buttonClass = `${
										activeButton === e.id
											? 'bg-fall dark:bg-primary text-light dark:text-light'
											: 'text-light dark:text-primary'
									} ${isActive ? 'active' : ''} 
                                                        text-2xl group-hover:bg-fall flex justify-center p-4 rounded-xl  group-hover:text-light transition-colors`;
									const hiddenClass = e.id === 2 && isMobile ? 'hidden' : '';
									return (
										<li
											key={e.id}
											className={`hover:bg-light dark:hover:bg-secondary p-4 rounded-tl-xl rounded-bl-xl group transition-colors ${hiddenClass}`}
										>
											<Link to={e.link}>
												<button
													className={buttonClass}
													onClick={() => button(e.id)}
												>
													<span>{e.icons} </span>
												</button>
											</Link>
										</li>
									);
								})}
							</div>
						))}
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
