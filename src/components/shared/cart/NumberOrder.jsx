import { RiCloseLine } from 'react-icons/ri';

const NumberOrder = ({ setShowOrder }) => {
	// Checks if a random number already exists in the session storage
	let numeroAleatorio = sessionStorage.getItem('numeroAleatorio');

	// If it does not exist, generate a new one and save it
	if (!numeroAleatorio) {
		numeroAleatorio = Math.floor(Math.random() * (210 - 23 + 1)) + 23; // Generate a random number between 23 and 210
		sessionStorage.setItem('numeroAleatorio', numeroAleatorio); // Save it to the session storage
	}

	return (
		<>
			<RiCloseLine
				onClick={() => setShowOrder(false)}
				className='2xl:hidden absolute right-4 top-15 p-3 box-content  bg-secondary rounded-full text-xl'
			/>
			<h1 className='text-2xl my-4 text-dark dark:text-light'>{`Order #${numeroAleatorio}`}</h1>
		</>
	);
};

export default NumberOrder;
