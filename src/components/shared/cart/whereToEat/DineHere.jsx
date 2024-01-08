import React from 'react';

const DineHere = ({ numberWithDecimal }) => {
	return (
		<div className='flex items-center justify-between mb-4'>
			<p>Final price:</p>
			<p>{numberWithDecimal}€</p>
		</div>
	);
};

export default DineHere;
