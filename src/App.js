import React from 'react';
import './App.css';
import lauda1 from "./images/lauda1.png";
import lauda2 from "./images/lauda2.png";
import lauda3 from "./images/lauda3.png"
import lauda4 from "./images/lauda4.png"

function App() {
  return (
    <div className="home">
      <div className="hero_container">
        <div className="semicircle_big"/>
        <div className="pacman"/>
        <div className="just_orange_rect"/>
        <div className="circle_girl_container">
          <img src={lauda1} className="lauda1" alt="lauda1" />
        </div>
        <div className="upper_leaflet"/>
        <div className="upper_half_leaflet" />
        <div className="right_long_leaf"/>
        <div className="lower_one_corner_leaf" />
        <div className="bottom_right_image_container_rect"/>
        <div className="bottom_right_image_container_circle">
          <img src={lauda2} className="lauda2" alt="lauda2" />
        </div>
        <div className="bottom_left_image_container_rect"/>
        <div className="bottom_left_image_container_circle">
          <img src={lauda3} className="lauda3" alt="lauda3" />
        </div>
        <div className="bottom_leaf_right"/>
        <div className="bottom_leaf_left"/>
        <div className="pacman_big">
          <img src={lauda4} className="lauda4" alt="lauda4" />
        </div>
        <div className="semicircle_small"/>
        <div className="semicircle_small_small"/>
      </div>
    </div>
  );
}

export default App;
