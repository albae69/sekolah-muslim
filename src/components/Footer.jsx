import React from 'react';

const Footer = () => {
	const d = new Date();
	const date = d.getFullYear();

	return (
		<>
			<div
				className='footer font-Nunito'
				style={{maxWidth: '1300px', margin: 'auto'}}
			>
				<div className='footer-column-1 md:w-1/5 md:mx-32  md:text-left'>
					<span className='footer-column-1-title'>Sekolah Muslim</span>
					<p className='footer-column-1-paragraph md:mx-0'>
						Sekolah Muslim adalah website untuk mencari sekolah di seluruh
						Indonesia yang sesuai dengan sunnah.
					</p>
				</div>
				<div className='footer-column-2 md:w-1/5 md:text-left'>
					<span className='mb-5 text-2xl font-bold mb-10'>Daftar Link</span>
					<ul>
						<li>Sekolah Sunnah</li>
						<li>Sekolah Nu</li>
						<li>Sekolah Muhammadiyah</li>
						<li>Loker Muslim</li>
					</ul>
				</div>
				<div className='flex-grow w-full mb-10 md:w-1/5 md:text-left text-center'>
					<span className='mb-5  text-2xl tracking-wider font-bold mb-10'>
						Kontak
					</span>
					<p>Gegunung, Tirtohargo, Kretek</p>
					<p>Bantul 557772</p>
					<p>Daerah Istimewa Yogyakarta</p>
				</div>
			</div>
			<footer
				className='overflow-hidden text-center text-white p-5'
				id='kontak'
			>
				&copy;
				{` ${date} `}
				<a href='http://pondokprogrammer.com' target='blank'>
					<p>Pondok Programmer</p>
				</a>
			</footer>
		</>
	);
};

export default Footer;
