import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Details, NotFound} from 'pages/';
import ScrollToTop from 'components/ScrollToTop';

function App() {
	return (
		<Router>
			<ScrollToTop>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/sekolah-terbaru/:namaSekolah' component={Details} />
					<Route path='/sekolah-pilihan/:namaSekolah' component={Details} />
					<Route path='*' component={NotFound} />
				</Switch>
			</ScrollToTop>
		</Router>
	);
}

export default App;
