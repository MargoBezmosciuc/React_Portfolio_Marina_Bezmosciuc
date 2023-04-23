import React, { useState } from "react";
import "./contact.scss";
import shake from "../../assets/shake.svg";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Write me here..."></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, see you soon  <p>&#128525;</p></span>}
        </form>
      </div>
    </div>
  );
}
