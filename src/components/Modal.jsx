import React from "react"

const Modal = ({d}) => {
	return (
		<div
			style={d}
			className="fixed z-10 pt-64 w-full h-full overflow-auto"
		></div>
	)
}

export default Modal
