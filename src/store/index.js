import React, {createContext, useReducer} from "react"
import data from "../data/data.json"

// inisialisasi global state
export const GlobalState = createContext()

// inisialisasi global dispatch
export const GlobalDispatch = createContext()

// state

const initState = {data}

// create reducer
const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state
	}
}

// wrap em
export default ({children}) => {
	const [state, dispatch] = useReducer(reducer, initState)
	return (
		<GlobalState.Provider value={state}>
			<GlobalDispatch.Provider value={dispatch}>
				{children}
			</GlobalDispatch.Provider>
		</GlobalState.Provider>
	)
}
