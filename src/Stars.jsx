import React, { useEffect } from "react";
import "./App.css";

const Stars = () => {
  useEffect(() => {
    const CreateDiv = () => {
      const scene = document.querySelector(".scene");
      for (let i = 0; i < 210; i++) {
        scene.innerHTML += "<div></div>";
      }
    };
    CreateDiv();

    const stars = document.querySelectorAll("div");
    stars.forEach((star) => {
      let x = `${Math.random() * 200}vmax`;
      let y = `${Math.random() * 100}vh`;
      let z = `${Math.random() * 200 - 100}vmin`;
      let rx = `${Math.random() * 360}deg`;
      star.style.setProperty("--x", x);
      star.style.setProperty("--y", y);
      star.style.setProperty("--z", z);
      star.style.setProperty("--rx", rx);
      let delay = `${Math.random() * 1.5}s`;
      star.style.animationDelay = delay;
    });
  }, []);

  return <main className="scene"></main>;
};

export default Stars;
