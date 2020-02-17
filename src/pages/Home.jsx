import React, {useContext} from "react"
import {Header, Footer, DataSekolah} from "../components/"
import {GlobalState} from "../store"

const Home = () => {
	const {
		data: {sekolahTerbaru, sekolahPilihan}
	} = useContext(GlobalState)

	return (
		<div className=" w-full bg-blue-700 scrolling-auto">
			<Header />
			<DataSekolah state={sekolahPilihan} name="Sekolah Pilihan" />
			<DataSekolah state={sekolahTerbaru} name="Sekolah Terbaru" />
			<Footer />
		</div>
	)
}

export default Home
