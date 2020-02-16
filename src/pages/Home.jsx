import React from "react"
import {Header, SekolahPilihan, SekolahTerbaru, Footer} from "../components/"

const Home = () => {
	return (
		<div className=" w-full bg-blue-700 scrolling-auto">
			<Header />
			<SekolahPilihan />
			<SekolahTerbaru />
			<Footer />
		</div>
	)
}

export default Home
