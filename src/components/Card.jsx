import React from "react";
import starImage from "../assets/Images/star.png";

export default function Card(props) {
  console.log(props.items);

  let badgeText;
  if (props.items.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.items.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.items.coverImg} className="card--image" />
      <div className="card--stats">
        <img src={starImage} className="card--star" />
        <span>{props.items.stats.rating}</span>
        <span className="gray">({props.items.stats.reviewCount}) • </span>
        <span className="gray">{props.items.location}</span>
      </div>
      <p className="card--title">{props.items.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.items.price}</span> / person
      </p>
    </div>
  );
}
