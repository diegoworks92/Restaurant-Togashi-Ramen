import { useState } from 'react';

function SignOff({ name, setName, showModal, setShowModal }) {
	const [error, setError] = useState('');
	const handleNameSubmit = () => {
		if (name.trim() === '') {
			setError('Please enter your name.');
		} else {
			setError('');
			setShowModal(false);
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleNameSubmit();
		}
	};

	return (
		<div className='App'>
			{showModal && (
				<div className='fixed z-50 inset-0 overflow-y-auto'>
					<div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
						<div
							className='fixed inset-0 transition-opacity w-full h-full'
							aria-hidden='true'
						>
							<div className='absolute inset-0 bg-gray-500 opacity-75'></div>
						</div>
						<span
							className='hidden sm:inline-block sm:align-middle sm:h-screen'
							aria-hidden='true'
						>
							&#8203;
						</span>
						<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
							<div className='bg-primary text-dark dark:bg-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
										<h3
											className='text-lg leading-6 font-medium text-light'
											id='modal-title'
										>
											Log in
										</h3>
										<div className='mt-2'>
											<input
												type='text'
												onChange={(e) => setName(e.target.value.toUpperCase())}
												onKeyPress={handleKeyPress}
												className='shadow appearance-none border rounded w-full py-2 px-3 dark:text-light dark:bg-secondary border-secondary leading-tight focus:outline-none focus:shadow-outline'
												id='username'
												type='text'
												placeholder="What's your name?"
											/>
											{error && (
												<p className='text-delete text-xs italic'>{error}</p>
											)}
										</div>
									</div>
								</div>
							</div>
							<div className='text-center bg-primary dark:bg-dark px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									type='button'
									className='bg-fall text-light py-2 px-4 rounded-xl border border-secondary transition duration-400 ease-in-out transform hover:scale-105 active:scale-95 active:bg-tangerine'
									onClick={handleNameSubmit}
								>
									Accept
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default SignOff;
