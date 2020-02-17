import React, {useContext} from "react"
import {GlobalState} from "../store"
import quran from "../assets/img/quran.jpg"

const Details = props => {
	const {title} = props.match.params
	const {pathname} = props.location

	const {
		data: {sekolahPilihan, sekolahTerbaru}
	} = useContext(GlobalState)

	const dataSekolahTerbaru = sekolahTerbaru.filter(data => data.title === title)
	const dataSekolahPilihan = sekolahPilihan.filter(data => data.title === title)

	if (pathname.includes("sekolah-terbaru")) {
		return (
			<>
				{dataSekolahTerbaru.map(state => (
					<div key={state.id}>
						<p>{state.title}</p>
						<p>{state.desc}</p>
						<p>{state.tag}</p>
						<img
							src={state.img || quran}
							alt=""
							style={{height: "320px", width: "300px"}}
						/>
					</div>
				))}
			</>
		)
	}

	return (
		<>
			{dataSekolahPilihan.map(state => (
				<div key={state.id}>
					<p>{state.title}</p>
					<p>{state.desc}</p>
					<p>{state.tag}</p>
					<img
						src={state.img || quran}
						alt=""
						style={{height: "320px", width: "300px"}}
					/>
				</div>
			))}
		</>
	)
}

export default Details
