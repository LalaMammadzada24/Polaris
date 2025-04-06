import React from 'react'
import navicon from '../assets/img/NavbarIcon.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="header_z">
        <div className="container_z">
          <div className="row_z">
            <div className="logo_z">
              <img src={navicon} alt='err' />
            </div>
            <div className="menu_z">
              <ul className="row_z">
                <li><Link to="/" >Discussion</Link></li>
                <li><Link to="/mentors" >Mentors</Link></li>
                <li><Link to="/account" >Account</Link></li>
              </ul>
            </div>
            <div className="registration_z">
              <Link to="/login"><button className="login_z">Log in</button></Link>
              <Link to="/signup"><button className="signup_z active_z">Sign up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header