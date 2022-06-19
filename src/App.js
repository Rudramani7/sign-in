import './App.css';
import profile from "./images/a.png";

function App() {
  return (
    <div className="signin">Sign in<div className="main">
      <div className='topcnt'>Enjoy the <span className='blue'>Cyber</span> Security<div>Experience</div></div>
      <ul className='list'>
      <li>Attack surface</li>
      <li>Breach Notification</li>
      <li>Darkweb monitoring</li>
      <li>Brand monitoring</li>
      <li>Email security</li>
      <li>Mobile security</li>
      </ul>
      <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/></div>
           </div>

         <div>
           <div>
             <input type="text" placeholder="Enter Your Email Address" className="name"/>
           </div>
           <div className="second-input">
             <input type="password" placeholder="Password" className="name"/>
           </div>

           <p className="link">
              <a href="#">Forgot password?</a>
            </p>

          <div className="login-button">
          <button>Sign In</button>
          </div>
         </div>

       </div>
     </div>
     </div>
    </div>
  );
}

export default App;
