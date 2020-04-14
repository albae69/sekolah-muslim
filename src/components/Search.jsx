import React from 'react';
import {FormSearch} from 'components/';

const Search = () => {
	return (
		<div className='search md:my-10'>
			<div data-aos='fade-up' data-aos-duration='1000'>
				<span className='search-title sm:text-sm sm:mx-5 md:text-3xl font-Nunito'>
					Cari Sekolah Terbaik Untuk Putra dan Putri Anda di SekolahMuslim.com
				</span>
			</div>
			<div data-aos='fade-up' data-aos-duration='1000' data-aos-easing='linear'>
				<FormSearch />
			</div>
		</div>
	);
};

export default Search;
