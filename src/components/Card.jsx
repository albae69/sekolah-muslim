import React from "react"

const Card = ({style, desc, title, tag, img, cardClass}) => {
	return (
		<div style={style} className={cardClass}>
			<img
				src={img}
				alt=""
				style={{height: " 150px", width: "100%"}}
				className="p-3"
			/>
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
