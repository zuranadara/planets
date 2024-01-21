import React from "react"

export const PlanetPhoto = ({ photo = [] }) => {
  return ( 
    <div className='mercury'>{photo}</div>
  )}

export const PlanetName = ({name = []}) => {
  return (
    <div><p className='p-planet-name'>{name}</p></div>
  )}

export const PlanetDescription =({title,description = [] }) => {
  return (
    <div className='description'>
      <p className='p-description'>{description}</p></div>
  )}

export const PlanetBtn = ({title, description = []}) => {
  return (
      <div className='btn'>
            <button className='btn-item'>
              <p className="btn-p">{title}</p>
              <span>{description}</span></button></div>
  )}

export const DownItems = ({title, description = [] }) => {
  return (
    <div className='down-layout-item'> 
        <p className='p-title'>{title}</p>
        <p className='p-title-numbers'>{description}</p></div>
  )}