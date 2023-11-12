import React from 'react'
import why from '@images/why-us.png'
const Whyus = () => {
  return (
    <div className="why-us">
        <div className="container">
            <div>
                <p>Why Choose Us</p>
                <p className="bold">Why We Are The<br/> Best Business<br/> Consulting Agency</p>
                <div className="container">
                    <div className="container"><i className="fa-sharp fa-light fa-thumbs-up fa-lg"></i>
                        <i className="fa-light fa-diamond fa-lg"></i>
                        <i className="fa-sharp fa-regular fa-pen-nib fa-flip-vertical fa-lg" ></i>
                        <i className="fa-sharp fa-light fa-head-side-gear fa-lg"></i>
                    </div>
                    <div className="text">Process&nbsp;Excellence
                        <div className="thin">Lorem, ipsum dolor sit amet consectetur.</div><br/>

                        Strategic Planning
                        <div className="thin">Lorem, ipsum dolor sit amet consectetur.</div><br/>
                        Experience Design
                        <div className="thin">Lorem, ipsum dolor sit amet consectetur.</div><br/>
                        Artificial&nbsp;Inteligence
                        <div className="thin">Lorem, ipsum dolor sit amet consectetur.</div>


                    </div>


                </div>

            </div>
            <div className="why-us-pic"><img src={why}/></div>

        </div>
    </div>
  )
}

export default Whyus