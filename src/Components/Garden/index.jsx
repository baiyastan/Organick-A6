import React from 'react'
import gardenImage from '../../assets/img/garden.png'
import gardenSvg from '../../assets/svg/background.svg'
import './Garden.css'

function index() {
	return (
		<div className='garden-container'>
			<div className='garden-image'>
				<img src={gardenImage} alt='garden image' />
			</div>
			<div className='garden-content'>
				<div className='garden-name'>
					<h2>Eco Friendly</h2>
					<p>Econis is a Friendly <br/> Organic Store</p>
				</div>
				<div className='garden-title'>
					<div className='garden-text'>
						<h2>Start with Our Company First</h2>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptat
							accusantium doloremque laudantium. Sed ut perspiciatis.
						</p>
					</div>
					<div className='garden-text'>
						<h2>Learn How to Grow Yourself</h2>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptat
							accusantium doloremque laudantium. Sed ut perspiciatis.
						</p>
					</div>
					<div className='garden-text'>
						<h2>Farming Strategies of Today</h2>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptat
							accusantium doloremque laudantium. Sed ut perspiciatis.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
