import React from 'react'
import Lines2 from '@images/lines2.svg'
const Services = () => {
  return (
    <div className="our-service">
        <div className="container">
            <p>Our Service</p>
            <p className="bold">We Provide The Best<br/> Service For Consulting</p>
        </div>
        <div className="wrapper-grid container">
            <div className="container">
                <div>
                    <hr/>
                </div>
                <div className="bold">Business Advice</div>
                <div>Lorem, ipsum dolor sit amet<br/> consectetur adipisicing elit. Officiis in nam possimus.</div>
                <button className="btn"><i className="fa-regular fa-arrow-right fa-lg"></i></button>
            </div>
            <div className="container">
                <div>
                    <hr/>
                </div>
                <div className="bold">Startup Business</div>
                <div>Lorem, ipsum dolor sit amet<br/> consectetur adipisicing elit. Officiis in nam possimus.</div>
                <button className="btn"><i className="fa-regular fa-arrow-right fa-lg"></i></button>
            </div>
            <div className="container">
                <div>
                    <hr/>
                </div>
                <div className="bold">Financial Advice</div>
                <div>Lorem, ipsum dolor sit amet<br/> consectetur adipisicing elit. Officiis in nam possimus.</div>
                <button className="btn"><i className="fa-regular fa-arrow-right fa-lg"></i></button>
            </div>
            <div className="container">
                <div>
                    <hr/>
                </div>
                <div className="bold">Risk Managment</div>
                <div>Lorem, ipsum dolor sit amet<br/> consectetur adipisicing elit. Officiis in nam possimus.</div>
                <button className="btn"><i className="fa-regular fa-arrow-right fa-lg"></i></button>
            </div>

        </div>
        <div className="browse">
            <div className="container">

                <button>Browse Services&nbsp;<i className="fa-regular fa-arrow-up-right fa-beat-fade"></i></button>

            </div>

        </div>

        <div className="lines2"><img src={Lines2}/></div>

    </div>
  )
}

export default Services