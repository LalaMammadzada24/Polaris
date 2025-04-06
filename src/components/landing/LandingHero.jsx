import React from 'react'
import MentorCard from './MentorCard'
import { Link } from 'react-router-dom'

const LandingHero = () => {
  return (
    <>
                <div className=" landing-hero  col-xxl-12 px-4 py-5">
                    <div className="row flex-lg-row align-items-center g-5 py-5">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-5">
                            <div className="hero-text">
                                <h1 >Discover <span className='power'>the power</span> of <br /> <span className="learning">self-learning</span>.</h1>
                                <p className="lead">Enjoy peer-to-peer learning with other people. Get help from experienced mentors.</p>
                            </div>
                            <div className="d-grid d-flex justify-content-start mt-5">
                                <button type="button" className="find btn btn-lg px-4 me-md-2">Find Mentors
                                <i class="fa-solid fa-arrow-up ms-2"></i>
                                </button>
                                <Link to="/becomementor"><button type="button" className="become btn btn-lg px-4">Become a mentor</button></Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-7 position-relative">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                               <div className="landing-cards col-12 col-sm-12 col-md-12 col-lg-12">
                               <MentorCard/>
                               <MentorCard/>
                               <MentorCard/>
                               </div>
                               <div className="landing-cards col-12 col-sm-12 col-md-12 col-lg-12">
                               <MentorCard/>
                               <MentorCard/>
                               <MentorCard/>
                               </div>
                               <div className="landing-cards col-12 col-sm-12 col-md-12 col-lg-12">
                               <MentorCard/>
                               <MentorCard/>
                               <MentorCard/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
  )
}

export default LandingHero