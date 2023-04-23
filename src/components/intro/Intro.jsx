import React, { useEffect, useRef } from "react";
import myPicture from "../../assets/profile-margo.png";
import down from "../../assets/down.png";
import { init } from "ityped";

import "./intro.scss";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer in loading", "We Developer in progress"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={myPicture} alt="Marina Bezmosciuc" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Marina Bezmosciuc</h1>
          <h3>
            Junior <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
}
