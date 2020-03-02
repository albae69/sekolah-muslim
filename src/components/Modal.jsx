import React, {useState} from "react"
import ReactDOM from "react-dom"
import NumberFormat from "react-number-format"

const Modal = ({d, click}) => {
	const initialState = {
		namaSekolah: "",
		jenjang: "",
		namaYayasan: "",
		desc: "",
		alamat: "",
		kota: "",
		gmaps: "",
		phoneNumber: "",
		email: "",
		website: "",
		videoProfile: "",
		brosur: [],
		gambar: []
	}
	// controlled input
	const [state, setState] = useState([])
	const [input, setInput] = useState(initialState)

	// controlled input by react-number-format
	const [uang, setUang] = useState({
		uangPendaftaran: "",
		uangSppBulanan: ""
	})

	// handle input
	const handleChange = e => {
		const {name, value} = e.target
		setInput({...input, [name]: value})
	}

	// handle form
	const handleSubmit = e => {
		e.preventDefault()
		let datas = Object.assign(input, uang)
		setState(datas)
	}
	console.log(state)

	// modal
	return ReactDOM.createPortal(
		<div className="modal bg-smoke font-Nunito" style={d} onClick={click}>
			<form
				onClick={e => e.stopPropagation()}
				onSubmit={handleSubmit}
				className="form"
			>
				<div className="-mx-3 md:flex mb-4">
					<div className="md:w-full px-3 mb-6 md:mb-0">
						<label className="label md:text-xl">Nama Sekolah</label>
						<input
							className="input bg-grey-lighter border-grey-lighter"
							type="text"
							placeholder="nama sekolah"
							name="namaSekolah"
							value={input.namaSekolah}
							onChange={handleChange}
							autoComplete="off"
						/>
					</div>
					<div className="md:w-1/2 px-3 mb-6">
						<label className="md:text-xl label">Jenjang</label>
						<div className="relative">
							<input
								className="input bg-grey-lighter border-grey-lighter"
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
						<label className="label md:text-xl">Yayasan</label>
						<input
							className="input bg-grey-lighter border-grey-lighter"
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
						<label className="md:text-xl label">Uang Pendaftaran</label>
						<NumberFormat
							className="input bg-grey-lighter border-grey-lighter"
							placeholder="uang pendaftaran"
							name="uangPendaftaran"
							value={uang.uangPendaftaran}
							thousandSeparator={true}
							prefix={"Rp."}
							autoComplete="off"
							onValueChange={values => {
								const {formattedValue} = values
								setUang({uangPendaftaran: formattedValue})
							}}
						/>
					</div>
					<div className="md:w-1/2 px-3">
						<label className="md:text-xl label">Uang SPP Bulanan</label>
						<NumberFormat
							className="input bg-grey-lighter border-grey-lighter"
							placeholder="spp bulanan"
							name="uangSppBulanan"
							value={uang.uangSppBulanan}
							thousandSeparator={true}
							prefix={"Rp."}
							autoComplete="off"
							onValueChange={values => {
								const {formattedValue} = values
								setUang({...uang, uangSppBulanan: formattedValue})
							}}
						/>
					</div>
				</div>
				<div className="mb-5">
					<label className="md:text-xl label">Deskripsi Sekolah</label>
					<textarea
						className="textarea focus:outline-none focus:shadow-outline"
						placeholder="deskripsi sekolah.."
						name="desc"
						value={input.desc}
						onChange={handleChange}
						autoComplete="off"
					></textarea>
				</div>
				<div className="-mx-3 md:flex mb-4">
					<div className="md:w-full px-3 mb-6 md:mb-0">
						<label className="md:text-xl label">Alamat Sekolah</label>
						<textarea
							className="textareaMD bg-grey-lighter border border-grey-lighter"
							type="text"
							placeholder="alamat sekolah.."
							name="alamat"
							value={input.alamat}
							onChange={handleChange}
							autoComplete="off"
						></textarea>
					</div>
					<div className="md:w-1/2 px-3 mb-4">
						<label className="md:text-xl label">Kota / Kabupaten</label>
						<div className="relative">
							<input
								className="input bg-grey-lighter border-grey-lighter"
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
						<label className="md:text-xl label">Google Maps</label>
						<input
							className="input bg-grey-lighter border-grey-lighter"
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
						<label className="md:text-xl label">Nomor Telepon</label>
						<div className="relative">
							<input
								className="input bg-grey-lighter border-grey-lighter"
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
						<label className="md:text-xl label">Email</label>
						<div className="relative">
							<input
								className="input bg-grey-lighter border-grey-lighter"
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
						<label className="md:text-xl label">Website</label>
						<div className="relative">
							<input
								className="input bg-grey-lighter border-grey-lighter"
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
						<label className="md:text-xl label">Video Profile Sekolah</label>
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
						<label className="md:text-xl label">Brosur Sekolah</label>
						<div className="relative">
							<input
								className="input bg-grey-lighter border-grey-lighter"
								type="file"
								name="brosur"
								value={input.brosur}
								onChange={handleChange}
								autoComplete="off"
							/>
						</div>
					</div>
					<div className="md:w-1/2 px-3 mb-4">
						<label className="md:text-xl label">Gambar Sekolah</label>
						<div className="relative">
							<input
								className="input bg-grey-lighter border-grey-lighter"
								type="file"
								name="gambar"
								value={input.gambar}
								onChange={handleChange}
								autoComplete="off"
							/>
						</div>
					</div>
				</div>
				<button type="submit" className="submit-btn font-Nunito">
					Kirim
				</button>
			</form>
		</div>,
		document.getElementById("modal")
	)
}

export default Modal
