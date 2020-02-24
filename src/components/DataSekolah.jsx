import React from "react"
import {Link} from "react-router-dom"
import Card from "./Card"
import quran from "../assets/img/quran.jpg"

const DataSekolah = ({state, baseRoute, name}) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="2000"
			className="h-full w-full lg:mx-auto font-Nunito mx-auto"
		>
			<p className="text-white text-2xl font-bold tracking-widest mb-16 flex justify-center">
				{name}
			</p>
			<div
				className="flex justify-between flex-wrap mx-5 lg:justify-center"
				style={{maxWidth: "1300px", margin: "auto"}}
			>
				{state.map(state => (
					<Link
						to={`/${baseRoute}/${state.namaSekolah
							.replace(/ /g, "-")
							.toLowerCase()}`}
						key={state.id}
						className="mb-20 mx-auto"
					>
						<Card
							gambar={state.gambar || quran}
							namaSekolah={state.namaSekolah}
							namaYayasan={state.namaYayasan}
							kota={state.kota}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default DataSekolah
