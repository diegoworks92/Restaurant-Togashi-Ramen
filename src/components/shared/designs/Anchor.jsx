const Anchor = (props) => {
	const { hRef, anchorName } = props;

	return (
		<a
			href={hRef}
			className='bg-primary hover:bg-primHover m-4 text-light py-2 px-4 rounded-xl transition duration-400 ease-in-out transform hover:scale-105 active:scale-95'
		>
			{anchorName}
		</a>
	);
};

export default Anchor;
