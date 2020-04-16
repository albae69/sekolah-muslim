import React, {useEffect, useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import {Home, Details, NotFound} from 'pages';
import ScrollToTop from 'components/ScrollToTop';
import {GlobalDispatch} from 'store';

function App() {
	const dispatch = useContext(GlobalDispatch);
	const api = process.env.REACT_APP_API;
	useEffect(() => {
		axios
			.get(`${api}/sekolah`)
			.then(res => dispatch({type: 'sekolah', payload: res.data}))
			.catch(e => console.log(e));
	}, [api, dispatch]);

	useEffect(() => {
		axios
			.get(`${api}/sekolah-pilihan`)
			.then(res => dispatch({type: 'sekolahPilihan', payload: res.data}))
			.catch(e => console.log(e));
	}, [api, dispatch]);

	return (
		<Router>
			<ScrollToTop>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/sekolah-terbaru/:nama' component={Details} />
					<Route path='/sekolah-pilihan/:nama' component={Details} />
					<Route path='*' component={NotFound} />
				</Switch>
			</ScrollToTop>
		</Router>
	);
}

export default App;
