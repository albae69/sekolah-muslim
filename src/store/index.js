import React, {createContext, useReducer} from 'react';

// inisialisasi global state
export const GlobalState = createContext();

// inisialisasi global dispatch
export const GlobalDispatch = createContext();

// state

const initState = {
	sekolahTerbaru: [],
	sekolahPilihan: [],
	jenjangSekolah: [
		{id: 1, nama: 'SD / SDIT', jumlah: 69},
		{id: 2, nama: 'SMP / MTs', jumlah: 69},
		{id: 3, nama: 'SMA / MA', jumlah: 69},
	],
};

// create reducer
const reducer = (state, action) => {
	switch (action.type) {
		case 'sekolah':
			return {...state, sekolahTerbaru: action.payload};
		case 'sekolahPilihan':
			return {...state, sekolahPilihan: action.payload};
		default:
			return state;
	}
};

// wrap em
export default ({children}) => {
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<GlobalState.Provider value={state}>
			<GlobalDispatch.Provider value={dispatch}>
				{children}
			</GlobalDispatch.Provider>
		</GlobalState.Provider>
	);
};
