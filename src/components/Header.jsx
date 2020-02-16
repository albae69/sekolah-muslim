import React, {useState} from "react"
import {Search, Modal} from "../components/"
import {Link} from "react-router-dom"

const Header = () => {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	const [modal, setModal] = useState(false)
	const toggleModal = () => {
		setModal(!modal)
	}

	return (
		<div className="bg-no-repeat bg-center bg-cover  w-full h-full">
			<nav className="flex items-center justify-between flex-wrap p-6 font-Nunito md:mb-5">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<Link to="/">
						<span className="md:mx-10 md:my-5 font-semibold text-xl text-center lg:text-4xl tracking-wide cursor-pointer">
							Sekolah Muslim
						</span>
					</Link>
				</div>
				<div className="block lg:hidden">
					<button
						onClick={handleClick}
						className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white btn mx-0"
					>
						<svg
							className="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<div
					className={`w-full  ${
						open ? "block" : "hidden"
					}  lg:block lg:flex justify-between lg:items-center lg:w-auto tracking-wider md:my-6 md:ml-10 mr-10 md:mb-4 mb-0`}
				>
					<div className="lg:flex-grow">
						<a
							href="#kontak"
							className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4 text-sm font-bold tracking-wider"
						>
							Kontak
						</a>
					</div>
					<div>
						<button
							onClick={toggleModal}
							className="inline-block px-4 py-2 leading-none border rounded font-bold tracking-wide text-white border-white btn hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 text-sm"
						>
							Tambah Sekolah
						</button>
					</div>
				</div>
			</nav>
			<hr className="mx-auto w-11/12 md:-my-6 my-0 opacity-50" />
			<Search />
		</div>
	)
}

export default Header
