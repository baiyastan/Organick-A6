import React from 'react'
import '../Components/Header/Header.css'
import foundImage from '../assets/img/found.png'
import foundPosition from '../assets/img/found-grey.png'
import foundIcon from "../assets/svg/button.svg"
import found from "../assets/svg/found.svg"

function NotFound() {
	return (
		<div className='found'>
			<img src={foundImage} alt='found image' />
			<div className='found-position'>
				<img src={foundPosition} alt='found position' />
			</div>
			<div className='found-title'>
				<div className='found-title-text'>
					<div className='found-text'>
            <img src={found} alt='404'/>
						<h2>Page not found</h2>
					</div>
					<p>The page you are looking for doesn't exist or has been moved</p>
				</div>
				<div className='found-button'>
					<button>Go to Homepage <img src={foundIcon} alt='found icon'/></button>
				</div>
			</div>
		</div>
	)
}

export default NotFound
