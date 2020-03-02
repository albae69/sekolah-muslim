import React, {useState} from "react"
import {Navbar} from "../components"
import _ from "lodash"

const Search = () => {
	const [school, setSchool] = useState([
		{
			id: 1,
			namaSekolah: "SMK NEGERI 1 PERCUT SEI TUAN",
			asalDaerah: "Sumatera Utara"
		},
		{id: 2, namaSekolah: "SMK NEGERI 1 JOGJA", asalDaerah: "Yogyakarta"},
		{id: 3, namaSekolah: "SMK NEGERI 1 BANTUL", asalDaerah: "Yogyakarta"}
	])
	const [input, setInput] = useState({
		sekolah: "",
		asal: ""
	})

	const handleChange = e => {
		const {name, value} = e.target
		setInput({...input, [name]: value})
	}

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<div className="h-screen bg-blue-500">
			<Navbar />
			<main className="flex justify-center">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={input.sekolah}
						onChange={handleChange}
						name="sekolah"
						autoComplete="off"
						className="mx-5 px-3 py-2 rounded mb-10"
						placeholder="cari sekolah"
					/>
					<input
						type="text"
						placeholder="asal daerah.."
						className="mx-5 px-3 py-2 rounded"
						value={input.asal}
						list="asal"
						onChange={handleChange}
						autoComplete="off"
						name="asal"
					/>
					<datalist id="asal">
						{_.map(school, s => (
							<option key={s.id} value={s.asalDaerah} />
						))}
					</datalist>
					<input type="submit" value="submit" />
				</form>
			</main>
		</div>
	)
}

export default Search
