import React from 'react'
import farmerMan from '../../assets/img/farmerMan.png'
import farmerWoman from '../../assets/img/farmerWoman.png'
import tomatImage from "../../assets/img/tomats.png"
import garbageImg from '../../assets/img/garbage.png'
import carrotsImg from '../../assets/img/carrots.png'
import greenImg from '../../assets/img/green.png'
import profileSvg from '../../assets/svg/profile.svg'
import buttonSvg from "../../assets/svg/button.svg"
import './News.css'

function index() {
	return (
		<div className='news-container'>
			<div className='news-content'>
				<div className='news-title'>
					<div className='news-title-image'>
						<img src={greenImg} alt='green image' />
					</div>
					<div className='news-title-date'>
						<h2>25</h2>
						<p>Nov</p>
					</div>
					<div className='news-title-text'>
							<div className='news-title-profile'>
								<img src={profileSvg} alt='profile image' />
								<h2>By Rachi Card</h2>
							</div>
							<div className='news-title-name'>
								<h2>The Benefits of Vitamin D & How to Get It</h2>
								<p>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</p>
							</div>
							<div className='news-title-btn'>
								<button className='news-button'>Read More <img src={buttonSvg} alt='button icon'/></button>
							</div>
					</div>
				</div>
        <div className='news-title'>
					<div className='news-title-image'>
						<img src={tomatImage} alt='green image' />
					</div>
					<div className='news-title-date'>
						<h2>25</h2>
						<p>Nov</p>
					</div>
					<div className='news-title-text'>
							<div className='news-title-profile'>
								<img src={profileSvg} alt='profile image' />
								<h2>By Rachi Card</h2>
							</div>
							<div className='news-title-name'>
								<h2>Our Favorite Summertime Tomato</h2>
								<p>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</p>
							</div>
							<div className='news-title-btn'>
								<button className='news-button'>Read More <img src={buttonSvg} alt='button icon'/></button>
							</div>
					</div>
				</div>
        <div className='news-title'>
					<div className='news-title-image'>
						<img src={carrotsImg} alt='green image' />
					</div>
					<div className='news-title-date'>
						<h2>25</h2>
						<p>Nov</p>
					</div>
					<div className='news-title-text'>
							<div className='news-title-profile'>
								<img src={profileSvg} alt='profile image' />
								<h2>By Rachi Card</h2>
							</div>
							<div className='news-title-name'>
								<h2>Benefits of Vitamin C & How to Get It</h2>
								<p>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</p>
							</div>
							<div className='news-title-btn'>
								<button className='news-button'>Read More <img src={buttonSvg} alt='button icon'/></button>
							</div>
					</div>
				</div>
        <div className='news-title'>
					<div className='news-title-image'>
						<img src={farmerMan} alt='green image' />
					</div>
					<div className='news-title-date'>
						<h2>25</h2>
						<p>Nov</p>
					</div>
					<div className='news-title-text'>
							<div className='news-title-profile'>
								<img src={profileSvg} alt='profile image' />
								<h2>By Rachi Card</h2>
							</div>
							<div className='news-title-name'>
								<h2>Research More Organic Foods</h2>
								<p>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</p>
							</div>
							<div className='news-title-btn'>
								<button className='news-button'>Read More <img src={buttonSvg} alt='button icon'/></button>
							</div>
					</div>
				</div>
        <div className='news-title'>
					<div className='news-title-image'>
						<img src={farmerWoman} alt='green image' />
					</div>
					<div className='news-title-date'>
						<h2>25</h2>
						<p>Nov</p>
					</div>
					<div className='news-title-text'>
							<div className='news-title-profile'>
								<img src={profileSvg} alt='profile image' />
								<h2>By Rachi Card</h2>
							</div>
							<div className='news-title-name'>
								<h2>Everyday Fresh Fruites</h2>
								<p>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</p>
							</div>
							<div className='news-title-btn'>
								<button className='news-button'>Read More <img src={buttonSvg} alt='button icon'/></button>
							</div>
					</div>
				</div>
        <div className='news-title'>
					<div className='news-title-image'>
						<img src={garbageImg} alt='green image' />
					</div>
					<div className='news-title-date'>
						<h2>25</h2>
						<p>Nov</p>
					</div>
					<div className='news-title-text'>
							<div className='news-title-profile'>
								<img src={profileSvg} alt='profile image' />
								<h2>By Rachi Card</h2>
							</div>
							<div className='news-title-name'>
								<h2>Don’t Use Plastic Product! it’s Kill Nature</h2>
								<p>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</p>
							</div>
							<div className='news-title-btn'>
								<button className='news-button'>Read More <img src={buttonSvg} alt='button icon'/></button>
							</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
