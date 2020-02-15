import React from "react"
import circle from "../assets/img/circle.svg"

const JenjangSekolah = () => {
	return (
		<main className="font-Nunito w-full sm:h-full w-full">
			<span className="text-white text-2xl font-bold tracking-widest">
				Jenjang Sekolah
			</span>
			<div className="flex flex-wrap justify-between my-10 mx-16">
				<div className="flex justify-between mb-5">
					<img className="sm:h-auto md:h-20 w-20 " src={circle} alt="" />
					<div className="text-left mx-5 my-2 text-white font-semibold tracking-widest">
						<p className="md:text-xl">SD IT</p>
						<span className="sm:text-base md:text-sm">
							SEKOLAH TERPADU ISLAM
						</span>
						<br />
						<span>Jumlah : 0</span>
					</div>
				</div>
				<div className="flex justify-between mb-5">
					<img className="sm:h-auto md:h-20 w-20  " src={circle} alt="" />
					<div className="text-left mx-5 my-2 text-white font-semibold tracking-widest">
						<p>MTS</p>
						<span>MADRASAH TSANAWIYAH</span>
						<br />
						<span>Jumlah : 0</span>
					</div>
				</div>
				<div className="flex justify-between mb-5">
					<img className="sm:h-auto md:h-20 w-20  " src={circle} alt="" />
					<div className="text-left mx-5 my-2 text-white font-semibold tracking-widest">
						<p>MA</p>
						<span>MADRASAH ALIYAH</span>
						<br />
						<span>Jumlah : 0</span>
					</div>
				</div>
			</div>
		</main>
	)
}

export default JenjangSekolah
