import React, {useState} from "react"
import Card from "../components/Card"
import quran from "../assets/img/quran.jpg"

const SekolahTerbaru = () => {
	const initState = [
		{
			id: 1,
			title: "a",
			desc: "lorem ipsum sit dolor amet",
			tag1: "#ikhwan",
			tag2: "#akhwat",
			tag3: "#fulldayschool",
			img: "https://cdn2.thecatapi.com/images/366.jpg"
		},
		{
			id: 2,
			title: "b",
			desc: "lorem ipsum sit dolor amet",
			tag1: "#ikhwan",
			tag2: "#akhwat",
			tag3: "#fulldayschool",
			img: "https://cdn2.thecatapi.com/images/367.jpg"
		},
		{
			id: 3,
			title: "c",
			desc: "lorem ipsum sit dolor amet",
			tag1: "#ikhwan",
			tag2: "#akhwat",
			tag3: "#fulldayschool",
			img: "https://cdn2.thecatapi.com/images/368.jpg"
		},
		{
			id: 4,
			title: "d",
			desc: "lorem ipsum sit dolor amet",
			tag1: "#ikhwan",
			tag2: "#akhwat",
			tag3: "#fulldayschool",
			img: "https://cdn2.thecatapi.com/images/369.jpg"
		},
		{
			id: 5,
			title: "e",
			desc: "lorem ipsum sit dolor amet",
			tag1: "#ikhwan",
			tag2: "#akhwat",
			tag3: "#fulldayschool"
		},
		{
			id: 6,
			title: "f",
			desc: "lorem ipsum sit dolor amet",
			tag1: "#ikhwan",
			tag2: "#akhwat",
			tag3: "#fulldayschool"
		},
		{
			id: 7,
			title: "g",
			desc: "lorem ipsum sit dolor amet",
			tag1: "#ikhwan",
			tag2: "#akhwat",
			tag3: "#fulldayschool",
			img: "https://cdn2.thecatapi.com/images/372.jpg"
		},
		{
			id: 8,
			title: "h",
			desc: "lorem ipsum sit dolor amet",
			tag1: "#ikhwan",
			tag2: "#akhwat",
			tag3: "#fulldayschool",
			img: "https://cdn2.thecatapi.com/images/373.jpg"
		}
	]

	const [state] = useState(initState)
	return (
		<div className="h-full w-full font-Nunito mt-16">
			<div data-aos="fade-up" data-aos-duration="2000">
				<p className="text-white text-2xl font-bold tracking-widest mb-16 flex justify-center">
					Sekolah Terbaru
				</p>
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="2000"
				className="container flex justify-around justify-center flex-wrap"
			>
				{state.map(state => (
					<Card
						key={state.id}
						img={state.img || quran}
						title={state.title}
						desc={state.desc}
						tag1={state.tag1}
						tag2={state.tag2}
						tag3={state.tag3}
						style={{height: "320px", width: "280px"}}
						cardClass="transform hover:-translate-y-4 font-Nunito mb-10 rounded-lg overflow-hidden shadow-lg bg-gray-100"
					/>
				))}
			</div>
		</div>
	)
}

export default SekolahTerbaru
