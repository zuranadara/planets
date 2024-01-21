import React from 'react'
import { DownItems }  from '../center-layout/layout-component'
import './index.css'

export const DownLayout = () => {
    return (
      <>
        <div className='down-layout'>
            <div>
                <DownItems title={'rotation time'}
                    description={'56.6 days'}/>
            </div>    
            <div>
                <DownItems title={'revolution time'}
                    description={'87.97 days'}/>
            </div>    
            <div>
                <DownItems title={'radius'}
                    description={'2,439.7 km'}/>
            </div>    
            <div>
                <DownItems title={'averege temp.'}
                    description={'430°c'}/>
            </div>        
        </div>
      </>
    )
}
