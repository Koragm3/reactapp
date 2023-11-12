import React from 'react'
import project1 from '@images/project1.png'
import project2 from '@images/project2.png'
import project3 from '@images/project3.png'
import project4 from '@images/project4.png'
const Project = () => {
  return (
    <div>
    <div className="project">
        <div className="container">

            <div className="bold">
                <p>Project & Case Studies</p>Let’s Looks Our Global Projects
            </div>
        </div>

        <div className="grid-container">
            <div className="project-pic"><img src={project1} />
                <p>Grow your business</p>
                <a href="#">Read More&nbsp;<i className="fa-regular fa-arrow-up-right fa-beat-fade"></i></a>
            </div>
            <div className="project-pic"><img src={project2} />
                <p>Why your client needs a responsive website</p>
                <a href="#">Read More&nbsp;<i className="fa-regular fa-arrow-up-right fa-beat-fade"></i></a>
            </div>
            <div className="project-pic"><img src={project3}/>
                <p>Educate your employees to get better results</p>
                <a href="#">Read More&nbsp;<i className="fa-regular fa-arrow-up-right fa-beat-fade"></i></a>
            </div>
            <div className="project-pic"><img src={project4}/>
                <p>Business Insights is a important piece of your business</p>
                <a href="#">Read More&nbsp;<i className="fa-regular fa-arrow-up-right fa-beat-fade"></i></a>
            </div>
        </div>
        <div className="all-recent">
            <div className="container">
                <button className="all-btn">All Recent Projects&nbsp;<i className="fa-regular fa-arrow-up-right fa-beat-fade"></i></button>
            </div>
        </div>
    </div>
    </div>


      

    
  )
}

export default Project