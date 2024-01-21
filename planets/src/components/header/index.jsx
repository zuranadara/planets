import React from "react";
import './index.css'

export const Header = () => {
    return (
      <div>
          <div className="header">
          <div>
              <p className="header-title">THE PLANETS</p>
          </div>
          <div className="header-planets">
            <div><button className="planets-btn">MERCURY</button></div>
            <div><button className="planets-btn">VENUS</button></div>
            <div><button className="planets-btn">EARTH</button></div>
            <div><button className="planets-btn">MARS</button></div>
            <div><button className="planets-btn">JUPITER</button></div>
            <div><button className="planets-btn">SATURN</button></div>
            <div><button className="planets-btn">URANUS</button></div>
            <div><button className="planets-btn">NEPTUNE</button></div>
          </div>
        </div>
      </div>
    )
}