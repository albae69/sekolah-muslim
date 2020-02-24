import React from "react"

const Footer = () => {
	return (
		<>
			<div
				className="h-full w-full pt-20 text-white  font-Nunito  flex justify-around justify-center flex-wrap"
				style={{maxWidth: "1300px", margin: "auto"}}
			>
				<div className="flex-grow w-full  md:text-left text-center  mb-10   md:w-1/5 md:mx-32">
					<span className="text-4xl font-bold tracking-widest">
						Sekolah Muslim
					</span>
					<p className="text-base mx-10 md:mx-0">
						Lorem ipsum dolor sit amet consectetur adipisicing. Earum ipsam
						expedita fugiat excepturi laborum reprehenderit possimus, vero
						similique beatae.
					</p>
				</div>
				<div className="flex-grow w-full  mb-10 md:w-1/5  tracking-wider md:text-left text-center">
					<span className="mb-5 text-2xl font-bold mb-10">Daftar Link</span>
					<ul>
						<li>Sekolah Sunnah</li>
						<li>Sekolah Nu</li>
						<li>Sekolah Muhammadiyah</li>
						<li>Loker Muslim</li>
					</ul>
				</div>
				<div className="flex-grow w-full mb-10 md:w-1/5 md:text-left text-center">
					<span className="mb-5  text-2xl tracking-wider font-bold mb-10">
						Kontak
					</span>
					<p>Pondok Programmer</p>
					<p>Kretek, Bantul, Yogyakarta</p>
					<p>+62 69696969</p>
				</div>
			</div>
			<footer className="text-center text-white p-5" id="kontak">
				&copy; 2020 Pondok Programmer
			</footer>
		</>
	)
}

export default Footer
