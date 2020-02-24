import React from "react"
import {FormSearch} from "../components/"

const Search = () => {
	return (
		<div className="text-center  mx-auto my-20">
			<div data-aos="fade-up" data-aos-duration="1000">
				<span className=" text-white font-Nunito font-semibold tracking-wide sm:text-sm sm:mx-5 mx-0 md:text-3xl">
					Cari Sekolah Terbaik Untuk Putra dan Putri Anda di SekolahMuslim.com
				</span>
			</div>
			<div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
				<FormSearch />
			</div>
		</div>
	)
}

export default Search
