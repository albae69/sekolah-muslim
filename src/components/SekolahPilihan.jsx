import React from "react"
import Card from "../components/Card"
import quran from "../assets/img/quran.jpg"

const SekolahPilihan = () => {
	return (
		<div className="h-full w-full font-Nunito">
			<p className="text-white text-2xl font-bold tracking-widest mb-16 flex justify-center">
				Sekolah Pilihan
			</p>
			<div className="container flex justify-around justify-center flex-wrap">
				<Card
					style={{height: "360px", width: "300px"}}
					desc="lorem ipsum sit dolor amet hiya hiya hiya wibu mantappu"
					title="Mantap"
					tag1="#mantap"
					tag2="#bosq"
					tag3="#asyiap"
					img={quran}
				/>
				<Card
					style={{height: "360px", width: "300px"}}
					desc="lorem ipsum sit dolor amet hiya hiya hiya wibu mantappu"
					title="Mantap"
					tag1="#mantap"
					tag2="#bosq"
					tag3="#asyiap"
					img={quran}
				/>
				<Card
					style={{height: "360px", width: "300px"}}
					desc="lorem ipsum sit dolor amet hiya hiya hiya wibu mantappu"
					title="Mantap"
					tag1="#mantap"
					tag2="#bosq"
					tag3="#asyiap"
					img={quran}
				/>
			</div>
		</div>
	)
}

export default SekolahPilihan
