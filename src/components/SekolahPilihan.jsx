import React from "react"
import Card from "../components/Card"

const SekolahPilihan = () => {
	return (
		<div className="h-full w-full font-Nunito">
			<p className="text-white text-2xl font-bold tracking-widest mb-16 flex justify-center">
				Sekolah Pilihan
			</p>
			<div className="container flex justify-around justify-center flex-wrap">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default SekolahPilihan
