import React, {useContext} from "react"
import {GlobalState} from "../store"
import quran from "../assets/img/quran.jpg"
import {Link} from "react-router-dom"

const Details = props => {
	let {namaSekolah} = props.match.params

	const {pathname} = props.location
	const {
		data: {sekolahPilihan, sekolahTerbaru}
	} = useContext(GlobalState)

	const dataSekolahTerbaru = sekolahTerbaru.filter(
		data =>
			data.namaSekolah.replace(/ /g, "-").toLowerCase() ===
			namaSekolah.replace(/ /g, "-").toLowerCase()
	)
	const dataSekolahPilihan = sekolahPilihan.filter(
		data =>
			data.namaSekolah.replace(/ /g, "-").toLowerCase() ===
			namaSekolah.replace(/ /g, "-").toLowerCase()
	)
	console.log(pathname)

	const container = state => (
		<div key={state.id} className="font-Nunito flex justify-center">
			<div className="text-white ">
				<p className="text-2xl">{state.namaSekolah}</p>
				<p>{state.desc}</p>
			</div>
			<img
				src={state.gambar || quran}
				alt=""
				style={{height: "320px", width: "300px"}}
			/>
		</div>
	)

	const dataSekolah = pathname.includes("sekolah-terbaru")
		? dataSekolahTerbaru.map(state => container(state))
		: dataSekolahPilihan.map(state => container(state))

	return (
		<div className="h-screen w-full bg-blue-600">
			<nav className="flex items-center justify-between flex-wrap p-6 font-Nunito md:mb-5">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<Link to="/">
						<span className="md:mx-10 md:my-5 font-semibold text-xl text-center lg:text-4xl tracking-wide cursor-pointer">
							Sekolah Muslim
						</span>
					</Link>
				</div>
			</nav>
			<div>{dataSekolah}</div>
		</div>
	)
}

export default Details
