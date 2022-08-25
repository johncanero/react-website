import React from 'react'
import navLogo from '../images/navLogo.png'

const Header = () => {
  return (
    <div>
        <header>
            <nav>
                  <img src={navLogo} alt="reactlogo"/>
                  <h3 className='nav--logo_text'>ReactFacts</h3>  
                  <h4 className='nav--title'>React - Project 1</h4>
            </nav>
        </header>
    </div>
  )
}

export default Header