import Products from './Products';
const Drinks = ({
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
			title='Drinks'
			typeProduct='drinks'
			wi='w-18'
			hei='h-28'
			kindFood='hidden'
		/>
	);
};

export default Drinks;
