import reactlogo from '../images/react-logo.png'

const Scrimba = () => {
  
  return (
    <div>
        <div>
           <img className='reactLogo' src={reactlogo} alt="reactlogo"/>
        </div>
        <h1>Fun Facts About React</h1>

        <ul>
          <li>Was released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintaned by Facebook</li>
          <li>Powers thousands of enterpise apps, including mobile apps</li>
        </ul>
    </div> 
  )
}

export default Scrimba