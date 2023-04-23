import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import random from "../../assets/random.jpg";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        <div className="item">
          <img src={random} alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src={random} alt="" />
          <h3>Banking App</h3>
        </div>{" "}
        <div className="item">
          <img src={random} alt="" />
          <h3>Banking App</h3>
        </div>{" "}
        <div className="item">
          <img src={random} alt="" />
          <h3>Banking App</h3>
        </div>{" "}
        <div className="item">
          <img src={random} alt="" />
          <h3>Banking App</h3>
        </div>{" "}
        <div className="item">
          <img src={random} alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
