import React from 'react'
import './Button.css'
import Button_icon from '../../assets/svg/button.svg'

const Button = () => {
	return (
		<button>
			<h1>Explore Now </h1>
			<img src={Button_icon} />
		</button>
	)
}

export default Button
