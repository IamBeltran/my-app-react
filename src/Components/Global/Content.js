//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import React, { Component } from 'react';
//	import PropTypes from 'prop-types';
	
//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import './css/Content.css';

//	──[	COMPONENT Footer ]───────────────────────────────────────────────────────────────
	class Content extends Component {
		render() {
			return (
				<div className="Content">
					<h1 className="App-title">Soy el contenido</h1>
					<p>Lorem ipsum...</p>
				</div>
			);
		}
	};

//	──[	EXPORT Footer ]──────────────────────────────────────────────────────────────────
	export default Content;
