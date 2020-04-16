import React, {Suspense} from 'react';
const Image = React.lazy(() => import('components/Image'));

const Card = ({style, yayasan, nama, gambar, asal}) => {
	return (
		<div
			style={style}
			className=' bg-white h-full w-64  transform hover:-translate-y-4 font-Nunito rounded-lg overflow-hidden hover:shadow-xl bg-gray-10 lg:ml-5'
		>
			<Suspense
				fallback={
					<div className='h-48 w-full p-2 text-center'>
						<p>Loading...</p>
					</div>
				}
			>
				<Image src={gambar} alt='' className='h-48 w-full p-2' />
			</Suspense>

			<div className='px-6 py-1 mt-2 mb-3'>
				<p className='text-gray-600 font-bold text-md'>{nama}</p>
				<p className='text-gray-700 text-sm'>{yayasan}</p>
				<p className='text-gray-700 text-sm'>{asal}</p>
			</div>
		</div>
	);
};

export default Card;
