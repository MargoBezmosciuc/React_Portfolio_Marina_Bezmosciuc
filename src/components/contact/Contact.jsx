import React from 'react'
import "./contact.scss"
import shake from "../../assets/shake.svg"

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action="">
          <input type="text" placeholder='Email' />
          <textarea placeholder='Write me here...'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

