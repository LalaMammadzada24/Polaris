import React from 'react'
import navicon from '../assets/img/NavbarIcon.png'

const Footer = () => {
  return (
    <div className="footer_z">
      <div className="container_z">
        <div className="row_z">
          <div className=" col-xl-2-z col-lg-2-z col-md-12-z col-sm-12-z col-xs-12-z logo-footer_z">
            <img src={navicon} alt='err' />
            <div className="cubes_z row_z">
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="col-xl-2-z col-lg-2-z col-md-3-z col-sm-3-z col-xs-6-z about-footer_z">
            <h5>About us</h5>
            <p><a href="#">Who we are</a></p>
            <p><a href="#">How it works</a></p>
            <p><a href="#">Reviews</a></p>
            <p><a href="#">Work with us</a></p>
          </div>
          <div className="col-xl-3-z col-lg-3-z col-md-3-z col-sm-3-z col-xs-6-z formentors_z">
            <h5>For Mentors</h5>
            <p><a href="#">Become an online Mentor</a></p>
            <p><a href="#">Monetisation</a></p>
            <p><a href="#">Shoot a Demo Video</a></p>
          </div>
          <div className="col-xl-2-z col-lg-2-z col-md-3-z col-sm-3-z col-xs-6-z foreveryone_z">
            <h5>For Everyone</h5>
            <p><a href="#">Discuss Math</a></p>
            <p><a href="#">Discuss Programming</a></p>
            <p><a href="#">Discuss Graphic Design</a></p>
            <p><a href="#">Discuss UI/UX</a></p>
            <p><a href="#">Learn together</a></p>
          </div>
          <div className="col-xl-2-z col-lg-2-z col-md-3-z col-sm-3-z col-xs-6-z support-footer_z">
            <h5>Support</h5>
            <p><a href="#">FAQ</a></p>
            <p><a href="#">Contact</a></p>
          </div>
        </div>
        <span>© 2024 Polaris. All Rights Reserved.</span>
      </div>
    </div>


  )
}

export default Footer