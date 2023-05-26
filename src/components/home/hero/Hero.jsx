import React from "react";
import { hero } from "../../../dummyData";
import "./hero.css";
import Card from "./Card";

const Hero = () => {
  return (
      <section className="hero section-center">
        <div className="container">
          {hero?.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </section>
  );
};

export default Hero;
