import Anchor from '../designs/Anchor';

const Presentation = () => {
	return (
		<div className=' relative 2xl:mb-10 flex justify-center items-center 2xl:h-[500px] text-light'>
			<img
				src='../bg.jpg'
				alt='ramen restaurant'
				className='rounded-xl opacity-90 dark:opacity-50 h-full w-full absolute'
			/>
			<div className='z-10 text-center flex justify-center flex-col items-center'>
				<img src='logo.ico' alt='logo' className='' />
				<h1 className='font-semibold text-4xl md:text-7xl font-PermanentMarker text-light'>
					Togashi Sapporo Ramen
				</h1>

				<div className='flex justify-center'>
					<Anchor anchorName='Contact' hRef='#contact' />

					<Anchor anchorName='Info' hRef='#discount' />

					<Anchor anchorName='Gallery' hRef='#gallery' />
				</div>
			</div>
		</div>
	);
};

export default Presentation;
