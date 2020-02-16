import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import * as serviceWorker from "./serviceWorker"
import "./styles/style.css"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()
ReactDOM.render(<App />, document.getElementById("root"))
serviceWorker.register()
