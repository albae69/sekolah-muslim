import React, {useContext} from "react"
import {GlobalState} from "../store"
import {fb, ig, yt} from "../assets/icons"
import quran from "../assets/img/quran.jpg"
import {Link} from "react-router-dom"
import {Footer} from "../components/"

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

	const container = state => (
		<div key={state.id}>
			<div className="flex justify-between flex-wrap text-white tracking-wider font-Nunito">
				<div className="mx-12 md:mx-16 ">
					<p className="text-2xl font-bold">{state.namaSekolah}</p>
					<p>{state.namaYayasan}</p>
					<p className="italic">{state.kota}</p>
					<img
						src={state.gambar || quran}
						alt=""
						className="rounded-lg my-6 h-64 w-64"
					/>
				</div>
				<div className="text-center md:text-left mx-auto my-10 md:my-24">
					<p className="text-2xl">Informasi Sekolah</p>
					<p>Uang Pendaftaran : Rp.{state.uangPendaftaran}</p>
					<p>Uang SPP per Bulan : Rp.{state.uangSppBulanan}</p>
					<p>Nomor Telepon : {state.phoneNumber}</p>
					<p>Email : {state.email}</p>
					<a href={`http://${state.website}`} target="blank">
						<p>Website : {state.website}</p>
					</a>
					<div className="flex md:justify-start justify-center">
						<p className="m-5">
							<a href="http://facebook.com" target="blank">
								<img src={fb} alt="" />
							</a>
						</p>
						<p className="m-5">
							<a href="http://instagram.com" target="blank">
								<img src={ig} alt="" />
							</a>
						</p>
						<p className="m-5 py-1">
							<a href="http://youtube.com" target="blank">
								<img src={yt} alt="" />
							</a>
						</p>
					</div>
				</div>
				<div className="mx-auto my-10 md:my-24">
					<p className="text-center text-2xl">Galeri</p>
					<div className="md:mx-12 md:mx-0 border rounded-lg bg-white h-64 w-64 ">
						<div className="flex justify-between flex-wrap">
							<div className="flex-grow bg-gray-400 h-16 m-3 rounded"></div>
							<div className="flex-grow bg-gray-400 h-16 m-3 rounded"></div>
							<div className="flex-grow bg-gray-400 h-16 m-3 rounded"></div>
						</div>
						<div className="flex-grow bg-gray-400 h-12 m-3 rounded"></div>
						<div className="flex justify-between flex-wrap">
							<div className="flex-grow bg-gray-400 h-16 m-3 rounded"></div>
							<div className="flex-grow bg-gray-400 h-16 m-3 rounded"></div>
							<div className="flex-grow bg-gray-400 h-16 m-3 rounded"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

	const dataSekolah = pathname.includes("sekolah-terbaru")
		? dataSekolahTerbaru.map(state => container(state))
		: dataSekolahPilihan.map(state => container(state))

	return (
		<div className="h-full w-full bg-blue-500">
			<nav className="flex items-center justify-between flex-wrap p-6 font-Nunito">
				<div className="flex items-center flex-shrink-0 text-white mr-6 text-center ">
					<Link to="/">
						<span className="md:mx-10 md:my-5 font-semibold text-xl lg:text-4xl tracking-wide cursor-pointer">
							Sekolah Muslim
						</span>
					</Link>
				</div>
			</nav>
			<main className="my-20">{dataSekolah}</main>
			<Footer />
		</div>
	)
}

export default Details
