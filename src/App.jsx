import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

export default function App() {
  const cardData = data.map((item) => (
    <div key={item.id}>
      <Navbar />
      <Card
        coverImg={item.coverImg} // Assuming `swim` is your imported image source
        rating={item.rating} // Example: dynamically use rating from data
        reviewCount={item.reviewCount} // Example: dynamically use review count from data
        country={item.country} // Example: dynamically use country from data
        title={item.title} // Example: dynamically use title from data
        price={item.price} // Example: dynamically use price from data
      />
    </div>
  ));

  return <div>{cardData}</div>;
}
