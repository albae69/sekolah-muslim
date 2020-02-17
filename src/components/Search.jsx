import React from "react"
import {FormSearch, JenjangSekolah} from "../components/"

const Search = () => {
	return (
		<div className="text-center mx-auto my-20">
			<div data-aos="fade-up">
				<span className=" text-white font-Nunito font-semibold tracking-wide sm:text-sm md:text-3xl">
					Cari Sekolah Terbaik Untuk Putra dan Putri Anda di SekolahMuslim.com
				</span>
			</div>
			<div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
				<FormSearch />
			</div>
			<div data-aos="fade-up" data-aos-duration="2000">
				<JenjangSekolah />
			</div>
		</div>
	)
}

export default Search
