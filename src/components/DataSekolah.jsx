import React from "react"
import {Link} from "react-router-dom"
import Card from "./Card"
import quran from "../assets/img/quran.jpg"

const SekolahPilihan = ({state, baseRoute, name}) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="2000"
			className="h-full w-full font-Nunito w-full"
		>
			<p className="text-white text-2xl font-bold tracking-widest mb-16 my-10 flex justify-center">
				{name}
			</p>
			<div className="flex justify-around mx-5 md:mx-10  justify-center flex-wrap">
				{state.map(state => (
					<Link to={`/${baseRoute}/${state.title}`} key={state.id}>
						<Card
							img={state.img || quran}
							title={state.title}
							desc={state.desc}
							tag={state.tag}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SekolahPilihan
