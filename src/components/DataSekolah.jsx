import React from "react"
import {Link} from "react-router-dom"
import Card from "./Card"
import quran from "../assets/img/quran.jpg"

const SekolahPilihan = ({state, baseRoute, name}) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="2000"
			className="h-full w-full lg:mx-auto font-Nunito mx-auto"
		>
			<p className="text-white text-2xl font-bold tracking-widest mb-16 flex justify-center">
				{name}
			</p>
			<div className="flex justify-between flex-wrap mx-5">
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
