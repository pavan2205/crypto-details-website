import React from 'react'
import Crypto from '../assets/hero.png'
import './Hero.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Hero = () => {
  return (
    <div className='hero' >
      <div className='container'id='hero'>

        {/* left side */}
        <div className='left'>
          <h1>Invest in Cryptocurrency using IRA</h1>
          <p>Buy, Sell and store hundreds of cryptocurrencies</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn more</button>
          </div>
        </div>


        {/* Right side  */}
        <div className='right'>
          <div className='img-container'>
          <ScrollAnimation animateIn="bounceInRight"
            animateOut="bounceInLeft">
            <img src={Crypto} alt=''/>
          </ScrollAnimation>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
