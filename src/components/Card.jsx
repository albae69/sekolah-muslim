import React from "react"
import quran from "../assets/img/quran.jpg"

const Card = () => {
	return (
		<div
			style={{height: "360px", width: "300px"}}
			className="font-Nunito mb-5 rounded overflow-hidden shadow-lg bg-gray-100"
		>
			<img src={quran} alt="" />
			<div className="px-6 py-1">
				<p className="text-gray-600 font-bold text-2xl">Holy Quran</p>
				<p className="text-gray-700 text-sm">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
					quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
					nihil.
				</p>
			</div>
			<div className="px-6 py-4">
				<span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">
					#quran
				</span>
				<span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">
					#recite
				</span>
				<span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-5">
					#quran
				</span>
			</div>
		</div>
	)
}

export default Card
