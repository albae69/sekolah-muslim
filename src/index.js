import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import './styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Store from './store';

AOS.init();
ReactDOM.render(
	<Store>
		<App />
	</Store>,
	document.getElementById('root')
);
serviceWorker.unregister();
