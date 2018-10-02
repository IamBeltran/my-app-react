//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import React, { Component } from 'react';
	import PropTypes from 'prop-types';
	
//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import './css/Content.css';

//	──[	COMPONENT Footer ]───────────────────────────────────────────────────────────────
	class Content extends Component {
		static  propTypes = {
			body: PropTypes.object.isRequired,
		};
		render() {
			const { body }  = this.props;
			return (
				<div className="Content">
					{body}
				</div>
			);
		}
	};

//	──[	EXPORT Footer ]──────────────────────────────────────────────────────────────────
	export default Content;
