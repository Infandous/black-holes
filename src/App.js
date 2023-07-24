import {useState} from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Tour from './components/Tour'
import sagittarius_a from './images/sagittarius_a.jpg'

const tourList = [
  {
    image: sagittarius_a,
    altDescription: "Sagittarius A photo",
    tourName: "Sagittarius A",
    description: "Our most popular tour. Take a journey to the center of our very own Milky Way!",
    id:1
  },
  {
    image: "",
    altDescription: "",
    tourName: "",
    description: "",
    id:2
  },
  {
    image: "",
    altDescription: "",
    tourName: "",
    description: "",
    id:3
  },
]

function App() {
  //set initial states for changes to main app render
  //initial state is home
  const [home, setHome] = useState(true)
  const [henize_2_10, setHenize_2_10] = useState(false)
  const [tours, setTours] = useState(false)

  const activate_henize_2_10 = () => {
    setHome(false)
    setHenize_2_10(true)
  }

  const activateTours = () => {
    setHome(false)
    setTours(true)
  }
  const activateHome = () => {
    setHome(true)
    setTours(false)
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
        <ul>
          {tourList.map(tour=>{
            return(
              <li><Tour key={tour.id} image={tour.image} altDescription={tour.altDescription}
                tourName={tour.tourName} description={tour.description} /></li>
            )
          })}
        </ul>
        <Footer />
      </div>
    )
  }
  return (
    <div>
      
    </div>
  )
}

export default App;
