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
/*
  if (1){
  return(
    <p>
      Our closest black hole. Located 
      just <a href='https://www.nasa.gov/mission_pages/chandra/multimedia/black-hole-SagittariusA.html'>26,000 lightyears away</a> from earth,
      Sagittarius A is a supermassive black hole 4 million times the mass of the sun! In xray and infrared images taken of Sagittarius A, pictured above,
      the black hole appears to be half a light year wide. Purpprtedly, only 1% of the material that is affected by Sagittarius A's 
      gravitational influence reaches the event horizen. A majority of it is ejected out into space.
      <br/><br/>
      Sagittarius A, like most black holes doesn't emit light itself, so what's going on here? The answer lies in 
      the <a href="https://www.astronomy.com/science/the-history-of-sagittarius-a-the-milky-ways-supermassive-black-hole/">accretion disk</a>. 
      As the gas and dust around the black hole are compressed and swirl around the cosmic giant, the particles can reach upwards of 18 million
      degrees F or 10 million C. As a result of these high tempertures with increasing density and speed, vast amounts of radiation are released
      allowing astronomers to observe the phenomenon. Important to note is that although the radiation released varies across the electromagnetic
      spectrum, much of it is absorbed by gas and dust, thus only x-ray and radio make it all the way here to earth.
      <br/><br/>
      As mentioned earlier, <a href="https://www.e-education.psu.edu/astro801/content/l8_p7.html">Observing Sagittarius A</a> and its orbitting
      stars, scientists have concluded that the supemassive black hole has a mass of 4 million solar masses. Obviously just any supernova could
      not result in such a massive black hole, so Sagittarius A must have formed in some other, as of yet unknown way.
      <br/><br/>
      On your journey enjoy all the beauty our own Milky Way galaxy has to offer. You'll experience breathtaking visuals, an experience crew,
      complementary breakfast consisting of dehydrated foods, and a wild story for your friends and family. Don't wait to book today!
    </p>
  )}
*/

//"<p>Our closest black hole. Located just <a href='https://www.nasa.gov/mission_pages/chandra/multimedia/black-hole-SagittariusA.html'>26,000 lightyears away</a> from earth, Sagittarius A is a supermassive black hole 4 million times the mass of the sun! In xray and infrared images taken of Sagittarius A, pictured above, the black hole appears to be half a light year wide. Purpprtedly, only 1% of the material that is affected by Sagittarius A's gravitational influence reaches the event horizen. A majority of it is ejected out into space.<br/><br/>Sagittarius A, like most black holes doesn't emit light itself, so what's going on here? The answer lies in the <a href='https://www.astronomy.com/science/the-history-of-sagittarius-a-the-milky-ways-supermassive-black-hole/'>accretion disk</a>. As the gas and dust around the black hole are compressed and swirl around the cosmic giant, the particles can reach upwards of 18 million degrees F or 10 million C. As a result of these high tempertures with increasing density and speed, vast amounts of radiation are released allowing astronomers to observe the phenomenon. Important to note is that although the radiation released varies across the electromagnetic spectrum, much of it is absorbed by gas and dust, thus only x-ray and radio make it all the way here to earth. <br/><br/> As mentioned earlier, <a href='https://www.e-education.psu.edu/astro801/content/l8_p7.html'>Observing Sagittarius A</a> and its orbitting stars, scientists have concluded that the supemassive black hole has a mass of 4 million solar masses. Obviously just any supernova could not result in such a massive black hole, so Sagittarius A must have formed in some other, as of yet unknown way.<br/><br/>On your journey enjoy all the beauty our own Milky Way galaxy has to offer. You'll experience breathtaking visuals, an experience crew, complementary breakfast consisting of dehydrated foods, and a wild story for your friends and family. Don't wait to book today!</p>"

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
    return(
      <div>
        <Topbar homeFunc={activateHome} toursFunc={activateTours}/>
        <br />
        <br />
        <br />
        <BlackHole obj={tourList[0]}/>
        <Footer />
      </div>
    )
  }else if (ton_618){
    return(
      <div>
        <Topbar homeFunc={activateHome} toursFunc={activateTours}/>
        <br />
        <br />
        <br />
        <BlackHole obj={tourList[1]}/>
        <Footer />
      </div>
    )
  }else if (henize_2_10){
    return(
      <div>
        <Topbar homeFunc={activateHome} toursFunc={activateTours}/>
        <br />
        <br />
        <br />
        <BlackHole obj={tourList[2]}/>
        <Footer />
      </div>
    )
  }else{
    return (
      <div className='app'>
        <Topbar homeFunc={activateHome} toursFunc={activateTours}/>
        <Intro toursFunc={activateTours}/>
        <Footer />
      </div> 
    )
  }
}

export default App;
