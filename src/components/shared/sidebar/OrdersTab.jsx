import { useState, useEffect } from 'react';
import Orders from '../cart/Orders';
import AccountTotal from '../cart/AccountTotal';
import WhereToEat from '../cart/WhereToEat';
import NumberOrder from '../cart/NumberOrder';

const OrdersTab = (props) => {
	const {
		showOrder,
		setShowOrder,
		allProducts,
		setAllProducts,
		total,
		setTotal,
		countProducts,
		setCountProducts,
		activeButton,
		setActiveButton,
		whereToEat,
		setWhereToEat,
	} = props;

	const [isOpen, setIsOpen] = useState(true);

	const toggleOpen = () => setIsOpen(!isOpen);

	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		window.addEventListener('resize', handleResize);

		// Clear the event listener when the component is unmounted
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			{/* Orders */}
			<div
				id='orders'
				className={`${
					isLargeScreen ? 'visible' : 'hidden'
				} bg-concrete dark:bg-dark relative pb-40 pt-16 m-10 2xl:pt-1 text-light p-8 h-full flex flex-col rounded-xl`}
			>
				<NumberOrder setShowOrder={setShowOrder} />

				<WhereToEat
					activeButton={activeButton}
					setActiveButton={setActiveButton}
					buttonsClass='flex items-center justify-start gap-4 flex-wrap mb-4'
					whereToEat={whereToEat}
					setWhereToEat={setWhereToEat}
				/>

				<Orders
					allProducts={allProducts}
					setAllProducts={setAllProducts}
					total={total}
					setTotal={setTotal}
					countProducts={countProducts}
					setCountProducts={setCountProducts}
					explanation='hidden'
					trash=''
					trash2='hidden'
					pFour='p-4'
					disguise=''
				/>

				{/* Submit payment */}
				<div>
					<AccountTotal
						total={total}
						countProducts={countProducts}
						setAllProducts={setAllProducts}
						setTotal={setTotal}
						setCountProducts={setCountProducts}
						cuantity='Cuantity'
						discount='Discount'
						discountValue={0}
						payment='Payment'
						mainClass='flex items-center justify-between mb-4'
						totalPayment='Total'
						textDark='text-dark'
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						toggleOpen={toggleOpen}
						whereToEat={whereToEat}
						setWhereToEat={setWhereToEat}
					/>
				</div>
			</div>
		</>
	);
};

export default OrdersTab;
