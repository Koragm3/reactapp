import React from 'react'
import Dots from './Dotlink'
import ourteam1 from '@images/ourteam1.png'
import ourteam2 from '@images/ourteam2.png'
import ourteam3 from '@images/ourteam3.png'
import ourteam4 from '@images/ourteam4.png'
import Reviews from './Reviews'


const Teamsection = () => {
    return (
        <div>
        <div className="our-team">
            <div className="container">
                <div>
                    <div className="thin">Meet Our Team</div>
                    <div className="bold">Experience Team Members</div>
                </div>
                <div>
                    <button className="all-btn">Browse Team&nbsp;<i
                        className="fa-regular fa-arrow-up-right fa-beat-fade"></i></button>
                </div>

            </div>
            <div className="team-pic">
                <div className="container">
                                <div><img src={ourteam1} />
                                <div className="bold">Kristine Palmer</div>
                                <div className="thin">Chef Operation Of</div>
                                </div>
                                <div>
                                <img src={ourteam2} />
                                <div className="bold">Mark Aubri</div>
                                <div className="thin">Senior Consultan</div>
                                </div>
                                <div>
                                <img src={ourteam3} />
                                <div className="bold">Kimberly Hansen</div>
                                <div className="thin">Senior Consultant</div>
                                </div>
                                <div>
                                <img src={ourteam4} />
                                <div className="bold">Justin Willoman</div>
                                <div className="thin">Senior Tech Consultant</div>
                                </div>
                                
                            
                                 
                        


                    </div>
                    <Dots/>
                    
                </div>
            </div>

         <Reviews/>
            </div>
            
       

    )
}

export default Teamsection