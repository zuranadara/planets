// import React from "react"
// import { IconMercury } from "../assets/photos/mercury"
// import { Navigation } from '../components/navigation'


// const planetContents = [
//     {
//       name: 'rotation time',
//       value: '56.6 days'
//     },
//     {
//       name: 'revolution time',
//       value: '87.97 days'
//     },
//     {
//       name: 'radius',
//       value: '2,439.7 km'
//     },
//     {
//       name: 'average temp.',
//       value: '430°c'
//     },
          
//   ]
  
//   const layoutProperty = [
//     { 
//       icon: <IconMercury/>,
//       title: 'Mercury',
//       name: 'overview',
//       description: `Mercury is the smallest planet in the Solar System and the closest to the Sun. 
//                    Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.
//                    Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`
//     },  
//     { 
//       title: 'Mercury',
//       name: 'Internal Structure',
//       description: `Mercury appears to have a solid silicate crust and mantle overlying a solid, 
//                 iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. 
//                 The planet's density is the second highest in the Solar System at 5.427 g/cm3 , 
//                 only slightly less than Earth's density.`
//     },  
//     { 
//       icon: <IconMercury/>,
//       title: 'Mercury',
//       name: 'Surface Geology',
//       description: `Mercury's surface is similar in appearance to that of the Moon, 
//                     showing extensive mare-like plains and heavy cratering, indicating that it 
//                     has been geologically inactive for billions of years. It is more heterogeneous 
//                     than either Mars's or the Moon’s.`
//     },
      
//   ]
  

  

//   export const PlanetLayout = ({layoutProperty, planetContents}) => {
//     const [ActiveLayoutProperty, setActiveLayoutProperty] = useState(0)
//       return (
//           <div className='container'>
//             <Navigation />
//             <div className='main-layout'>
//             <div className='left-layout'>
//             <div className='mercury'>
//             {layoutProperty && layoutProperty[ActiveLayoutProperty] && layoutProperty[ActiveLayoutProperty].icon}
//             </div>
//             </div>
//             <div className='right-layout'>
//               <div className='right-layout-up'>
//               <div><p className='p-planet-name'>
//             {layoutProperty && layoutProperty[ActiveLayoutProperty] && layoutProperty[ActiveLayoutProperty].title}
//                </p></div>
//                   <div><p className='p-description'>
//             {layoutProperty && layoutProperty[ActiveLayoutProperty] && layoutProperty[ActiveLayoutProperty].description}
//                      </p>
//                     </div>
//               <div>
//               <div className='wikipedia'>
//                   <p>Source:</p><p>Wikipedia</p>
//                 </div>
//               </div>
//               </div>
//               <div>
                
//               <div className='btn'>
//               {Array.isArray(layoutProperty) &&
//     layoutProperty.map((Property, index) => {
//       return (
//         <button
//           onClick={() => setActiveLayoutProperty(index)}
//           key={Property.name}
//           className={`btn-item ${index === ActiveLayoutProperty ? 'active' : ''}`}
//         >
//           <p className="btn-p">0{index + 1} {Property.name}</p>
//         </button>
//       );
//     })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='down-layout'>
//       {Array.isArray(planetContents) &&
//     planetContents.map(contents => {
//       return (
//         <div className='down-layout-item'> 
//           <p className='p-title'>{contents.name}</p>
//           <p className='p-title-numbers'>{contents.value}</p>
//         </div>
//       );
//     })}
//            </div>
//       </div>
//       )
//   }

// export default PlanetLayout