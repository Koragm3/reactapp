import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyForm from '../components/Form'


const Contacts = () => {
    

  return (
    <>
    <Header/>
    
    <div className="articles">
        <div className="container">
            <div className="pageoptions">
                <a href="http://localhost:3000">Home</a>
                <a href="#">New</a>
            </div>
        </div>
        <div className="newstext container">
            <div className="Boldnews">Let's Connect</div>
        </div>
    </div>
    <div className="second-section">
        <div className="contact-info">
            <div className="container">
                <div className="contact-box">
                    <div className="content">
                        <i className="fa-sharp fa-solid fa-location-dot fa-2xl" ></i>

                        <div className="info-text">
                            <p className="bold">Visit us</p>
                            <p className="thin">Sveavägen 31</p>
                            <p className="thin">111 34 STOCKHOLM</p>


                        </div>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="content">
                        <i className="fa-sharp fa-solid fa-location-dot fa-2xl" ></i>

                        <div className="info-text">
                            <p className="bold">Call Us</p>
                            <p className="thin">+46 (8) 121 470 50</p>
                            <p className="thin">+46 (8) 121 470 51</p>


                        </div>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="content">
                        <i className="fa-sharp fa-solid fa-location-dot fa-2xl" ></i>

                        <div className="info-text">
                            <p className="bold">Email Us</p>
                            <p className="thin">info@crito.com</p>
                            <p className="thin">support@crito.com</p>


                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
    <div className="what">
        <div className="container">
            <div className="bold">Leave us a message <br/>
                for any information.</div>
            <div>
                <MyForm/>
            </div>


        </div>
        
    </div>
    <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d427.7607394382764!2d18.061846215303905!3d59.33655230121955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1695913644183!5m2!1sen!2sse" ></iframe>
    </div>
    <Footer/>
    </>
  )
}

export default Contacts