import React from 'react'
import Trade from '../assets/trade.png'
import './signUp.css'
import ScrollAnimation from 'react-animate-on-scroll'

const SignUp = () => {
  return (
    <div className='signup' id='signup'>
      <div className='container'>
        {/* left side  */}
    <div className='left'>
    <ScrollAnimation animateIn="bounceInLeft">
      <img src={Trade} alt=''/>
    </ScrollAnimation>
    </div>

        {/* right side  */}
    <div className='right'>
      <h2>Earn passive income with Crypto.</h2>
      <p>
        Earn upto 12% annual rewards on 38+ digital assets.Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.
      </p>
      <div className='input-container'>
        <input type='email' placeholder='Enter your email'/>
        <button className='btn'>Learn more</button>
      </div>
    </div>    
      </div>
    </div>
  )
}

export default SignUp
