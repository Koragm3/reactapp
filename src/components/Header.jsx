import React from 'react'
import logotop from '@images/logotop.svg'
const Header = () => {
  return (
    <div className="bg-color">
        <div className="container">
                <img src={logotop}/>
                <button className="bars"> <i className="fa-solid fa-bars"></i></button>

                <div className="top-menu">
                    <div className="contact">
                        <div className="info-box">
                            <i className="fa-light fa-phone-volume"></i>
                            +46 (8)121 470 50
                        </div>
                        <div className="info-box">
                            <i className="fa-regular fa-envelope-dot"></i>
                            info@crito.com
                        </div>
                        <div className="info-box last">
                            <i className="fa-light fa-location-dot"></i>
                            Sveavägen 31,111 34 STOCKHOLM
                        </div>
                        <div className="social-media">
                            <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>

                    </div>
                    <div className="bottom-menu">
                        <div className="menu-option">
                            <a href="http://localhost:3000">Home</a>
                            <a href="#">Sevice</a>
                            <a href="http://127.0.0.1:5500/crito.html">News</a>
                            <a href="http://localhost:3000">Contact</a>
                        </div>
                        <div><button className="btn btn-primary" type="submit">login&nbsp;<i
                                    className="fa-regular fa-arrow-up-right fa-beat-fade"></i></button></div>
                    </div>


                </div>






            </div>
    </div>
   
  )
}

export default Header