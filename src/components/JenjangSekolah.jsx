import React, {useContext} from 'react';
import circle from 'assets/img/circle.svg';
import {GlobalState} from 'store/';

const JenjangSekolah = () => {
	const {jenjangSekolah} = useContext(GlobalState);

	return (
		<main
			className='font-Nunito jenjang-sekolah'
			style={{maxWidth: '1300px', margin: 'auto'}}
		>
			<span
				data-aos='fade-up'
				data-aos-duration='2000'
				className='jenjang-sekolah-title'
			>
				Jenjang Sekolah
			</span>
			<div className='md:justify-around jenjang-sekolah-wrap'>
				{jenjangSekolah.length === 0
					? ''
					: jenjangSekolah.map(sekolah => (
							<div
								data-aos='fade-up'
								data-aos-duration='2000'
								key={sekolah.id}
								className='jenjang-sekolah-wrap_map'
							>
								<img
									className='sm:h-full md:h-16 w-16 md:my-4'
									src={circle}
									alt=''
								/>
								<div className='jenjang-sekolah-text'>
									<span className='sm:text-sm md:text-xl'>{sekolah.nama}</span>
									<br />
									<span>{sekolah.jumlah}</span>
								</div>
							</div>
					  ))}
			</div>
		</main>
	);
};

export default JenjangSekolah;
