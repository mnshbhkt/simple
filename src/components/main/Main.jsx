import React from 'react'
import './main.css'

export default function Main() {
  return (
    <div className='mainWrapper' id='main'>
      <div className="mainLeft">
        <div className="mainH">SUPERCHARGE YOUR MIND</div>
        <div className="mainP">With Our Neuroscience-backed Routines</div>
        <button className="mainB">Start the free trial now!</button>
        <div className="f">
          <div className="ff1">
            <img src="../pics/meditation.png" alt="" className='Img' />
            <span>Guided Meditation</span>
          </div>
          <div className="ff1">
          <img src="../pics/journal.png" alt="" className='Img' />
            <span>Daily Journal</span>
          </div>
        </div>
        <div className="s">
          <div className="ss1">
          <img src="../pics/mat.png" alt="" className='Img' />
            <span>Mind-Muscle Workouts</span>
          </div>
          <div className="ss1">
          <img src="../pics/notebook.png" alt="" className='Img' />
            <span>Enriching Stories</span>
          </div>
        </div>
      </div>
      <div className="mainRight">
        <img src="../pics/mb.png" alt="" className="mainI" />
      </div>
    </div>
  )
}
