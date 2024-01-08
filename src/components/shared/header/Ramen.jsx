import Products from './Products';

const Ramen = ({
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
			title='Ramen'
			typeProduct='ramen'
			wi='w-40'
			hei='h-40'
			roun='rounded-full'
			alcohol='hidden'
		/>
	);
};

export default Ramen;
