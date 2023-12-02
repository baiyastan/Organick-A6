import React from 'react'
import "./Hero.css"
import Section_img from "../../assets/img/Section_img.png"
import Position_img from "../../assets/img/Position_img.png"
import Button from "../../assets/svg/button.svg"

function Hero() {
  return (
    <div className='section'>
      <img style={{width: "100%"}} src={Section_img} alt='image'/>
      <div className='position_img'>
        <img style={{width: "100%"}} src={Position_img}/>
      </div>
      <div className='position_title'>
        <div className='title_hero'>
          <h2>100% Natural Food</h2>
          <h3>Choose the best healthier way of life</h3>
        </div>
        <button>Explore Now <img src={Button}/> </button>
      </div>
    </div>
  )
}

export default Hero
