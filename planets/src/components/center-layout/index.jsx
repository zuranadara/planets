import React from 'react'
import { Header } from '../header'
import { DownLayout } from '../down-layout'
import { PlanetBtn, PlanetDescription, PlanetName,PlanetPhoto } from './layout-component'
import Mercury from '../../assets/photos/mercury.svg'
import './index.css'

export const CenterLayout = () => {
    return (
      <>
        <div className='container'>
          <Header />
          <div className='main-layout'>
          <div className='left-layout'>
              <div><PlanetPhoto photo={<img src={Mercury}/>}/></div>
          </div>
          <div className='right-layout'>
            <div className='right-layout-up'>
                  <div><PlanetName  name={'mercury'}/></div>
                <div>
                  <PlanetDescription 
                  description={`Mercury is the smallest planet in the Solar 
                               System and the closest to the Sun. Its orbit 
                               around the Sun takes 87.97 Earth days, the 
                               shortest of all the Sun's planets. Mercury is one 
                               of four terrestrial planets in the Solar System, 
                               and is a rocky body like Earth.`}/>
                </div>
              <div>
                <p>Source:<span>Wikipedia</span></p>
              </div>
            </div>
            <div className='btn'>
            <PlanetBtn title={'01'}
                  description={'OVERVIEW'}/>             
            <PlanetBtn title={'02'}
                  description={'Internal Structure'}/>
            <PlanetBtn title={'03'}
                  description={'SURFACE GEOLOGY'}/>
            </div>
          </div>
      </div>
        <DownLayout />
        </div>
      </>
    )
}
