import reactLogo from '../images/react-logo.png'

const Scrimba = () => {
  
  return (
    <div>
        <header>
            <nav>
              <img className='reactLogo' src={reactLogo} alt="reactlogo"/>
            </nav>
        </header>

        <h1>Fun Facts About React</h1>
     
        <ul>
          <li>Was released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintaned by Facebook</li>
          <li>Powers thousands of enterpise apps, including mobile apps</li>
        </ul>

        <footer>
            <p>© 20xx Jam development. All rights reserved.</p>
        </footer>
    </div> 
  )
}

export default Scrimba

// racfe