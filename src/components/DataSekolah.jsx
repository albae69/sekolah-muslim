import React from "react"
import {Link} from "react-router-dom"
import Card from "./Card"
import quran from "../assets/img/quran.jpg"

const SekolahPilihan = ({state, baseRoute, name}) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="2000"
			className="h-full w-full font-Nunito "
			style={{overflow: "hidden"}}
		>
			<p className="text-white text-2xl font-bold tracking-widest mb-16 my-10 flex justify-center">
				{name}
			</p>
			<div className="container flex justify-around  justify-center flex-wrap">
				{state.map(state => (
					<Link to={`/${state.title}`} key={state.id}>
						<Card
							img={state.img || quran}
							title={state.title}
							desc={state.desc}
							tag={state.tag}
							style={{height: "320px", width: "280px"}}
							cardClass="transform hover:-translate-y-4 font-Nunito mb-10 rounded-lg overflow-hidden shadow-lg bg-gray-100"
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SekolahPilihan
