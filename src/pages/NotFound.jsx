import React from "react"
import {Link} from "react-router-dom"

const NotFound = history => {
	return (
		<div className="flex justify-center align-middle text-xl font-bold text-gray-600 pt-64">
			<p> error 404 | page not found.</p>
			<Link to="/">
				<p className="pt-10 -mx-32 font-light">back</p>
			</Link>
		</div>
	)
}

export default NotFound
