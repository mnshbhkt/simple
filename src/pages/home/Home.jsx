import React from 'react'
import Main from '../../components/main/Main'
import About from '../../components/about/About'
import Product from '../../components/product/Product'
import Contact from '../../components/contact/Contact'
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'
import Topbar from '../../components/topbar/Topbar'
import Footer from '../../components/footer/Footer'


export default function Home() {
  return (
    <div className='home'>
      <Topbar />
        <Main />
        <About />
        <Product />
        <Contact />
        <Footer/>
      </div>
  )
}
