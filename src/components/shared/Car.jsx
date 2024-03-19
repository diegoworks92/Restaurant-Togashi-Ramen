import { useState } from 'react';
import { useMenuStore, useCartStore, useOrdersStore } from './store/store';
import Orders from './cart/Orders';
import AccountTotal from './cart/AccountTotal';
import WhereToEat from './cart/WhereToEat';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import NumberOrder from './cart/NumberOrder';

const Car = (props) => {
	const {} = props;
	const { activeButton, setActiveButton } = useMenuStore();

	const { showOrder } = useOrdersStore;

	const clickDine = (id) => {
		setActiveButton(id);
	};

	const { total, setTotal } = useCartStore();

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<div
			className={`2xl:col-span-2 fixed top-0 bg-primary dark:bg-dark w-full 2xl:w-96 2xl:right-0 h-full transition-all z-40 ${
				showOrder ? 'right-0' : '-right-full'
			}`}
		>
			{/* Orders */}
			<div className='relative pb-10 pt-3 2xl:pt-1 text-light p-8 h-full flex flex-col'>
				{' '}
				<NumberOrder />
				<WhereToEat
					buttonsClass='flex items-center justify-between sm:justify-around 2xl:justify-between gap-1 sm:gap-4 flex-wrap mb-4 sm:mb-1 md:mb-4'
					activeButton={activeButton}
					ClickDine={clickDine}
					setActiveButton={setActiveButton}
				/>
				<Orders
					total={total}
					setTotal={setTotal}
					descriptions='hidden'
					disguise='hidden'
					trash='hidden'
					trash2=''
					pFour=''
				/>
				{/* Submit payment */}
				<div className='absolute bg-primary dark:bg-secondary w-full bottom-0 left-0 mt-auto'>
					<AccountTotal
						total={total}
						setTotal={setTotal}
						cuantity='Cuantity'
						discount='Discount'
						discountValue={0}
						payment={
							window.innerWidth >= 1024 ? 'Continue to payment' : 'Payment'
						}
						mainClass='flex items-center justify-between mb-4'
						twoXlHidden='2xl:hidden'
						totalPayment='Total'
						textDark='text-light'
						lineWhite='border dark:border-light w-full'
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						toggleOpen={toggleOpen}
						details='Show Details'
						isOpenAc={isOpen ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
					/>
				</div>
			</div>
		</div>
	);
};

export default Car;
