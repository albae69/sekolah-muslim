import React, {useContext} from 'react';
import {Header, Footer, DataSekolah} from 'components/';
import {GlobalState} from 'store';

const Home = () => {
	const {
		data: {sekolahTerbaru, sekolahPilihan},
	} = useContext(GlobalState);

	return (
		<div className='wrap'>
			<Header />
			<DataSekolah
				state={sekolahPilihan}
				baseRoute='sekolah-pilihan'
				name='Sekolah Pilihan'
			/>
			<DataSekolah
				state={sekolahTerbaru}
				baseRoute='sekolah-terbaru'
				name='Sekolah Terbaru'
			/>
			<Footer />
		</div>
	);
};

export default Home;
