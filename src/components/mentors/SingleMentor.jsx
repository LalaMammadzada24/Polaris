import React from 'react'
import mentor from '../../assets/img/mentor.png'

const SingleMentor = () => {
  return (
    <div className="mentors-card_z row_z col-xl-6-z col-lg-5-z col-md-5-z">
                <div className="img_z">
                  <img src={mentor} alt='err' />
                </div>
                <div className="left-part_z">
                  <h3>Leslie Alexander</h3>
                  <h5 id="mentor-caption_z">Lorem ipsum dolor sit amet.</h5>
                  <p id="mentor-info_z">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
                    dolor
                    sit amet.</p>
                  <div className="skills_z">
                    <span>Lorem ipsum</span>
                    <span>lorem</span>
                    <span>ipsum</span>
                    <span>ipsum</span>
                    <span>ipsum</span>
                    <span>ipsum</span>
                  </div>
                  <div className="rating_z">
                    <div className="star_z">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      4.8
                    </div>
                    <div className="rate_z">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                      </svg>
                      120
                    </div>
                  </div>
                  <button>View Profile</button>
                </div>
              </div>
  )
}

export default SingleMentor