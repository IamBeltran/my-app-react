//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import React from 'react';
	import { render } from 'react-dom';
//	import PropTypes from 'prop-types';

//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import './index.css';
	import App from './components/App';
	import registerServiceWorker from './registerServiceWorker';

//	──[ RENDER App ]─────────────────────────────────────────────────────────────────────
	render(
		<App />, 
		document.getElementById('root')
	);

//	──[	REGISTER SERVICE WORKER ]────────────────────────────────────────────────────────
	registerServiceWorker();
