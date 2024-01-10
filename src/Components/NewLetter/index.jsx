import React from 'react'
import newLetterImage from "../../assets/img/newletter.png"
import './Newletter.css'

function index() {
	return (
		<div className='content-input'>
      <img src={newLetterImage} alt='new-letter image'/>
			<div className='input-title'>
				<div className='input-title-text'>
					<h2>Subscribe to <br/> our Newsletter</h2>
				</div>
				<div className='input-title-btns'>
          <input type='text' placeholder='Your Email Address'/>
          <button>Subscribe</button>
        </div>
			</div>
		</div>
	)
}

export default index
