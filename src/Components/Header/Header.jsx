import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import searchSvg from '../../assets/svg/search.svg'
import cartSvg from '../../assets/svg/cart.svg'
import logoSvg from '../../assets/svg/logo.svg'

function Header() {
	return (
		<header className='header'>
			<div className='header-container'>
				<div className='logo'>
					<img src={logoSvg} alt='image logo' />
					<h2>Organick</h2>
				</div>
				<nav>
					<Link style={{textDecoration: "none", color: "#274C5B"}} to='/'>Home</Link>
					<Link style={{textDecoration: "none", color: "#274C5B"}} to='/about'>About</Link>
					<Link style={{textDecoration: "none", color: "#274C5B"}} to='/shop'>Shop</Link>
					<Link style={{textDecoration: "none", color: "#274C5B"}} to='/projects'>Projects</Link>
					<Link style={{textDecoration: "none", color: "#274C5B"}} to='/news'>News</Link>
				</nav>
				<div className='search-cart-shop'>
					<div className='search'>
						<input type='text' />
						<div className='search-icon'>
							<img src={searchSvg} alt='Search icon' />
						</div>
					</div>
					<div className='cart'>
						<div className='cart-icon'>
							<img src={cartSvg} alt='cart icon' />
						</div>
						<div className='cart-num'>
							<p>Cart <span>0</span></p>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
