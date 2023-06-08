import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footerLeft">
      <span className="logo"><a href="#main" className='logo2'>Simple^</a></span>
      <span className='para'>Make things simple with Simple^</span>
      </div>
      <div className="footerCenter">
        <div className="copy">&copy;Simple^ 2023</div>
        <div className="copy">All rights reserved till date and beyond life.</div>
      </div>
      <div className="footerRight">
        <div className="head">Connect with us</div>
        <div className="media">
          <img src="../pics/linkedin.png" alt="" className="pic" />
          <img src="../pics/youtube.png" alt="" className="pic" />
          <img src="../pics/twitter.png" alt="" className="pic" />
          <img src="../pics/globe.png" alt="" className="pic" />
        </div>
      </div>
    </div>
  )
}
