import { useContextOrders } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import OrderEat from './whereToEat/OrderEat';
import Buttons from '../designs/Buttons';

const AccountTotal = (props) => {
	const {
		total,
		countProducts,
		setAllProducts,
		setTotal,
		setCountProducts,
		setShowOrdersTab,
		showOrdersTab,
		cuantity,
		discount,
		discountValue,
		payment,
		classPay,
		mainClass,
		twoXlHidden,
		totalPayment,
		textDark,
		lineWhite,
		toggleOpen,
		isOpen,
		details,
		isOpenAc,
		whereToEat,
		setWhereToEat,
	} = props;

	const numberWithDecimal = total.toFixed(2);

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	const { setIsOrdersActive } = useContextOrders();

	const navigate = useNavigate();

	const orderClick = () => {
		navigate('/orders');
		setIsOrdersActive(true);

		// Wait a bit to make sure the navigation is finished
		setTimeout(() => {
			const contactoElement = document.getElementById('orders');
			contactoElement.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	return (
		<div className={`${textDark} dark:text-light -mt-4`}>
			<div className={`${lineWhite}`}></div>
			<div className='flex justify-center'>
				<button onClick={toggleOpen} /* className='mb-0 md:mb-0 lg:mb-0' */>
					<div className='flex justify-center'>
						<span className='text-lg'>{isOpenAc} </span>
					</div>
					<span>{details}</span>
				</button>
			</div>
			{isOpen && (
				<div>
					<div className={`${countProducts === 0 ? 'hidden' : mainClass} mb-2`}>
						<span>To empty cart</span>
						<button>
							<RiDeleteBin6Line
								onClick={onCleanCart}
								className='w-9 h-9 p-2 ml-3 md:ml-0 text-delete  border border-delete rounded-full'
							/>
						</button>
					</div>

					<div className={`flex items-center justify-between mb-4`}>
						<span>{cuantity}</span>
						<span>{countProducts}</span>
					</div>

					<OrderEat
						whereToEat={whereToEat}
						numberWithDecimal={numberWithDecimal}
					/>
				</div>
			)}
			<div className='flex justify-center'>
				<Link to={window.innerWidth >= 1024 ? 'orders' : 'notification'}>
					<Buttons
						buttonName={payment}
						bgPrimary='bg-fall dark:bg-fall'
						bgHover='bg-tangerine hover:dark:bg-tangerine'
						paddingX='4 mb-0 sm:-mb-2 md:mb-0'
						onclick={orderClick}
					/>
				</Link>
			</div>
		</div>
	);
};

export default AccountTotal;
