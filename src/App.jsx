import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Home, Details, NotFound} from "./pages/"

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/sekolah-pilihan/:title" component={Details} />
					<Route path="/sekolah-terbaru/:title" component={Details} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</>
	)
}

export default App
