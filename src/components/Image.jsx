import React from "react"

const Image = ({src, alt, className}) => {
	return (
		<>
			<img src={src} alt={alt} className={className} />
		</>
	)
}

export default Image
