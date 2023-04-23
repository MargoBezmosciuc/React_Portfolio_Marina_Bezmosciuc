import React from "react";
import "./testimonials.scss";
import rightArrow from "../../assets/right-arrow.png";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src={rightArrow} className="left" alt="" />
            <img src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <img src="" alt="" />
          </div>
          <div className="center"></div>
          <div className="button"></div>
        </div>
      </div>
    </div>
  );
}
