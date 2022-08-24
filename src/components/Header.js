import React from 'react'
import reactLogo from '../images/react-logo.png'

const Header = () => {
  return (
    <div>
        <header>
            <nav>
              <img className='reactLogo' src={reactLogo} alt="reactlogo"/>
            </nav>
        </header>
    </div>
  )
}

export default Header