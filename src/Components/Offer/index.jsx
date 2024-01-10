import React from 'react'
import buttonSvg from '../../assets/svg/button.svg'
import onionImage from "../../assets/img/onion.png"
import broccolliImage from "../../assets/img/broccolli1.png"
import cabbageImage from "../../assets/img/cabbage.png"
import zucchiniImage from "../../assets/img/zucchini1.png"
import ratingSvg from "../../assets/svg/rating.svg"
import './Offer.css'
import "../Out Product/Product.css"

function index() {
	return (
		<div className='offer-container'>
			<div className='offer-content'>
				<div className='offer-text'>
					<div className='offer-name'>
						<h2>Offer</h2>
						<p>We Offer Organic For You</p>
					</div>
					<div className='offer-btn'>
						<button>
							View All Product <img src={buttonSvg} alt='button image' />
						</button>
					</div>
				</div>
				<div className='offer-box'>
					<div className='card'>
						<button>Vegetable</button>
						<div className='image'>
							<img className='image' src={broccolliImage} alt='image' />
						</div>
						<div className='card-name'>
							<h4>Mung Bean</h4>
							<div className='line'></div>
							<div className='card-price'>
								<div className='price'>
									<p className='broccoli '>$20.00</p>
									<p className='nall'>$11.00</p>
								</div>
								<img src={ratingSvg} alt='image' />
							</div>
						</div>
					</div>
          <div className='card'>
						<button>Vegetable</button>
						<div className='image'>
							<img className='image' src={zucchiniImage} alt='image' />
						</div>
						<div className='card-name'>
							<h4>Brown Hazelnut</h4>
							<div className='line'></div>
							<div className='card-price'>
								<div className='price'>
									<p className='broccoli '>$20.00</p>
									<p className='nall'>$12.00</p>
								</div>
								<img src={ratingSvg} alt='image' />
							</div>
						</div>
					</div>
          <div className='card'>
						<button>Vegetable</button>
						<div className='image'>
							<img className='image' src={onionImage} alt='image' />
						</div>
						<div className='card-name'>
							<h4>Onion</h4>
							<div className='line'></div>
							<div className='card-price'>
								<div className='price'>
									<p className='broccoli '>$20.00</p>
									<p className='nall'>$17.00</p>
								</div>
								<img src={ratingSvg} alt='image' />
							</div>
						</div>
					</div>
          <div className='card'>
						<button>Vegetable</button>
						<div className='image'>
							<img className='image' src={cabbageImage} alt='image' />
						</div>
						<div className='card-name'>
							<h4>Cabbage</h4>
							<div className='line'></div>
							<div className='card-price'>
								<div className='price'>
									<p className='broccoli '>$20.00</p>
									<p className='nall'>$17.00</p>
								</div>
								<img src={ratingSvg} alt='image' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
