import React from 'react'
import manpic from '@images/man.png'
import lines1 from '@images/lines1.svg'
const Mansection = () => {
  return (
    <div className="second-part">
        <div className="container font">
            <div>
                <div className="bold-font">We Provide The<br/>Best Business<br/>Solutions</div>

                <div className="thin-font">Establish your vision and value proposition and turn them into
                    testable<br/>prototypes.
                </div>
                <div className="under">
                    <button className="btn1">Get Consulting</button>
                    <button className="btn2">Learn More</button>
                </div>

            </div>

            <div className="imgman"><img src={manpic}/></div>


        </div>
        <div className="lines1"><img src={lines1} /></div>

    </div>
    
  )
}

export default Mansection