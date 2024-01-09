import React from 'react'
import './Product.css'
import broccoliImage from '../../assets/img/Brocolli.png'
import bananImage from '../../assets/img/Banan.png'
import nutsImage from '../../assets/img/Nuts.png'
import tomatoImage from '../../assets/img/Tomato.png'
import mungBean from '../../assets/img/mungBean.png'
import hazelnutImage from '../../assets/img/Hazelnut.png'
import eggsImage from '../../assets/img/Eggs.png'
import breadImage from '../../assets/img/Bread.png'
import ratingSvg from '../../assets/svg/rating.svg'
import Null from '../../assets/img/image.png'
import Nulla from '../../assets/img/image(1).png'
import womanImage from '../../assets/img/woman.jpg'
import Navigation from '../../assets/img/Navigation.png'
import buttonSvg from "../../assets/svg/button.svg"

function Product() {
	return (
		<div className='shop-container'>
			<div className='main'>
				<p>Categories </p>
				<h2>Our Products</h2>
			</div>
			<div className='box'>
				<div className='card'>
					<button>Vegetable</button>
					<div className='image'>
						<img src={broccoliImage} alt='image' />
					</div>
					<div className='card-name'>
						<h4>Calabrese Broccoli</h4>
						<div className='line'></div>
						<div className='card-price'>
							<div className='price'>
								<p className='broccoli '>$20.00</p>
								<p className='nall'>$13.00</p>
							</div>
							<img src={ratingSvg} alt='image' />
						</div>
					</div>
				</div>
				<div className='card'>
					<button>Fresh</button>
					<div className='image'>
						<img className='image' src={bananImage} alt='image' />
					</div>
					<h5></h5>
					<div className='card-name'>
						<h4>Fresh Banana Fruites</h4>
						<div className='line'></div>
						<div className='card-price'>
							<div className='price'>
								<p className='broccoli '>$20.00</p>
								<p className='nall'>$14.00</p>
							</div>
							<img src={ratingSvg} alt='image' />
						</div>
					</div>
				</div>
				<div className='card'>
					<button>Millets</button>
					<div className='image'>
						<img className='image' src={nutsImage} alt='image' />
					</div>
					<div className='card-name'>
						<h4>White Nuts</h4>
						<div className='line'></div>
						<div className='card-price'>
							<div className='price'>
								<p className='broccoli '>$20.00</p>
								<p className='nall'>$15.00</p>
							</div>
							<img src={ratingSvg} alt='image' />
						</div>
					</div>
				</div>
				<div className='card'>
					<button>Vegetable</button>
					<div className='image'>
						<img className='image' src={tomatoImage} alt='image' />
					</div>
					<div className='card-name'>
						<h4>Vegan Red Tomato</h4>
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
					<button>Health</button>
					<div className='image'>
						<img className='image' src={mungBean} alt='image' />
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
					<button>Nuts</button>
					<div className='image'>
						<img src={hazelnutImage} alt='image' />
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
					<button>Fresh</button>
					<div className='image'>
						<img className='image' src={eggsImage} alt='image' />
					</div>
					<div className='card-name'>
						<h4>Eggs</h4>
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
					<button>Fresh</button>
					<div className='image'>
						<img className='image' src={breadImage} alt='image' />
					</div>
					<div className='card-name'>
						<h4>Zelco Suji Elaichi Rusk</h4>
						<div className='line'></div>
						<div className='card-price'>
							<div className='price'>
								<p className='broccoli '>$20.00</p>
								<p className='nall'>$15.00</p>
							</div>
							<img src={ratingSvg} alt='image' />
						</div>
					</div>
				</div>
			</div>

			<div className='load'>
				<div className='more'>
					<button>Load More <img src={buttonSvg} alt='button image'/></button>
				</div>
			</div>

			<div className='container'>
				<div className='ralls'>
					<img src={Null} alt='image' />
					<img src={Nulla} alt='image' />
				</div>
				<div className='news'>
					<div className='Customer'>
						<p className='Test'>Testimonial</p>
						<h2 className='rander'>What Our Customer Saying?</h2>
						<div className='lorem'>
							<img className='lession' src={womanImage} alt='image' />
							<img src={ratingSvg} alt='image' />
							<p>
								Simply dummy text of the printing and typesetting industry.
								Lorem Ipsum simply dummy <br /> text of the printing and
								typesetting industry. Lorem Ipsum has been.
							</p>
							<div className='lorem-name'>
								<h4>Sara Taylor</h4>
								<p>Consumer</p>
								<img className='Navigat' src={Navigation} alt='image' />
							</div>
						</div>
					</div>
					<div className='Ipsun'></div>
					<div className='Simply'>
						<div className='dummy'>
							<h1>100%</h1>
							<p>Organic</p>
						</div>
						<div className='dummy'>
							<h1>285</h1>
							<p>Active Product</p>
						</div>
						<div className='dummy'>
							<h1>350+</h1>
							<p>Organic Orchads</p>
						</div>
						<div className='dummy'>
							<h1>25+</h1>
							<p>Years of Farming</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
