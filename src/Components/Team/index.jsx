import React from 'react'
import teamMan from '../../assets/img/teamMan.png'
import teamMan2 from '../../assets/img/teamMan2.png'
import teamWoman from '../../assets/img/teamWoman.png'
import teamWoman2 from '../../assets/img/teamWoman2.png'
import teamWoman3 from '../../assets/img/teamWoman3.png'
import teamWoman4 from '../../assets/img/teamWoman4.png'
import instagramSvg from '../../assets/svg/instagram.svg'
import facebookSvg from '../../assets/svg/facebook.svg'
import twitterSvg from '../../assets/svg/twitter.svg'
import './Team.css'

function index() {
	return (
		<div className='team-container'>
			<div className='team-content'>
				<div className='team-text'>
					<div className='team-name'>
						<h2>Team</h2>
						<p>Our Organic Experts</p>
					</div>
					<p>
						Simply dummy text of the printing and typesetting industry. Lorem
						had ceased to been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley.
					</p>
				</div>
				<div className='team-box'>
					<div className='team-card'>
						<div className='team-card-image'>
							<img src={teamMan} alt='team image' />
						</div>
						<div className='team-card-title'>
							<div className='team-card-text'>
								<div className='team-card-name'>
									<h2>Giovani Bacardo</h2>
									<p>Farmer</p>
								</div>
								<div className='team-card-icons'>
									<img src={facebookSvg} alt='card image' />
									<img src={twitterSvg} alt='card image' />
								</div>
							</div>
						</div>
					</div>
          <div className='team-card'>
						<div className='team-card-image'>
							<img src={teamWoman} alt='team image' />
						</div>
						<div className='team-card-title'>
							<div className='team-card-text'>
								<div className='team-card-name'>
									<h2>Marianne Loreno</h2>
									<p>Designer</p>
								</div>
								<div className='team-card-icons'>
                  <img src={instagramSvg} alt='card image'/>
									<img src={facebookSvg} alt='card image' />
									<img src={twitterSvg} alt='card image' />
								</div>
							</div>
						</div>
					</div>
          <div className='team-card'>
						<div className='team-card-image'>
							<img src={teamWoman2} alt='team image' />
						</div>
						<div className='team-card-title'>
							<div className='team-card-text'>
								<div className='team-card-name'>
									<h2>Riga Pelore</h2>
									<p>Farmer</p>
								</div>
								<div className='team-card-icons'>
                  <img src={instagramSvg} alt='card image'/>
									<img src={facebookSvg} alt='card image' />
									<img src={twitterSvg} alt='card image' />
								</div>
							</div>
						</div>
					</div>
          <div className='team-card'>
						<div className='team-card-image'>
							<img src={teamWoman3} alt='team image' />
						</div>
						<div className='team-card-title'>
							<div className='team-card-text'>
								<div className='team-card-name'>
									<h2>Keira Knightley</h2>
									<p>Farmer</p>
								</div>
								<div className='team-card-icons'>
									<img src={facebookSvg} alt='card image' />
									<img src={twitterSvg} alt='card image' />
								</div>
							</div>
						</div>
					</div>
          <div className='team-card'>
						<div className='team-card-image'>
							<img src={teamMan2} alt='team image' />
						</div>
						<div className='team-card-title'>
							<div className='team-card-text'>
								<div className='team-card-name'>
									<h2>Scott Lawrence</h2>
									<p>Designer</p>
								</div>
								<div className='team-card-icons'>
                  <img src={instagramSvg} alt='card image'/>
									<img src={facebookSvg} alt='card image' />
									<img src={twitterSvg} alt='card image' />
								</div>
							</div>
						</div>
					</div>
          <div className='team-card'>
						<div className='team-card-image'>
							<img src={teamWoman4} alt='team image' />
						</div>
						<div className='team-card-title'>
							<div className='team-card-text'>
								<div className='team-card-name'>
									<h2>Karen Allen</h2>
									<p>Farmer</p>
								</div>
								<div className='team-card-icons'>
                  <img src={instagramSvg} alt='card image'/>
									<img src={facebookSvg} alt='card image' />
									<img src={twitterSvg} alt='card image' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
