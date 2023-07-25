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

function App() {
  //set initial states for changes to main app render
  //initial state is home
  const [home, setHome] = useState(true)
  //const [henize_2_10, setHenize_2_10] = useState(false)
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
      altDescription: "Sagittarius A photo",
      tourName: "Sagittarius A",
      shortDescription: "Our most popular tour. Take a journey to the center of our very own Milky Way!",
      description:"",
      func: activate_sagittarius_a,
      id:1
    },
    {
      image: ton_618_img,
      altDescription: "TON 618 picture",
      tourName: "TON 618",
      shortDescription: "Experience the awe power of the largest known black hole",
      description:"",
      func:activate_ton_618,
      id:2
    },
    {
      image: henize_2_10_img,
      altDescription: "Henize_2_10",
      tourName: "Henize 2-10",
      shortDescription: "Experience the black hole creating a galaxy",
      description:"",
      func: activate_henize_2_10,
      id:3
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
