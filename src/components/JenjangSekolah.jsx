import React, {useState} from "react"
import circle from "../assets/img/circle.svg"

const JenjangSekolah = () => {
	const initState = [
		{
			id: 1,
			title: "SD IT",
			desc: "Sekolah Terpadu Islam",
			jumlah: "69"
		},
		{
			id: 2,
			title: "MTs",
			desc: "Madrasah Tsanawiyah",
			jumlah: "69"
		},
		{
			id: 3,
			title: "MA",
			desc: "Madrasah Aliyah",
			jumlah: "69"
		}
	]

	const [state] = useState(initState)

	return (
		<main
			data-aos="fade-up"
			className="font-Nunito h-full w-full overflow-hidden"
		>
			<span className="text-white text-2xl font-bold tracking-widest mb-16">
				Jenjang Sekolah
			</span>
			<div className=" flex flex-wrap md:justify-around my-10 ml-12">
				{initState.map(sekolah => (
					<div key={sekolah.id} className="text-left  flex justify-around mb-5">
						<img
							className="sm:h-full md:h-16 w-16 md:my-4"
							src={circle}
							alt=""
						/>
						<div className="mx-5 my-2 text-white font-semibold tracking-widest">
							<p className="md:text-xl ">{sekolah.title}</p>
							<span className="sm:text-sm md:text-xl">{sekolah.desc}</span>
							<br />
							<span>{sekolah.jumlah}</span>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}

export default JenjangSekolah
