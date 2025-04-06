import React from 'react'
import google from '../assets/img/googleicon.png';
import notion from '../assets/img/notionicon.png';
import star from '../assets/img/PolarisStar.png'
import teacher from '../assets/img/cuate.png'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='signup'>
         <div className="container col-xxl-10 py-5">
        {/* <div className="col-12 col-lg-12 col-md-12 col-sm-12">
          <img src={icon} alt="err" className='navicon' />
        </div> */}
        <div className="row flex-lg-row-reverse align-items-start g-5">
          <img src={star} alt="err" className='login-star position-absolute'/>
          <div className="ellipse"></div>
          <div className="col-10 col-lg-6">
          <img src={teacher} className="login-icon mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <form className='col-9'>
            <h1 className='mb-0'>Sign Up</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing!</p>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label mt-1">First Name</label>
                <input type="text" className="form-control" id="exampleInputName"  />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputSurname" className="form-label mt-1">Last Name</label>
                <input type="text" className="form-control" id="exampleInputSurname"  />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mt-1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" />
              </div>
              <button type="submit" className="btn col-12 mt-2">Sign Up</button>
              <p className='text-black d-flex justify-content-center mt-4'>Already have an account?<Link className='text-decoration-none' to="/login"><span >Log in</span></Link></p>
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

export default SignUp