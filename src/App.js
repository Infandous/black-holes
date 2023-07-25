import {useState} from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Tour from './components/Tour'
import sagittarius_a_img from './images/sagittarius_a.jpg'
import ton_618_img from './images/ton_618.jpg'
import henize_2_10 from './images/henize_2_10.jpg'

const tourList = [
  {
    image: sagittarius_a_img,
    altDescription: "Sagittarius A photo",
    tourName: "Sagittarius A",
    description: "Our most popular tour. Take a journey to the center of our very own Milky Way!",
    id:1
  },
  {
    image: ton_618_img,
    altDescription: "TON 618 picture",
    tourName: "TON 618",
    description: "Experience the awe power of the largest known black hole",
    id:2
  },
  {
    image: henize_2_10,
    altDescription: "Henize_2_10",
    tourName: "Henize 2-10",
    description: "Experience the black hole creating a galaxy",
    id:3
  },
]

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
    setHenize_2_10(true)
  }

  const activateTours = () => {
    setHome(false)
    setSagittarius_a(false)
    setTon_618(false)
    setTours(true)
  }
  const activateHome = () => {
    setTours(false)
    setSagittarius_a(false)
    setTon_618(false)
    setHome(true)
  }

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
                tourName={tour.tourName} description={tour.description} />
            )
          })}
        
        <Footer />
      </div>
    )
  }else if (sagittarius_a){
    return(
      <div>
        
      </div>
    )
  }
  return (
    <div>
      
    </div>
  )
}

export default App;
