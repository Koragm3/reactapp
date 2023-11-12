import React from 'react'
import Smanthas from '@images/samantha.png'
const Smantha = () => {
  return (
    <div className="samantha">
        <div className="container">
            <div className="container">
                <div className="womanimg"><img src={Smanthas}/>
                </div>

                <div className="container border">
                    <div>Samantha Brown,<div className="founder">Founder</div>
                    </div><br/>


                    <div className="lorem">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</div>



                </div>



            </div>
            <div>
                <p>About Company</p>
                <p className="bold">We Are Business<br/> Consulting & Credit<br/> Repair Experts</p>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas
                    assumenda
                    esse obcaecati? Ex esse error voluptates iure vel totam eos.Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
                </p>
                <div className="intro-button">
                    <div className="btn">Learn More&nbsp;<i className="fa-regular fa-arrow-up-right fa-beat-fade"></i></div>

                    <a href=""><i className="fa-light fa-circle-play fa-2xl"></i>&nbsp;Intro Video</a>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Smantha