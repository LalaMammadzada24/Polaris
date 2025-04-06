import React from 'react'
import SingleMentor from '../components/mentors/SingleMentor'

const Mentors = () => {
  return (
      <div className="mentors-section_z">
        <div className="container_z">
          <div className="text-part_z">
            <h1>Find your <span>mentor</span></h1>
            <p>5 and 10 minutes calls with online mentors.</p>
          </div>
          <div className="category_z">
            <form onsubmit="event.preventDefault();" role="search">
              <input id="search_z" type="search" placeholder="Search..." autofocus required />
              <div className="dropdown-filters_z">
                <div className="dropdown-trigger_z">Skills</div>
              </div>
            </form>
          </div>
          <div className="mentors_z">
            <h4>120 mentors found</h4>
            <div className="row_z">
             <SingleMentor/>
             <SingleMentor/>
             <SingleMentor/>
             <SingleMentor/>
             <SingleMentor/>
             <SingleMentor/>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button>Show more</button>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Mentors