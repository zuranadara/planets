import React from "react";
import { Link } from "react-router-dom";
import './index.css'


const links = [
  {
    name: 'Mercury',
    path: '/mercury'
  },
  {
    name: 'Venus',
    path: '/venus'
  },
  {
    name: 'Earth',
    path: '/earth'
  },
  {
    name: 'Mars',
    path: '/mars'
  },
  {
    name: 'Jupiter',
    path: '/jupiter'
  },
  {
    name: 'Saturn',
    path: '/saturn'
  },
  {
    name: 'Uranus',
    path: '/uranus'
  },
  {
    name: 'Neptune',
    path: '/neptune'
  },
  
]

export const Navigation = () => {
    return (
      <div>
          <div className="navigation">
          <div>
              <p className="navigation-title">THE PLANETS</p>
          </div>
            <div className="navigation-planets">
              {links.map(link => {
                return(
                  <Link key={link.path}
                        to={link.path} 
                        className="planets-nav"
                        >
                          {link.name}
                        </Link>
                )
              })}
            </div>
            </div>
          </div>
    )
}

export default Navigation



