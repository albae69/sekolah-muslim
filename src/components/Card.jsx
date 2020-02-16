import React from "react"

const Card = ({style, desc, title, tag1, tag2, tag3, img, cardClass}) => {
	return (
		<div style={style} className={cardClass}>
			<img src={img} alt="" style={{height: " 150px", width: "100%"}} />
			<div className="px-6 py-1">
				<p className="text-gray-600 font-bold text-2xl">{title}</p>
				<p className="text-gray-700 text-sm">{desc}</p>
			</div>
			<div className="px-6 py-4">
				<span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">
					{tag1}
				</span>
				<span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">
					{tag2}
				</span>
				<span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-5">
					{tag3}
				</span>
			</div>
		</div>
	)
}

export default Card
