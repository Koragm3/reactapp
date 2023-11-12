import React from 'react'

const Features = () => {
  return (
    <div className="features">
        <div className="container border">
            <div className="our-accounting">
                <div>
                    <p>Features</p>
                    <p className="bold">Our Accounting is<br/>
                        trusted by thousand<br/>
                        of companies</p>
                </div>
                <div className="btn">Learn more</div>
            </div>
            <div className="business-ad">
                <i className="fa-light fa-handshake fa-lg" ></i>
                <p className="bold">Business Advice</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="startup">
                <i className="fa-regular fa-lightbulb-exclamation-on fa-lg" ></i>
                <p className="bold">Startup Business</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="financial">
                <i className="fa-light fa-money-bill-trend-up fa-lg" ></i>
                <p className="bold">Financial Advice</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="risk">
                <i className="fa-light fa-box-circle-check fa-lg" ></i>
                <p className="bold">Risk Management</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div>

    </div>
  )
}

export default Features