import { useCartStore, useUserStore } from '../store/store';
import { RiUser3Line } from 'react-icons/ri';

const Login = ({
	setName,

	setIsActive,
}) => {
	const { setShowModal } = useUserStore();

	const { setCountProducts, setTotal, setAllProducts } = useCartStore();

	const clickButton = () => {
		setName('');
		setShowModal(true);
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
		setIsActive(true);
	};

	return (
		<button
			onClick={clickButton}
			className='hidden 2xl:block  w-9 h-9 p-[7px] dark:text-light text-primary hover:text-fall hover:dark:text-primary border dark:border-light border-primary hover:border-fall hover:dark:border-primary rounded-full'
		>
			<RiUser3Line />
		</button>
	);
};

export default Login;
