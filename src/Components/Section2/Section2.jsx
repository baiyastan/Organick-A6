import React from 'react'
import "./Section2.css"
import Section_img2 from "../../assets/img/Section_img2.png"
import Section_img3 from "../../assets/img/Section_img3.jpg"

const Section2 = () => {
  return (
    <div className='section2'>
         <div className='section_img'>
            <img style={{width: "500px", borderRadius: "10px"}} src={Section_img2} alt='image'/>
            <div className='section_position'>
              <h2>Natural!!</h2>
              <p>Get Garden <br/> Fresh Fruits</p>
            </div>
         </div>
         <div className='section_title'>
            <img style={{width: "500px", borderRadius: "10px"}} src={Section_img3} alt='image'/>
            <div className='section_text'>
              <h2>Offer!!</h2>
              <p>Get 10% off <br/> on Vegetables</p>
            </div>
         </div>
    </div>
  )
}

export default Section2
   