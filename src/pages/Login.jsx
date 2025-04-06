import React from 'react'
import icon from '../assets/img/NavbarIcon.png'
import person from '../assets/img/undraw_mobile_content_xvgr1.png'
import google from '../assets/img/googleicon.png';
import notion from '../assets/img/notionicon.png';
import star from '../assets/img/PolarisStar.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <div className="container col-xxl-10 py-5">
        {/* <div className="col-12 col-lg-12 col-md-12 col-sm-12">
          <img src={icon} alt="err" className='navicon' />
        </div> */}
        <div className="row flex-lg-row-reverse align-items-start g-5">
          <img src={star} alt="err" className='login-star position-absolute'/>
          <div className="ellipse"></div>
          <div className="col-10 col-lg-6">
          <img src={person} className="login-icon mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <form className='col-9'>
            <h1 className='mb-0'>Login</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing!</p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mt-1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
                <h6 className='d-flex justify-content-end mt-2'>Forgot your password? </h6>
              </div>
              <button type="submit" className="btn col-12 mt-2">Log in</button>
              <p className='text-black d-flex justify-content-center mt-4'>Don’t have an account? <Link to="/signup"  className='text-decoration-none'><span>Sign Up</span></Link></p>
            </form>
            <div className="d-flex flex-column justify-content-center align-items-center col-9 mt-4">
            <div className="line"></div>
            <div className="img-con d-flex mt-4">
              <div className="img-box"><img src={google} alt="err" /></div>
              <div className="img-box"><img src={notion} alt="err" /></div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login