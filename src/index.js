import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import * as serviceWorker from "./serviceWorker"
import "./styles/style.css"

ReactDOM.render(<App />, document.getElementById("root"))
serviceWorker.register()
