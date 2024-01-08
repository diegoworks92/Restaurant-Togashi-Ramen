import Products from './Products';

const HotDishes = ({
	showOrder,
	setShowOrder,
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	return (
		<Products
			showOrder={showOrder}
			setShowOrder={setShowOrder}
			allProducts={allProducts}
			setAllProducts={setAllProducts}
			total={total}
			setTotal={setTotal}
			countProducts={countProducts}
			setCountProducts={setCountProducts}
			title='Choose Dishes'
			typeProduct='dishes'
			wi='w-40'
			hei='h-40'
			roun='rounded-full'
			alcohol='hidden'
		/>
	);
};

export default HotDishes;
