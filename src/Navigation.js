import React from 'react';
import './Navigation.css';
const Navigation = () => {
	return (
		<nav>
				 <a href='#' className='bttn-dark'>Home</a>
				 <a href='#gallery'className='changeColor'>Gallery</a>
				 <a href='#contributors'className='changeColor'>Contributors</a>
				 <a href='#' className='contact changeColor'>Contact</a>
		</nav>
	);
}

export default Navigation;