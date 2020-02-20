import React from "react"

const Card = ({style, namaYayasan, namaSekolah, gambar, kota}) => {
	return (
		<div
			style={style}
			className=" bg-white w-64  transform hover:-translate-y-4 font-Nunito rounded-lg overflow-hidden hover:shadow-xl bg-gray-10 lg:ml-5"
		>
			<img src={gambar} alt="" className="h-48 w-full p-2" />
			<div className="px-6 py-1">
				<p className="text-gray-600 font-bold text-xl">{namaSekolah}</p>
				<p className="text-gray-700 text-sm">{namaYayasan}</p>
				<p className="text-gray-700 text-sm">{kota}</p>
			</div>
			<div className="px-6 py-4"></div>
		</div>
	)
}

export default Card
