import React from "react"

const Modal = ({d, click}) => {
	return (
		<>
			<div className="flex bg-smoke z-50 fixed w-full font-Nunito">
				<div className="relative p-8 rounded bg-gray-600 h-screen w-4/5 m-auto flex-col flex">
					<span className="text-center font-bold tracking-wider text-2xl  text-blue-500">
						Informasi Umum
					</span>
					<span className="text-center rounded font-semibold italic border p-1 bg-blue-200 text-blue-700">
						<strong className="text-blue-900">Perhatian! </strong>
						mohon data diisi dengan sebenarnya.
					</span>
					<form>
						<div className="flex flex-wrap justify-center">
							<div className="pt-16 mx-10  flex-grow mb-5">
								<label className="text-2xl font-medium text-white absolute -my-10 tracking-wide">
									Nama Sekolah
								</label>
								<input
									type="text"
									placeholder="ketik nama sekolah.."
									className="h-10 md:w-full border rounded-sm px-4"
									name="nama-sekolah"
								/>
							</div>
							<div className="flex flex-wrap justify-center">
								<div className="pt-16 mb-5">
									<label className="text-2xl font-medium text-white absolute -my-10 tracking-wide">
										Jenjang
									</label>
									<input
										type="text"
										placeholder="pilih jenjang pendidikan"
										className="h-10 w-56 border rounded-sm px-4"
										name="jenjang"
										list="jenjang"
									/>
									<datalist id="jenjang">
										<option value="bisa" />
										<option value="tidak" />
									</datalist>
								</div>
								<div className="pt-16 mx-10 mb-5">
									<label className="text-2xl font-medium text-white absolute -my-10 tracking-wide">
										Nama Yayasan
									</label>
									<input
										type="text"
										placeholder="ketik nama yayasan.."
										className="h-10 w-56 border rounded-sm px-4"
										name="nama-yayasan"
									/>
								</div>
							</div>

							<div className="pt-16 mx-10  flex-grow mb-5">
								<label className="text-2xl font-medium text-white absolute -my-10 tracking-wide">
									Uang Pendaftaran
								</label>
								<input
									type="number"
									placeholder="jumlah uang pendaftaran"
									className="h-10 md:w-full border rounded-sm px-4"
									name="uang-pendaftaran"
								/>
							</div>
							<div className="pt-16 mx-10  flex-grow mb-5">
								<label className="text-2xl font-medium text-white absolute -my-10 tracking-wide">
									SPP Bulanan
								</label>
								<input
									type="number"
									placeholder="jumlah uang spp bulanan"
									className="h-10 md:w-full border rounded-sm px-4 "
									name="spp-bulanan"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Modal
