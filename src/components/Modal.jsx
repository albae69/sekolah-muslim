import React from "react"

const Modal = ({d, click}) => {
	return (
		<div
			onClick={click}
			style={d}
			className="pt-10 fixed z-10 w-full h-full bg-black opacity-75 font-Nunito flex justify-center"
		>
			<div className="border w-10/12">
				<div className="text-center">
					<h3 className="text-white text-xl font-bold tracking-widest pt-5">
						Informasi Umum
					</h3>
				</div>
				<div className="border flex justify-center mx-20 my-20 bg-green-100">
					<span className="text-green-900 text-center ">
						<strong className="mx-2">Perhatian!</strong>
						Mohon isi data dengan benar.
					</span>
				</div>
			</div>
			<form></form>
		</div>
	)
}

export default Modal
