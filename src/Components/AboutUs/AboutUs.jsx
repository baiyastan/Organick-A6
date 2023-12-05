import React from 'react'
import './About.css'
import About_img from '../../assets/img/About_img.png'
import About_icon from '../../assets/svg/icon_about.svg'
import About_icon2 from '../../assets/svg/icon_about2.svg'
import Button from '../Buttons/Button'

const AboutUs = () => {
	return (
		<div className='about'>
			<img style={{ width: '100%' }} src={About_img} alt='image' />
			<div className='about_content'>
				<div className='about-title'>
					<h2>About Us</h2>
					<div className='about-title-item'>
						<h2>We Believe in Working Accredited Farmers</h2>
						<p>
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley.
						</p>
					</div>
				</div>
				<div className='about_icons'>
					<div className='about_icon'>
						<div className='about_icon_image'>
							<img src={About_icon} alt='image' />
						</div>
						<div className='about_icon_title'>
							<h2>Organic Foods Only</h2>
							<p>
								Simply dummy text of the printing and typesetting industry.
								Lorem Ipsum
							</p>
						</div>
					</div>
					<div className='about_icon'>
						<div className='about_icon_image'>
							<img src={About_icon2} alt='image' />
						</div>
						<div className='about_icon_title'>
							<h2>Quality Standards</h2>
							<p>
								Simply dummy text of the printing and typesetting industry.
								Lorem Ipsum
							</p>
						</div>
					</div>
				</div>
				<div>
					<Button />
				</div>
			</div>
		</div>
	)
}

export default AboutUs
