//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
    import React, { Component } from 'react';
	import PropTypes from 'prop-types';

//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
    import './css/Footer.css';
    
//	──[	COMPONENT Footer ]───────────────────────────────────────────────────────────────
	class Footer extends Component {
		static  propTypes = {
			copyright: PropTypes.string
		};
		render() {
			const { copyright = '© React 2017' } = this.props;
			return (
				<div className="Footer">
					<p>{ copyright }</p>
				</div>
			);
		}
	}
	
//	──[	EXPORT Footer ]──────────────────────────────────────────────────────────────────
	export default Footer;
