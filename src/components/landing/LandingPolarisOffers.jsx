import React from 'react'
import star from '../../assets/img/PolarisStar.png'

const LandingPolarisOffers = () => {
  return (
    <div className="landingPolarisOffers container col-xxl-12 px-4 py-5">
    <div className="offers-text col-12 col-sm-12 col-md-12 col-lg-12">
        <h1 className='mb-0'>What Polaris offers?</h1>
        <p>We offer peer-to-peer learning based experience with the support of mentors in a competitive environment.</p>
    </div>
    <div className="offers-con row">
        <div className="row g-4">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="card">
            <img src={star} alt="err" className='position-absolute top-0 end-0 mt-3 me-3'/>
            <div className="card-body position-absolute bottom-0 start-0">
                <h5 className="card-title">Peer-to-peer learning</h5>
                <p className="card-subtitle mb-2 ">Find colleagues and enjoy learning together.</p>
            </div>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="card " >
        <img src={star} alt="err" className='position-absolute top-0 end-0 mt-3 me-3'/>
            <div className="card-body position-absolute bottom-0 start-0">
                <h5 className="card-title">Mentors</h5>
                <p className="card-subtitle mb-2 ">Get help from experienced mentors. </p>
            </div>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="card " >
        <img src={star} alt="err" className='position-absolute top-0 end-0 mt-3 me-3'/>
            <div className="card-body position-absolute bottom-0 start-0">
                <h5 className="card-title">Competitions in different fields</h5>
                <p className="card-subtitle mb-2 ">Test yourself in competitive competitions.</p>
            </div>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="card " >
        <img src={star} alt="err" className='position-absolute top-0 end-0 mt-3 me-3'/>
            <div className="card-body position-absolute bottom-0 start-0">
                <h5 className="card-title">Mock exams and interviews</h5>
                <p className="card-subtitle mb-2 ">Think you’re ready? Put your learning to the test with AI powered quizzes and interviews.</p>
            </div>
        </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default LandingPolarisOffers