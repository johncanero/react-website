import React from 'react'
import navLogo from '../images/navLogo.png'

const Header = () => {
  return (
    <div>
        <header>
            <nav className='nav'>
              <img className='navLogo' src={navLogo} alt="reactlogo"/>
              <ul className='nav-items'>
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header