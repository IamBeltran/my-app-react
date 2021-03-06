//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import React from 'react';
	import { render } from 'react-dom';
	import { BrowserRouter as Router } from 'react-router-dom';
//	import PropTypes from 'prop-types';

//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import './index.css';
	import AppRoutes from './Routes'
	import registerServiceWorker from './registerServiceWorker';

//	──[ RENDER App ]─────────────────────────────────────────────────────────────────────
	render(
		<Router>
			<AppRoutes/>
		</Router>, 
		document.getElementById('root')
	);

//	──[	REGISTER SERVICE WORKER ]────────────────────────────────────────────────────────
	registerServiceWorker();
