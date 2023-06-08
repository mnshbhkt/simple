import { useState } from 'react';
import './contact.css'


export default function Contact() {
  const [message,setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="../pics/shake.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email'/>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll get back ASAP :)</span> }
        </form>
      </div>
    </div>
  )
}