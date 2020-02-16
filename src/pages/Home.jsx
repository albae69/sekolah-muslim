import React from "react"
import {Header, SekolahPilihan, SekolahTerbaru} from "../components/"

const Home = () => {
	return (
		<div className="w-full bg-blue-700">
			<Header />
			<SekolahPilihan />
			{/* <SekolahTerbaru /> */}
		</div>
	)
}

export default Home
