import React from 'react'
import bookImage from '../../assets/img/Book.image.png'
import sheetImage from '../../assets/img/sheet.png'
import sweetImage from '../../assets/img/sweet.png'
import './Gallery.css'

function index() {
	return (
		<div className='gallery-container'>
			<div className='gallery-content'>
        <div className='gallery-text'>
          <img src={bookImage}/>
          <div className='text-position'>
            <h2>Organic Juice</h2>
          </div>
        </div>
			</div>
      <div className='gallery-content'>
        <div className='gallery-text'>
          <img src={sheetImage}/>
          <div className='text-position'>
            <h2>Organic Food</h2>
          </div>
        </div>
			</div>
      <div className='gallery-content'>
        <div className='gallery-text'>
          <img src={sweetImage}/>
          <div className='text-position'>
            <h2>Nuts Cookis</h2>
          </div>
        </div>
			</div>
		</div>
	)
}

export default index
