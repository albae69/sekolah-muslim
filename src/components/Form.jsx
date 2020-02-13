import React from "react"

const Form = () => {
	return (
		<form className="font-Nunito my-20 h-auto w-auto">
			<label
				htmlFor="cari-sekolah"
				className="text-white text-xl tracking-wide mx-2 absolute -my-8"
			>
				Cari Sekolah
			</label>
			<input
				type="text"
				name="cari-sekolah"
				placeholder="cari sekolah.."
				autoComplete="off"
				className="h-8 w-64 p-4 border rounded-full focus:outline-none mr-32"
			/>
			<label
				htmlFor="cari-daerah"
				className="text-white text-xl tracking-wide mx-2 absolute -my-8"
			>
				Daerah Asal
			</label>
			<button className="border text-white p-2 rounded-full py-1 px-8 tracking-widest mx-10 focus:outline-none hover:bg-blue-400 hover:border-transparent">
				Cari
			</button>
		</form>
	)
}

export default Form
