import React from 'react'
import lines from '@images/lines3.svg'
const Searchbar = () => {
  return (
    <div className="bot-searchbar">
            <div className="container">
                <div className="left">Get News Updates By Signup </div>
                <div className="right">
                    <input type="text" placeholder="username@domain.com"/>
                    <div className="click"><button className="btn btn-primary" type="submit">Subscribe&nbsp;<i
                                className="fa-regular fa-arrow-up-right fa-beat-fade"></i></button></div>
                </div>
            </div>
            <div className="lines3"><img src={lines}/></div>
        </div>
  )
}

export default Searchbar