import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className='aboutContainer' id='about'>
      <div className="aboutLeft">
        <div className="main">About Us</div>
        <div className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse beatae repellat quia omnis deleniti corrupti nostrum ad dolor aspernatur debitis odio eos obcaecati ipsum rerum maiores quisquam quos nemo saepe, quod ut culpa earum repellendus dicta.</div>
        <div className="para2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque possimus libero doloremque voluptate, saepe necessitatibus dicta rerum beatae tempora autem itaque minima perferendis optio quae nam sapiente aliquam impedit ipsa neque iste delectus a architecto enim? Consequuntur aliquid dignissimos eius eaque. Laboriosam repellendus natus quidem suscipit mollitia!</div>
      </div>
      <div className="aboutRight">
        <img src="../pics/ab.png" alt="" className="pics" />
      </div>
    </div>
  )
}
