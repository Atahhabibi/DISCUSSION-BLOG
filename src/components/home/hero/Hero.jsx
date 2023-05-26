import React, { useState } from "react";
import { hero } from "../../../dummyData";
import "./hero.css";
import Card from "./Card";

const Hero = () => {
  const [items, setIems] = useState(hero);

  return (
    <>
      <section className="hero section-center">
        <div className="container">
          {items.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
