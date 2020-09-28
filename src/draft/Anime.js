import ScrollAnim from "rc-scroll-anim";
import React from "react";

const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;

const Anime = () => {
  return (
    <div
      className="pack-page"
      style={{
        backgroundColor: "#174270",
        position: "relative",
        overflow: "hidden",
        height: 1600,
      }}
    >
      <ScrollParallax
        animation={{ x: 0, opacity: 1 }}
        style={{
          transform: "translateX(-200px)",
          opacity: 0,
          backgroundColor: "#133252",
          color: "#fff",
        }}
        className="demo-content2 parallax-shape"
      >
        X
      </ScrollParallax>
    </div>
  );
};

export default Anime;
