import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="navbar font-Nunito">
			<div className="nav">
				<Link to="/">
					<span className="brand md:mx-10 md:my-5 lg:text-4xl">
						Sekolah Muslim
					</span>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
