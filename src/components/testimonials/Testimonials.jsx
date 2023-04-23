import React from "react";
import "./testimonials.scss";
import rightArrow from "../../assets/right-arrow3.png";
//import youtube from "../../assets/youtube.png";
//import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import slack from "../../assets/slack.png"
import xing from "../../assets/xing.png"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Nargiza Rysmendieva",
      title: "Teacher Assistant DCI",
      img: "https://media.licdn.com/dms/image/C4E03AQExau4gbeAqYQ/profile-displayphoto-shrink_200_200/0/1616576815389?e=1687996800&v=beta&t=n7jeHzEY5vgYzddbEWK9H1vMQF8TvoKaSx1CtW215BA",
      icon: slack,
      desc: "Make me Crazy with your colors",
    },
    {
      id: 2,
      name: "Dilshod Rahmanov",
      title: "Full Stack Web Development Lecturer at DCI",
      img: "https://media.licdn.com/dms/image/C5603AQEt_g23zdxqeQ/profile-displayphoto-shrink_200_200/0/1519491994255?e=1687996800&v=beta&t=58sriH7q8QYyQnBApJJ5yZGvVAWhrQ5LWEfhAB4sZQE",
      icon:  linkedin,
      desc: "Dilshod didn't knew that have to say something: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda a architecto provident, veritatis eaque vero modi laudantium nemo culpa aut, eligendi  ",
      featured: true,
    },
    {
      id: 3,
      name: "Rammiz Mammadov",
      title: "Team Leader Fly Line",
      img: "https://media.licdn.com/dms/image/C4E03AQE2HFd6PWmMdQ/profile-displayphoto-shrink_200_200/0/1659386189334?e=1687996800&v=beta&t=E-fecQua2uOKnnwwkiRj85eX5bogDTcCxKQ3y1pI16A",
      icon: xing,
      desc: "MarGo is one who values and respects colleges, creating a positive and supportive work environment",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => {
          return (
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src={rightArrow} className="left" alt="" />
                <img className="user" src={d.img} alt="" />
                <img className="right" src={d.icon} alt="" />
              </div>
              <div className="center">{d.desc}</div>
              <div className="bottom">
                <h3>{d.name} </h3>
                <h4>{d.title} </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
