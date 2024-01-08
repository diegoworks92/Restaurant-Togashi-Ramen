import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useButtonContext } from './context/Context';

const Header = (props) => {
	/* Username */
	const { name } = props;

	/* date */
	const [date, setDate] = useState(new Date());

	const { isActive, setIsActive } = useButtonContext();
	const [activeButton2, setActiveButton2] = useState(null);

	useEffect(() => {
		if (isActive === true) {
			activeButton2;
		} else {
			setActiveButton2();
		}
	}, [isActive]);

	const toggleOrdersTabF = (id) => {
		if (id === 2 || id === 3 || id === 4) {
			setIsActive(false);
			setActiveButton2(id);
		}
		setIsActive(true);
		setActiveButton2(id);
	};

	const namesBtn = [
		{
			id: 1,
			name: 'Home',
			link: '/',
		},
		{
			id: 2,
			name: 'Ramen',
			link: '/ramen',
		},
		{
			id: 3,
			name: 'Cold dishes',
			link: '/hotdishes',
		},
		{
			id: 4,
			name: 'Drinks',
			link: '/drinks',
		},
	];
	return (
		<header id='home'>
			{/* Title */}
			<div className='flex flex-col items-center gap-4 md:flex-row md:justify-between '>
				<img
					className=' w-24 h-28 2xl:w-20 2xl:h-24'
					src='logo.ico'
					alt='logo of a cat dressed as a ninja eating ramen'
				/>
				<div>
					<h1 className=' text-xl text-dark dark:text-light '>
						WELCOME {name}
					</h1>
					<p className='text-center md:text-left text-dark dark:text-light opacity-50'>
						{date.toLocaleDateString()}
					</p>
				</div>
			</div>
			{/* Tabs */}
			<nav className='text-dark dark:text-light flex items-center justify-between md:justify-start md:gap-8 border-b border-fall dark:border-light mb-8 font-bold'>
				{namesBtn.map((names) => (
					<Link to={names.link} key={names.id}>
						<button onClick={() => toggleOrdersTabF(names.id)}>
							<p
								className={`${
									activeButton2 === names.id
										? 'before:w-1/2 before:h-[2px] before:absolute before:bg-primary before:left-0 before:rounded-full before:-bottom-[1px] text-primary'
										: ''
								} relative py-2 pr-4 hover:text-fall dark:hover:text-primary font-Nunito`}
							>
								{names.name}
							</p>
						</button>
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Header;
