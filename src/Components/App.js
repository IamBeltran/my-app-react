//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import React, { Component } from 'react';
	import PropTypes from 'prop-types';

//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import Header	from './Global/Header';
	import Content	from './Global/Content';
	import Footer	from './Global/Footer';
//	import './Global/css/App.css';

//	──[	DATA ]───────────────────────────────────────────────────────────────────────────
	import items from '../data/menu';

//	──[	COMPONENT Footer ]───────────────────────────────────────────────────────────────
	class App extends Component {
		static  propTypes = {
			children: PropTypes.object.isRequired,
		};
		render() {
			console.log(this.props)
			const { children }  = this.props;
			return (
				<div className="App">
				<Header title="Codejobs" items={items} />
				<Content body={children}/>
				<Footer copyright="&copy; Codejobs 2017" />
				</div>
			);
		}
	};

//	──[	EXPORT Footer ]──────────────────────────────────────────────────────────────────
	export default App;
