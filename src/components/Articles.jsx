import React from 'react'
import gridwoman from '@images/grid-woman.png'
import cgpt from '@images/cgpt.png'
import pica from '@images/3rd.png'
const Articles = () => {
  return (
    <div>
        <div className="article-news">
            <div>
                <div className="container">
                    <div>
                        <p>Article & News</p>
                        <div className="bold">Get Every Single Articles & News</div>
                    </div>
                    <div>
                        <button className="all-btn">Browse Team&nbsp;<i
                                className="fa-regular fa-arrow-up-right fa-beat-fade"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div><img src={gridwoman}/>
                        <div className="thin">Bussiness</div>
                        <p className="bold2">How To Use Digitalization<br/>In The Classroom</p>
                        <div className="thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Architecto sed
                            hic libero.</div>
                    </div>
                    <div><img src={cgpt}/>
                        <div className="thin">Bussiness</div>
                        <p className="bold2">How To Implement Chat GPT<br/>In Your Projects</p>
                        <div className="thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Architecto sed
                            hic libero.</div>
                    </div>
                    <div><img src={pica}/>
                        <div className="thin">Bussiness</div>
                        <p className="bold2">The Guide To Support<br/> Modern CSS Design</p>
                        <div className="thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Architecto sed
                            hic libero.</div>
                    </div>

                </div>

            </div>
            <div className="links">
                <div className="container">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles