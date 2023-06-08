import React from 'react'
import './product.css'

export default function Product() {
  return (
    <div className='productContainer' id='product'>
      <h1>Products</h1>
      <div className="prod">
        <div className="lefts">
          <img src="../pics/phone1.png" alt="" className="img" />
          <div className="title">Product 1</div>
          <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint numquam impedit laudantium vitae?</div>
        </div>
        <div className="center">
          <img src="../pics/phone1.png" alt="" className="img" />
          <div className="title">Product 2</div>
          <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde dolorum accusantium soluta.</div>
        </div>
        <div className="right">
          <img src="../pics/phone1.png" alt="" className="img" />
          <div className="title">Product 3</div>
          <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod amet repudiandae ullam odio!</div>
        </div></div>
    </div>)
}
