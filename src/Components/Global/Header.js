//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import React, { Component } from 'react';
	import PropTypes from 'prop-types';
	import { Link } from 'react-router-dom';

//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import logo from './images/logo.svg';
	import './css/Header.css';
	
//	──[	COMPONENT Header ]───────────────────────────────────────────────────────────────
	class Header extends Component {
		static  propTypes = {
			title: PropTypes.string.isRequired,
			items: PropTypes.array.isRequired
		};

		render() {
			const { title, items } = this.props;

			return (
				<div className="Header">
					<header className="logo">
						<img src={ logo }  alt="Logo" />
						<h2 className="App-title">{ title }</h2>
						<ul className="Menu">
							{
								items && items.map((item, key) =>
									<li key={key}><Link to={item.url}>{item.title}</Link></li>
								)
							}
						</ul>
					</header>
				</div>
			);
		}
	};

//	──[	EXPORT Header ]──────────────────────────────────────────────────────────────────
	export default Header;
