import React from 'react'
import ReviewCard from './ReviewCard';

const Reviews = () => {
    return (
        <div className="reviews-section_z">
            <div className="container_z">
                <div className="reviews_z col-xl-7-z col-lg-7-z col-md-7-z col-xs-12-z col-sm-12-z">
                    <h3>Reviews</h3>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>       
                </div>
            </div>
        </div>

    )
}

export default Reviews