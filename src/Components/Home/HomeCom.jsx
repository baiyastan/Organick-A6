import React from 'react'
import Hero from '../Hero/Hero'
import Section2 from '../Section2/Section2'
import AboutUs from '../AboutUs/AboutUs'
import Product from '../Out Product/Product'
import Offer from '../Offer/index'
import Garden from "../Garden"
import Gallery from "../../Components/Gallery/index"
import NewLetter from "../NewLetter/index"
import "./HomeCome.css"

function HomeCom() {
	return (
		<div className='homeCom'>
			<Hero />
			<Section2 />
			<AboutUs />
			<Product />
			<Offer />
			<Garden />
			<Gallery />
			<NewLetter />
		</div>
	)
}

export default HomeCom
