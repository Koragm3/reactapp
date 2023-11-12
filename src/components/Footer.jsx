import React from 'react'
import Logobot from '@images/Logobot.svg'
import lines from '@images/lines4.svg'
const Footer = () => {
  return (
    <>
    <div className="wrapper">
                <div className="container">
                    <div className="logo"><img src={Logobot}/>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas
                            voluptates!
                            Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                        </div>
                    </div>
                    <div className="company">Company
                        <div><a href="#">About</a></div>
                        <div><a href="#">Features</a></div>
                        <div><a href="#">Works</a></div>
                        <div><a href="#">Caree</a></div>
                    </div>
                    <div className="help">Help
                        <div><a href="#">Customer Support</a></div>
                        <div><a href="#">Delivery Details</a></div>
                        <div><a href="#">Terms & Conditions</a></div>
                        <div><a href="#">Privacy Policy</a></div>
                    </div>
                    <div className="resources">Resources
                        <div><a href="#">Free eBooks</a></div>
                        <div><a href="#">Development Tutorial</a></div>
                        <div><a href="#">How to - Blog</a></div>
                        <div><a href="#">Youtube Playlist</a></div>
                    </div>
                    <div className="link">Link
                        <div><a href="#">Free eBooks</a></div>
                        <div><a href="#">Development Tutorial</a></div>
                        <div><a href="#">How to - Blog</a></div>
                        <div><a href="#">Youtube Playlist</a></div>
                    </div>
                </div>
                <div className="lines4"><img src={lines}/></div>
            </div>


        

      <div className="copy">
          <div className="container">
              <div>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
              <div className="link-part">
                  <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              </div>
          </div>


      </div>
    </>
  )
}

export default Footer 