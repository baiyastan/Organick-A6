import React from 'react'
import './Product.css'
import Banner from "../../assets/img/Banner (2).png"
import broccoliImage from '../../assets/img/Brocolli.png'
import bananImage from '../../assets/img/Banan.png'
import nutsImage from '../../assets/img/Nuts.png'
import tomatoImage from '../../assets/img/Tomato.png'
import mungBean from '../../assets/img/mungBean.png'
import hazelnutImage from '../../assets/img/Hazelnut.png'
import eggsImage from '../../assets/img/Eggs.png'
import breadImage from '../../assets/img/Bread.png'
import zucchiniImage from "../../assets/img/Zucchini.png"
import nutImage from "../../assets/img/Nut.png"
import cornImage from "../../assets/img/Corn.png"
import organickImage from "../../assets/img/Organick.png"
import ratingSvg from '../../assets/svg/rating.svg'

function Shop() {
	return (
		<div className='shop-container'>
			<div className='banner'>
				<img src={Banner} alt='image' />
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
				<div className='card'>
					<button>Health</button>
					<div className='image'>
						<img className='image' src={zucchiniImage} alt='image' />
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
						<img className='image' src={nutImage} alt='image' />
					</div>
					<div className='card-name'>
						<h4>White Hazelnut</h4>
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
						<img className='image' src={cornImage} alt='image' />
					</div>
					<div className='card-name'>
						<h4>Fresh Corn</h4>
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
						<img className='image' src={organickImage} alt='image' />
					</div>
					<div className='card-name'>
						<h4>Organic Almonds</h4>
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
		</div>
	)
}

export default Shop
