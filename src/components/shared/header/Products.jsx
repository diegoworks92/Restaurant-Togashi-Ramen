import { useState } from 'react';
import { ramen, dishes, drinks } from '../cart/dishData';
import {
	RiArrowDownSLine,
	RiSearch2Line,
	RiArrowUpSLine,
	RiBeerFill,
} from 'react-icons/ri';
import { PiPlantFill } from 'react-icons/pi';
import { FaLeaf } from 'react-icons/fa';
import { GiChiliPepper } from 'react-icons/gi';

const Products = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
	title,
	typeProduct,
	wi,
	hei,
	roun,
	kindFood,
	alcohol,
}) => {
	const onAddProduct = (product) => {
		if (
			allProducts.find((item) => item.id === `${product.type}-${product.id}`)
		) {
			const products = allProducts.map((item) =>
				item.id === `${product.type}-${product.id}`
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);

			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}
		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([
			...allProducts,
			{ ...product, id: `${product.type}-${product.id}` },
		]);
	};

	/* Search */
	const [search, setSearch] = useState('');
	let filteredItems = [];

	if (typeProduct === 'dishes') {
		filteredItems = dishes.filter((dish) =>
			dish.name.toLowerCase().includes(search.toLowerCase()),
		);
	} else if (typeProduct === 'ramen') {
		filteredItems = ramen.filter((ram) =>
			ram.name.toLowerCase().includes(search.toLowerCase()),
		);
	} else if (typeProduct === 'drinks') {
		filteredItems = drinks.filter((drink) =>
			drink.name.toLowerCase().includes(search.toLowerCase()),
		);
	}

	// Add a new state for the sort order
	const [sortOrder, setSortOrder] = useState('none');

	// Sort the dishes based on the status of sortOrder
	const sortedItems = [...filteredItems].sort((a, b) => {
		if (sortOrder === 'asc') {
			return a.price - b.price;
		} else if (sortOrder === 'desc') {
			return b.price - a.price;
		} else {
			return 0;
		}
	});

	const [sort, setSort] = useState(false);
	const trueOrder = () => {
		setSort(!sort);
	};

	const [explanationId, setExplanationId] = useState(null);

	const toggleExplanation = (id) => {
		setExplanationId(explanationId === id ? null : id);
	};

	return (
		<>
			<div className='flex justify-between flex-col md:flex-row text-center pb-4'>
				<div
					className={`flex order-2 md:order-none md:items-center pt-3 md:pt-0 justify-center dark:text-light ${kindFood}`}
				>
					<span className='mx-2 text-xl -mt-1 text-delete'>
						<GiChiliPepper />
					</span>
					<pan className='text-dark dark:text-light'>Spicy.</pan>
					<span className='mx-2 text-xl -mt-1  text-vegetarian'>
						<FaLeaf />
					</span>
					<pan className='text-dark dark:text-light'>Vegetarian.</pan>
					<span className='mx-2 text-xl -mt-1  text-vegan'>
						<PiPlantFill />
					</span>
					<pan className='text-dark dark:text-light'>Vegan.</pan>
				</div>

				<div
					className={`flex order-2 md:order-none md:items-center pt-3 md:pt-0 justify-center dark:text-light ${alcohol}`}
				>
					<span className='mx-2 text-xl -mt-1 text-delete'>
						<RiBeerFill />
					</span>
					<pan>Alcohol</pan>
				</div>

				<h2 className='order-1 2xl:order-none text-2xl text-dark dark:text-light -mt-5'>
					{title}
				</h2>
				<p className='order-3 2xl:order-none dark:text-light pt-1'>
					Click on the product to learn more.
				</p>
			</div>
			{/* Search */}
			<div className='flex flex-col sm:flex-row  sm:justify-between gap-4 mb-8'>
				<form>
					<div className='w-full relative'>
						<RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-light' />
						<input
							type='text'
							value={search}
							placeholder='Search'
							onChange={(e) => setSearch(e.target.value)}
							className='bg-primary dark:bg-dark py-2 pl-10 pr-4 rounded-2xl text-light outline-none placeholder-light min-w-full lg:min-w-min'
						/>
					</div>
				</form>

				{/* Title content */}

				{/* Add an accordion to change the sort order */}
				<details>
					<summary
						className={`flex items-center gap-4 text-light bg-primary dark:bg-dark py-2 px-4 min-w-full ${
							sort ? 'rounded-t-2xl' : 'rounded-2xl'
						}`}
						onClick={trueOrder}
					>
						{' '}
						{sort ? <RiArrowUpSLine /> : <RiArrowDownSLine />}Sort by
					</summary>
					<div className='flex flex-col text-dark'>
						<button
							onClick={() => setSortOrder('asc')}
							className='border border-dark bg-concrete dark:bg-light '
						>
							Price (Low to High)
						</button>
						<button
							onClick={() => setSortOrder('desc')}
							className='border border-dark rounded-b-lg bg-concrete dark:bg-light '
						>
							Price (High to Low)
						</button>
					</div>
				</details>
			</div>

			<div className='p-8 flex flex-wrap justify-center'>
				{sortedItems.length > 0 ? (
					sortedItems.map((product) => (
						<div
							key={product.id}
							className='item bg-primary dark:bg-dark p-8 rounded-xl flex flex-col items-center gap-2 text-center text-light m-4 mt-12 w-full sm:w-1/3 lg:w-1/4 min-w-[240px] relative justify-between'
						>
							<img
								src={product.img}
								className={`${wi} ${hei} object-cover -mt-20 shadow-2xl ${roun} cursor-pointer`}
								onClick={() => toggleExplanation(product.id)}
							/>
							<p
								className={`text-xl flex gap-2 hover:text-primary cursor-pointer ${
									explanationId === product.id ? 'text-primary' : ''
								}`}
								onClick={() => toggleExplanation(product.id)}
							>
								{' '}
								{product.name}{' '}
							</p>

							{explanationId === product.id && (
								<span
									onClick={() => toggleExplanation(product.id)}
									className='absolute top-0 left-0 text-secondary bg-white rounded-xl z-10'
								>
									{product.description}
								</span>
							)}
							<div className='flex'>
								<p>
									{product.alcohol === true ? (
										<RiBeerFill className='text-3xl -mt-1 text-delete' />
									) : (
										''
									)}
								</p>
								<p>
									{product.spicy === true ? (
										<GiChiliPepper className='mx-2 text-3xl -mt-1 text-delete' />
									) : (
										''
									)}
								</p>
								<p>
									{product.vegetarian === true ? (
										<FaLeaf className='mx-2 text-3xl -mt-1  text-vegetarian' />
									) : (
										''
									)}
								</p>
								<p>
									{product.vegan === true ? (
										<PiPlantFill className='mx-2 text-3xl -mt-1  text-vegan' />
									) : (
										''
									)}
								</p>
							</div>
							<span className='text-light'>{product.price}€</span>
							<button
								onClick={() => onAddProduct(product)}
								className=' bg-fall text-light py-2 px-7 rounded-xl  transition duration-400 ease-in-out transform hover:scale-105 active:scale-95 active:bg-tangerine dark:active:bg-tangerine'
							>
								Add
							</button>
						</div>
					))
				) : (
					<div className='item flex flex-col items-center gap-2 text-center w-96 text-dark bg-tangerine p-14 text-3xl rounded-2xl m-4 '>
						<p className=' '>{`No results found for "${search}"`}</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Products;
