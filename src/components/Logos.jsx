import React from 'react'
import logo1 from '@images/logo1.svg'
import logo2 from '@images/logo2.svg'
import logo3 from '@images/logo3.svg'
import logo4 from '@images/logo4.svg'
import logo5 from '@images/logo5.svg'
const Logos = () => {
  return (
    <div class="logos">
        <div class="container">
            <div><img src={logo1}/></div>
            <div><img src={logo2}/></div>
            <div><img src={logo3}/></div>
            <div><img src={logo4}/></div>
            <div><img src={logo5}/></div>
        </div>
    </div>
  )
}

export default Logos