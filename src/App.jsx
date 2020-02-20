import React, {useContext} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Home, Details, NotFound} from "./pages/"
import {GlobalState} from "./store"

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/sekolah-terbaru/:namaSekolah" component={Details} />
					<Route path="/sekolah-pilihan/:namaSekolah" component={Details} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</>
	)
}

export default App
