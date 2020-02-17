import React, {useContext} from "react"
import {Header, Footer, Modal, DataSekolah} from "../components/"
import {GlobalState} from "../store"

const Home = () => {
	const {
		data: {sekolahTerbaru, sekolahPilihan}
	} = useContext(GlobalState)

	return (
		<div className=" w-full bg-blue-700">
			<Header />
			<DataSekolah
				state={sekolahPilihan}
				baseRoute="sekolah-pilihan"
				name="Sekolah Pilihan"
			/>
			<DataSekolah
				state={sekolahTerbaru}
				baseRoute="sekolah-terbaru"
				name="Sekolah Terbaru"
			/>
			<Footer />
			{/* <Modal /> */}
		</div>
	)
}

export default Home
