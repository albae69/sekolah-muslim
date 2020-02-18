import React from "react"

const Card = ({style, desc, title, tag, img}) => {
	return (
		<div
			style={style}
			className="bg-white md:h-10/11 md:w-64 w-11/12 mx-auto transform hover:-translate-y-4 font-Nunito mb-10 rounded-lg overflow-hidden hover:shadow-xl bg-gray-10"
		>
			<img src={img} alt="" className="h-48 w-full p-2" />
			<div className="px-6 py-1">
				<p className="text-gray-600 font-bold text-2xl">{title}</p>
				<p className="text-gray-700 text-sm">{desc}</p>
			</div>
			<div className="px-6 py-4">
				{tag.map(tag => (
					<span
						key={tag}
						className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	)
}

export default Card
