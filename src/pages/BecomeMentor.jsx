import React from 'react'
import google from '../assets/img/googleicon.png';
import notion from '../assets/img/notionicon.png';
import star from '../assets/img/PolarisStar.png'
import teacher from '../assets/img/cuate.png'
import { Link } from 'react-router-dom';

const BecomeMentor = () => {
  return (
    <div className='become-mentor'>
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
            <h1 className='mb-0'>Become a mentor</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing!</p>
              <div className="skills-con d-flex my-4">
                 <div className='skill'>1</div><p className='text1 my-1 mx-2'>Your Skills</p>
                 <div className="line my-3"></div>
                 <div className='experience ms-2'>2</div><p className='text2 my-1 mx-2'>Experiences</p>
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

export default BecomeMentor