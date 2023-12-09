import React from 'react'
import "./Footer.css"
import assetsFly from "../../assets/svg/01.svg"
import assetsPlay from "../../assets/svg/02.svg"
import assetsHom from "../../assets/svg/03.svg"
import assetsLooc from "../../assets/svg/04.svg"
import assetsHite from "../../assets/svg/05.svg"

function Footer() {
  return (
    <div className='wrapper'>
      <div className='footer'>
        <div className='name'>
        <div className='mini_1'>Contact Us</div>
        <div className='ul'>Email</div>
        <div className='ps'>needhelp@Organia.com</div>
        <div className='ul'>Phone</div>
        <div className='ps'>666 888 888</div>
        <div className='ul'>Address</div>
        <div className='ps'>88 road, borklyn street, USA</div>
        </div>
        <div className='footer_fox'>
        </div>
        <div className='footer_center'>
          <div className='footer_image'><img src={assetsFly} alt="image" />Organick</div>
          <div className='footer_like'>Simply dummy text of the printing and typesetting industry.
                                       Lorem Ipsum simply dummy text of the printing 
          </div>
          <div className='footer_user'>
            <div></div>
            <div className='footer_ss'>
            <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"><img src={assetsPlay} alt="image"/></a>
            <a href="https://www.facebook.com/?locale=ru_RU"><img src={assetsLooc} alt="image" /></a>
            <a href="https://twitter.com/?lang=ru"><img src={assetsHom} alt="" /></a>
            <a href="https://www.pinterest.com/"><img src={assetsHite} alt="" /></a>
            </div>
          </div>
        </div>
        <div className='footer_fox'></div>
        <div className='footer_end'>
           <div className='mini_1'>Utility Pages</div>
           <div className='ps'>Style Guide</div>
           <div className='ps'>404 Not Found</div>
           <div className='ps'>Password Protected</div>
           <div className='ps'>Licences</div>
           <div className='ps'>Changelog</div>
        </div>
      </div>
      <div className="changelog">
      Copyright © |Designed by VictorFlow Templates - Powered by Webflow
    </div>
    </div>
  )
}

export default Footer