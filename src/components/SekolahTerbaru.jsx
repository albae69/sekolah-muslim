import React from "react"
import Card from "../components/Card"
import quran from "../assets/img/quran.jpg"

const SekolahTerbaru = () => {
	return (
		<div className="h-full w-full font-Nunito mt-16">
			<p className="text-white text-2xl font-bold tracking-widest mb-16 flex justify-center">
				Sekolah Terbaru
			</p>
			<div className="container flex justify-around justify-center flex-wrap">
				<Card
					style={{height: "300px", width: "260px"}}
					desc="lorem ipsum sit dolor amet hiya hiya hiya wibu mantappu"
					title="Mantap"
					tag1="#mantap"
					tag2="#bosq"
					tag3="#asyiap"
					img={quran}
				/>
				<Card
					style={{height: "300px", width: "260px"}}
					desc="lorem ipsum sit dolor amet hiya hiya hiya wibu mantappu"
					title="Mantap"
					tag1="#mantap"
					tag2="#bosq"
					tag3="#asyiap"
					img={quran}
				/>
				<Card
					style={{height: "300px", width: "260px"}}
					desc="lorem ipsum sit dolor amet hiya hiya hiya wibu mantappu"
					title="Mantap"
					tag1="#mantap"
					tag2="#bosq"
					tag3="#asyiap"
					img={quran}
				/>
				<Card
					style={{height: "300px", width: "260px"}}
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

export default SekolahTerbaru
