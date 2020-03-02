import React, {useContext} from "react"
import _ from "lodash"
import {GlobalState} from "../store"
import {fb, ig, yt} from "../assets/icons"
import quran from "../assets/img/quran.jpg"
import {Footer, Navbar} from "../components/"

const Details = props => {
	let {namaSekolah} = props.match.params
	const {pathname} = props.location
	const {
		data: {sekolahPilihan, sekolahTerbaru}
	} = useContext(GlobalState)

	const dataSekolahTerbaru = _.filter(
		sekolahTerbaru,
		data =>
			data.namaSekolah.replace(/ /g, "-").toLowerCase() ===
			namaSekolah.replace(/ /g, "-").toLowerCase()
	)
	const dataSekolahPilihan = _.filter(
		sekolahPilihan,
		data =>
			data.namaSekolah.replace(/ /g, "-").toLowerCase() ===
			namaSekolah.replace(/ /g, "-").toLowerCase()
	)

	const container = state => (
		<div key={state.id}>
			<div className="details font-Nunito">
				<div className="mx-12 md:mx-16 ">
					<p className="nama-sekolah">{state.namaSekolah}</p>
					<p>{state.namaYayasan}</p>
					<p className="italic">{state.kota}</p>
					<img src={state.gambar || quran} alt="" className="gambar-sekolah" />
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
				{/* <div className="mx-auto my-10 md:my-24">
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
				</div> */}
			</div>
		</div>
	)

	const dataSekolah = pathname.includes("sekolah-terbaru")
		? _.map(dataSekolahTerbaru, state => container(state))
		: _.map(dataSekolahPilihan, state => container(state))

	return (
		<div className="wrap">
			<Navbar />
			<main className="my-20">{dataSekolah}</main>
			<Footer />
		</div>
	)
}

export default Details
