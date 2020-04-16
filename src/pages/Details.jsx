import React, {useContext} from 'react';
import _ from 'lodash';
import {GlobalState} from 'store';
import {fb, ig, yt} from 'assets/icons';
import quran from 'assets/img/quran.jpg';
import {Footer, Navbar} from 'components/';
import {useParams, useLocation} from 'react-router-dom';

const Details = props => {
	let {nama} = useParams();
	const {pathname} = useLocation();
	const {sekolahPilihan, sekolahTerbaru} = useContext(GlobalState);

	const dataSekolahTerbaru = _.filter(
		sekolahTerbaru,
		data =>
			data.nama.replace(/ /g, '-').toLowerCase() ===
			nama.replace(/ /g, '-').toLowerCase()
	);
	const dataSekolahPilihan = _.filter(
		sekolahPilihan,
		data =>
			data.nama.replace(/ /g, '-').toLowerCase() ===
			nama.replace(/ /g, '-').toLowerCase()
	);

	const container = state => (
		<div className='details font-Nunito' key={state._id}>
			<div className='mx-12 md:mx-16 '>
				<p className='nama-sekolah text-4xl'>{state.nama}</p>
				<p className='text-2xl'>{state.yayasan}</p>
				<p className='italic text-3xl'>{state.asal}</p>
				<img
					src={state.gambar || quran}
					alt='gambar sekolah'
					className='gambar-sekolah'
					height='500px'
					width='500px'
				/>
				<p>Gambar Sekolah</p>
				<img
					src={quran}
					alt='gambar sekolah'
					className='gambar-sekolah'
					height='500px'
					width='500px'
				/>
				<p>Brosur Sekolah</p>
			</div>
			<div className='text-center md:text-left mx-auto my-10 md:my-24'>
				<p className='md:text-4xl'>Informasi Sekolah</p>
				<p className='md:text-2xl'>
					Uang Pendaftaran : Rp.{state.uangPendaftaran}
				</p>
				<p className='md:text-2xl'>
					Uang SPP per Bulan : Rp.{state.uangSppBulanan}
				</p>
				<p className='md:text-2xl'>Nomor Telepon : {state.nomor}</p>
				<p className='md:text-2xl'>Email : {state.email}</p>
				<a href={`http://${state.website}`} target='blank'>
					<p className='text-xl'>Website : {state.website}</p>
				</a>
				<div className='flex md:justify-start justify-center'>
					<p className='m-5'>
						<a href='http://facebook.com' target='blank'>
							<img src={fb} alt='' />
						</a>
					</p>
					<p className='m-5'>
						<a href='http://instagram.com' target='blank'>
							<img src={ig} alt='' />
						</a>
					</p>
					<p className='m-5 py-1'>
						<a href='http://youtube.com' target='blank'>
							<img src={yt} alt='' />
						</a>
					</p>
				</div>
			</div>
		</div>
	);

	const dataSekolah = pathname.includes('sekolah-terbaru')
		? _.map(dataSekolahTerbaru, state => container(state))
		: _.map(dataSekolahPilihan, state => container(state));

	return (
		<div className='wrap'>
			<Navbar />
			<main className='my-20 h-full'>{dataSekolah}</main>
			<Footer />
		</div>
	);
};

export default Details;
