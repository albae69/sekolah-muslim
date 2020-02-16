import React from "react"
import {Form, JenjangSekolah} from "../components/"

const Search = () => {
	return (
		<div className="text-center mx-auto my-20">
			<span className=" text-white font-Nunito font-semibold tracking-wide sm:text-sm md:text-3xl">
				Cari Sekolah Terbaik Untuk Putra dan Putri Anda di SekolahMuslim.com
			</span>

			<Form />
			<JenjangSekolah />
		</div>
	)
}

export default Search
