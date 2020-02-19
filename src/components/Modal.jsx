import React, {useState} from "react"
import ReactDOM from "react-dom"

const Modal = ({d, click}) => {
	const initialState = {
		namaSekolah: "",
		jenjang: "",
		namaYayasan: "",
		uangPendaftaran: "",
		uangSppBulanan: "",
		desc: "",
		alamat: "",
		kota: "",
		gmaps: "",
		phoneNumber: "",
		email: "",
		website: "",
		videoProfile: "",
		brosur: undefined,
		gambar: undefined
	}

	const data = []

	const [state, setState] = useState(data)
	const [input, setInput] = useState(initialState)

	const handleChange = e => {
		const {name, value} = e.target
		setInput({...input, [name]: value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		setState({...input, input})
		console.log(state)
	}

	return ReactDOM.createPortal(
		<div
			className="z-50 bg-smoke flex justify-center font-Nunito overflow-auto"
			style={d}
			onClick={click}
		>
			<form
				onClick={e => e.stopPropagation()}
				onSubmit={handleSubmit}
				className="bg-blue-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-auto w-4/5"
			>
				<div className="-mx-3 md:flex mb-4">
					<div className="md:w-full px-3 mb-6 md:mb-0">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Nama Sekolah
						</label>
						<input
							className="appearance-none block  w-full bg-grey-lighter  border border-grey-lighter rounded py-3 px-4"
							type="text"
							placeholder="nama sekolah"
							name="namaSekolah"
							value={input.namaSekolah}
							onChange={handleChange}
							autoComplete="off"
						/>
					</div>
					<div className="md:w-1/2 px-3 mb-6">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Jenjang
						</label>
						<div className="relative">
							<input
								className="block  appearance-none w-full bg-grey-lighter border border-grey-lighter  py-3 px-4 pr-8 rounded"
								list="jenjang"
								placeholder="pilih jenjang"
								name="jenjang"
								value={input.jenjang}
								onChange={handleChange}
								autoComplete="off"
							/>
							<datalist id="jenjang">
								<option value="sd"></option>
								<option value="smp"></option>
							</datalist>
						</div>
					</div>
					<div className="md:w-1/2 px-3">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Yayasan
						</label>
						<input
							className="appearance-none block w-full bg-grey-lighter  border border-grey-lighter rounded py-3 px-4"
							type="text"
							placeholder="nama yayasan"
							name="namaYayasan"
							value={input.namaYayasan}
							onChange={handleChange}
							autoComplete="off"
						/>
					</div>
				</div>
				<div className="-mx-3 md:flex mb-6">
					<div className="md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Uang Pendaftaran
						</label>
						<input
							className="appearance-none block  w-full bg-grey-lighter  border border-red rounded py-3 px-4 mb-3"
							type="number"
							placeholder="biaya pendaftaran"
							name="uangPendaftaran"
							value={input.uangPendaftaran}
							onChange={handleChange}
							autoComplete="off"
						/>
					</div>
					<div className="md:w-1/2 px-3">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Uang SPP Bulanan
						</label>
						<input
							className="appearance-none block w-full bg-grey-lighter  border border-grey-lighter rounded py-3 px-4"
							type="number"
							placeholder="spp bulanan"
							name="uangSppBulanan"
							value={input.uangSppBulanan}
							onChange={handleChange}
							autoComplete="off"
						/>
					</div>
				</div>
				<div className="mb-5">
					<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
						Deskripsi Sekolah
					</label>

					<textarea
						className="h-32 p-2 w-full resize-none border rounded focus:outline-none focus:shadow-outline"
						placeholder="deskripsi sekolah.."
						name="desc"
						value={input.desc}
						onChange={handleChange}
						autoComplete="off"
					></textarea>
				</div>
				<div className="-mx-3 md:flex mb-4">
					<div className="md:w-full px-3 mb-6 md:mb-0">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Alamat Sekolah
						</label>
						<textarea
							className="appearance-none block w-full bg-grey-lighter border
							border-grey-lighter rounded py-3 px-4 resize-none"
							type="text"
							placeholder="alamat sekolah.."
							name="alamat"
							value={input.alamat}
							onChange={handleChange}
							autoComplete="off"
						></textarea>
					</div>
					<div className="md:w-1/2 px-3 mb-4">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Kota / Kabupaten
						</label>
						<div className="relative">
							<input
								className="block  appearance-none w-full bg-grey-lighter border border-grey-lighter  py-3 px-4 pr-8 rounded"
								list="kota"
								placeholder="pilih kota/kabupaten"
								name="kota"
								value={input.kota}
								onChange={handleChange}
								autoComplete="off"
							/>
							<datalist id="kota">
								<option value="medan"></option>
								<option value="jogja"></option>
							</datalist>
						</div>
					</div>
					<div className="md:w-1/2 px-3 mb-4">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Google Maps
						</label>
						<input
							className="appearance-none block w-full bg-grey-lighter  border border-grey-lighter rounded py-3 px-4"
							type="text"
							placeholder="link google maps."
							name="gmaps"
							value={input.gmaps}
							onChange={handleChange}
							autoComplete="off"
						/>
					</div>
				</div>
				<div className="-mx-3 md:flex mb-4">
					<div className="md:w-1/2 px-3 mb-4">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Nomor Telepon
						</label>
						<div className="relative">
							<input
								className="block  appearance-none w-full bg-grey-lighter border border-grey-lighter  py-3 px-4 pr-8 rounded"
								placeholder="nomor telepon sekolah"
								type="number"
								name="phoneNumber"
								value={input.phoneNumber}
								onChange={handleChange}
								autoComplete="off"
							/>
						</div>
					</div>
					<div className="md:w-1/2 px-3 mb-4">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Email
						</label>
						<div className="relative">
							<input
								className="block  appearance-none w-full bg-grey-lighter border border-grey-lighter  py-3 px-4 pr-8 rounded"
								placeholder="email sekolah"
								type="email"
								name="email"
								value={input.email}
								onChange={handleChange}
								autoComplete="off"
							/>
						</div>
					</div>
					<div className="md:w-1/2 px-3 mb-4">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Website
						</label>
						<div className="relative">
							<input
								className="block  appearance-none w-full bg-grey-lighter border border-grey-lighter  py-3 px-4 pr-8 rounded"
								placeholder="alamat website sekolah"
								type="text"
								name="website"
								value={input.website}
								onChange={handleChange}
								autoComplete="off"
							/>
						</div>
					</div>
				</div>
				<div className="-mx-3 md:flex mb-4 text-white">
					<div className="md:w-1/2 px-3 mb-4">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Video Profile Sekolah
						</label>
						<div className="relative">
							<input
								className="block  text-black appearance-none w-full bg-grey-lighter border border-grey-lighter  py-3 px-4 pr-8 rounded"
								type="text"
								placeholder="link youtube"
								name="videoProfile"
								value={input.videoProfile}
								onChange={handleChange}
								autoComplete="off"
							/>
						</div>
					</div>
					<div className="md:w-1/2 px-3 mb-4">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Brosur Sekolah
						</label>
						<div className="relative">
							<input
								className="block  appearance-none w-full bg-grey-lighter border border-grey-lighter  py-3 px-4 pr-8 rounded"
								type="file"
								name="brosur"
								value={input.brosur}
								onChange={handleChange}
								autoComplete="off"
							/>
						</div>
					</div>
					<div className="md:w-1/2 px-3 mb-4">
						<label className="block text-white uppercase tracking-widest  md:text-xl text-sm font-bold mb-2">
							Gambar Sekolah
						</label>
						<div className="relative">
							<input
								className="block  appearance-none w-full bg-grey-lighter border border-grey-lighter  py-3 px-4 pr-8 rounded"
								type="file"
								name="gambar"
								value={input.gambar}
								onChange={handleChange}
								autoComplete="off"
							/>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="w-full border h-12 text-2xl text-white tracking-widest font-Nunito rounded"
				>
					Kirim
				</button>
			</form>
		</div>,
		document.getElementById("modal")
	)
}

export default Modal
