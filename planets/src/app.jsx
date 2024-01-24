import React from 'react'
import { CenterLayout } from './components/center-layout'
// import { Route, Routes } from 'react-router-dom'
// import { MercuryPage} from './pages/mercury'
// import {VenusPage} from './pages/venus'
// import { HomePage } from './pages/home-page'
import './index.css'

function App() {

  return (
    <>
    {/* <Routes>
       <Route path='/' component={<HomePage/>}/>
       <Route path='/mercury' component={<MercuryPage/>}/>
       <Route path='/venus' component={<VenusPage/>}/>
       </Routes> */}
      <CenterLayout />
    </>
  )
}

export default App