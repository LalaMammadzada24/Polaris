import React from 'react'
import mentor from '../../assets/img/mentor.png';
import star from '../../assets/img/PolarisStar.png'

const About = () => {
    return (
        <div className="about-mentors-section_z">
            <div className="banner_z">
                <div className="container_z">
                    <div>
                        <img src={star} alt='err' />
                    </div>
                </div>
            </div>
            <div className="container_z">
                <div className="row_z">
                    <div className="profile-mentor_z col-xl-4-z col-md-4-z col-lg-4-z col-xs-12-z col-sm-12-z">
                        <div className="salammm_z">
                            <div className="profile-card_z row-nowrap_z">
                                <img src={mentor} alt='err' />
                                <div>
                                    <h3>Esther Howard Howard</h3>
                                    <p>Developer Mentor Developer Mentor</p>
                                </div>
                            </div>
                            <div className="rate-icons_z">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="rgba(49, 56, 168, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> <span>4.6(120 reviews)</span>
                            </div>
                            <div className="rate-icons_z">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="rgba(49, 56, 168, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> <span>4+ years</span>
                            </div>
                            <div className="rate-icons_z">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="rgba(49, 56, 168, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> <span>Top mentor</span>
                            </div>
                            <div className="rate-icons_z">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="rgba(49, 56, 168, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> <span>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</span>
                            </div>
                            <button>Book for $20/seans</button>
                        </div>
                        <div className="skills-about_z">
                            <h3>Skills</h3>
                            <div className="skills_z ">
                                <span>Lorem ipsum</span>
                                <span>lorem</span>
                                <span>ipsum</span>
                                <span>ipsum</span>
                                <span>ipsum</span>
                                <span>ipsum</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-text_z col-xl-7-z col-lg-7-z col-md-7-z col-xs-12-z col-sm-12-z">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                            urna.
                            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
                            magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.</p>
                        <p>Pellentesque commodo lacus at sodales sodales. Quisque. Lorem ipsum dolor sit amet
                            consectetur
                            adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
                            quis
                            imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur
                            pellentesque nibh nibh, at maximus ante fermentum sit amet.</p>
                        <ul>
                            <li>Pellentesque commodo lacus at sodales sodales.</li>
                            <li>Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                                eu.
                            </li>
                            <li>Pellentesque commodo lacus at sodales sodales.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About