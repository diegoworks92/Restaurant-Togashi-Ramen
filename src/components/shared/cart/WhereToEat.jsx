import { useState } from 'react';

const WhereToEat = (props) => {
	const {
		buttonsClass,
		activeButton,
		setActiveButton,
		whereToEat,
		setWhereToEat,
	} = props;

	const buttons = [
		{ id: 1, name: 'Dine Here' },
		{ id: 2, name: 'Collection' },
		{ id: 3, name: 'Delivery' },
	];

	const clickDine = (id) => {
		setActiveButton(id);

		if (id === 1) {
			setWhereToEat(1);
		}
		if (id === 2) {
			setWhereToEat(2);
		}
		if (id === 3) {
			setWhereToEat(3);
		}
	};

	return (
		<>
			{/* Pills */}
			<div className={buttonsClass}>
				{buttons.map((button) => (
					<button
						key={button.id}
						className={`py-2 px-2 rounded-xl ${
							activeButton === button.id
								? 'bg-primary text-light dark:text-light'
								: 'text-dark dark:text-primary border border-dark dark:border-light'
						}`}
						onClick={() => clickDine(button.id)}
					>
						{button.name}
					</button>
				))}
			</div>
		</>
	);
};

export default WhereToEat;
