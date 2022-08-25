import React from 'react'
import navLogo from '../images/navLogo.png'

const Header = () => {
  return (
    <div>
        <header>
            <nav className='nav'>
              <img className='navLogo' src={navLogo} alt="reactlogo"/>
              <h3>React Course - Project 1</h3>
            </nav>
        </header>
    </div>
  )
}

export default Header