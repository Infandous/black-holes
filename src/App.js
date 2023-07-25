import {useState} from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Tour from './components/Tour'
import sagittarius_a_img from './images/sagittarius_a.jpg'
import ton_618_img from './images/ton_618.jpg'
import henize_2_10_img from './images/henize_2_10.jpg'
import BlackHole from './components/BlackHole'
import starData from './data/db.json'

function App() {
  //set initial states for changes to main app render
  //initial state is home
  const [home, setHome] = useState(true)
  const [tours, setTours] = useState(false)
  const [sagittarius_a, setSagittarius_a] = useState(false)
  const [ton_618, setTon_618] = useState(false)
  const [henize_2_10, setHenize_2_10] = useState(false)

  const activate_henize_2_10 = () => {
    setHome(false)
    setTours(false)
    setSagittarius_a(false)
    setTon_618(false)
    setHenize_2_10(true)
  }

  const activate_ton_618 = () => {
    setHome(false)
    setTours(false)
    setSagittarius_a(false)
    setTon_618(true)
    setHenize_2_10(false)
  }

  const activate_sagittarius_a = () => {
    setHome(false)
    setTours(false)
    setSagittarius_a(true)
    setTon_618(false)
    setHenize_2_10(false)
  }

  const activateTours = () => {
    setHome(false)
    setTours(true)
    setSagittarius_a(false)
    setTon_618(false)
    setHenize_2_10(false)
  }
  const activateHome = () => {
    setHome(true)
    setTours(false)
    setSagittarius_a(false)
    setTon_618(false)
    setHenize_2_10(false)
  }

const tourList = [
  {
    image: sagittarius_a_img,
    altDescription: starData[0].altDescription,
    tourName: starData[0].tourName,
    shortDescription: starData[0].shortDescription,
    description:starData[0].description,
    func: activate_sagittarius_a,
    id:Number(starData[0].id)
  },
  {
    image: ton_618_img,
    altDescription: starData[1].altDescription,
    tourName: starData[1].tourName,
    shortDescription: starData[1].shortDescription,
    description:starData[1].description,
    func: activate_ton_618,
    id:Number(starData[1].id)
  },
  {
    image: henize_2_10_img,
    altDescription: starData[2].altDescription,
    tourName: starData[2].tourName,
    shortDescription: starData[2].shortDescription,
    description:starData[2].description,
    func: activate_henize_2_10,
    id:Number(starData[2].id)
  },
]

  if (home){
    return (
      <div className='app'>
        <Topbar homeFunc={activateHome} toursFunc={activateTours}/>
        <Intro toursFunc={activateTours}/>
        <Footer />
      </div> 
    )
  }else if (tours){
    return(
      <div>
        <Topbar homeFunc={activateHome} toursFunc={activateTours}/>
        <br />
        <br />
        <br />
        <br /> 
        
          {tourList.map(tour=>{
            return(
              <Tour key={tour.id} image={tour.image} altDescription={tour.altDescription}
                tourName={tour.tourName} description={tour.shortDescription} func={tour.func}/>
            )
          })}
        
        <Footer />
      </div>
    )
  }else if (sagittarius_a){
    return <BlackHole obj={tourList[0]}/>
  }else if (ton_618){
    return <BlackHole obj={tourList[1]}/>
  }else if (henize_2_10){
    return <BlackHole obj={tourList[2]}/>
  }
  return(
    <div>
      
    </div>
  )
}

export default App;
