import React from 'react'
import navLogo from '../images/navLogo.png'

const Header = () => {
  return (
    <div>
        <header>
            <nav className='nav'>
              <img className='navLogo' src={navLogo} alt="reactlogo"/>
              <h2>React Facts</h2>
            </nav>
        </header>
    </div>
  )
}

export default Header