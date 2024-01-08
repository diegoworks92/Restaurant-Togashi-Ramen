import { useState } from 'react';
import {
	RiDeleteBin6Line,
	RiBeerFill,
	RiArrowDownSLine,
	RiArrowUpSLine,
} from 'react-icons/ri';
import { PiPlantFill } from 'react-icons/pi';
import { FaLeaf } from 'react-icons/fa';
import { GiChiliPepper } from 'react-icons/gi';

const Orders = (props) => {
	const {
		allProducts,
		setAllProducts,
		total,
		setTotal,
		countProducts,
		setCountProducts,
		descriptions,
		disguise,
		explanation,
		trash,
		trash2,
		pFour,
	} = props;

	const onAddProductCar = [...allProducts];

	const onDeleteProduct = (product) => {
		const results = allProducts.filter((item) => item.id !== product.id);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const [explanationId, setExplanationId] = useState(null);

	const toggleExplanation = (id) => {
		setExplanationId(explanationId === id ? null : id);
		setArrowUp(!arrowUp);
	};

	const [arrowUp, setArrowUp] = useState(false);

	return (
		<div className='overflow-y-scroll'>
			<div className='flex justify-between mb-1 -mt-4 p-4 text-dark dark:text-light'>
				<h5 className=''>Item</h5>

				<div className='flex items-center ml-auto'>
					<h5 className=''>Qty</h5>
				</div>

				<div className='flex items-center ml-9'>
					<h5>Price</h5>
				</div>
			</div>
			{onAddProductCar.map((product) => (
				<div key={product.id}>
					<div
						className={`bg-primary border border-light dark:bg-secondary pt-4 pl-4 pr-4 ${pFour} rounded-xl mb-4`}
					>
						<div className='grid grid-cols-6 mb-4'>
							{/* Product description */}
							<div className='col-span-6 flex items-center gap-4 '>
								<img
									src={product.img}
									className={` ${
										product.type === 'drinks' ? 'w-50 h-10' : 'w-10 h-10'
									} object-cover`}
								></img>
								<div>
									<h5 className='text-md text-light dark:text-light'>
										{product.name}
									</h5>
								</div>

								<div className={`flex ${disguise}`}>
									<p>
										{product.alcohol === true ? (
											<RiBeerFill
												className={`text-3xl mx-2 -mt-1 text-delete`}
											/>
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

								<div className='flex items-center ml-auto'>
									<span className='text-light dark:text-light'>
										{product.quantity}
									</span>
								</div>

								<div className='flex items-center ml-3'>
									<span className='text-light dark:text-light'>
										{product.price}€
									</span>
								</div>
							</div>
						</div>
						{/* Note */}
						<div className='grid grid-cols-6 items-center'>
							<div
								className={`${descriptions} col-span-5 border border-light rounded-xl`}
							>
								<p className='m-1'>{product.description}</p>
							</div>

							<div className={`${explanation} col-span-6 flex justify-around`}>
								<div className={`flex justify-center flex-col items-center`}>
									<button
										className={`text-sm  hover:text-primary cursor-pointer flex ${
											explanationId === product.id ? 'text-primary' : ''
										}`}
										onClick={() => toggleExplanation(product.id)}
									>
										Description
									</button>
									<p onClick={() => toggleExplanation(product.id)}>
										{arrowUp ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
									</p>
								</div>

								<button>
									<RiDeleteBin6Line
										onClick={() => onDeleteProduct(product)}
										className={`${trash2} w-9 h-9 p-2 text-delete border border-delete rounded-full`}
									/>
								</button>
							</div>

							<div className={`${explanation} col-span-6 pt-1`}>
								{explanationId === product.id && (
									<p
										onClick={() => toggleExplanation(product.id)}
										className=' text-light border border-light rounded-xl z-10'
									>
										{product.description}
									</p>
								)}
							</div>

							<div>
								<button>
									<RiDeleteBin6Line
										onClick={() => onDeleteProduct(product)}
										className={`${trash} w-9 h-9 p-2 ml-3 md:ml-16 text-delete  border border-delete rounded-full`}
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Orders;
