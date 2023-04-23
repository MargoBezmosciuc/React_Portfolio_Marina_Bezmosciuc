import React from "react";
import "./menu.scss";
//import myImgPortofolio from "../../../public/assets/portofolio.jpg";
import myImg from "../../assets/portofolio.jpg"

export default function Menu({ menuOpen, setMenuOpen }) {
  const closeMenuHandler = () => {
    setMenuOpen(false);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div>
        <img
          src={myImg}
          alt="Marina Bezmosciuc"
          className="portofolioImg"
        />
      </div>
      <ul>
        <li onClick={closeMenuHandler}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={closeMenuHandler}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={closeMenuHandler}>
          <a href="#works">Works</a>
        </li>
        <li onClick={closeMenuHandler}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={closeMenuHandler}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
