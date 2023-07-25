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
//import data from './data/db.json'

function App() {
  //const starData = JSON.parse(data)
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
   "<p>Henize 2-10 is a dwarf starbust galaxy with a central massive black hole. The interesting thing about Henize 2-10's black hole is it has been observed to be a possible cause of <a href='https://stsci-opo.org/STScI-01FS54KY3FP3TXHRRS3NTS98XP.pdf'>star formation</a> in the galaxy. Located approximated 29.34 million light years away, scientists have observed an ionized filoment approximately 489 light years long connecting the Henize 2-10 black hole with a cluster of recent star formations. This has led many in the scientific community to conclude that the outflow from the black hole caused the star formation.<br /><br />The Hubble telescope has <a href='https://www.sci.news/astronomy/supermassive-black-hole-star-formation-dwarf-galaxy-10480.html'>observed</a> Henize 2-10's outflow moving at a speed of 1 million mph before reaching the cloud of gas acting as a nursery for stars. Further, contrary to more massive black holes that heat gas clouds well beyond the temperature to precipitate star formation, Henize 2-10 is much smaller and softer on the gas allowing for an enviornment conducive to the birth of stars. <br /><br />If the idea of watching the formation of stars and a galaxy piques your interest, be sure to sign up for this once in a lifetime journey. Not only will you experience the sheer majesty of Henize 2-10's black hole, but you will also have an opportunity to see one of the universes nurseries in action. Book a trip today!</p>" 
  )}
*/

  //"<p>Our closest black hole. Located just <a href='https://www.nasa.gov/mission_pages/chandra/multimedia/black-hole-SagittariusA.html'>26,000 lightyears away</a> from earth, Sagittarius A is a supermassive black hole 4 million times the mass of the sun! In xray and infrared images taken of Sagittarius A, pictured above, the black hole appears to be half a light year wide. Purpprtedly, only 1% of the material that is affected by Sagittarius A's gravitational influence reaches the event horizen. A majority of it is ejected out into space.<br/><br/>Sagittarius A, like most black holes doesn't emit light itself, so what's going on here? The answer lies in the <a href='https://www.astronomy.com/science/the-history-of-sagittarius-a-the-milky-ways-supermassive-black-hole/'>accretion disk</a>. As the gas and dust around the black hole are compressed and swirl around the cosmic giant, the particles can reach upwards of 18 million degrees F or 10 million C. As a result of these high tempertures with increasing density and speed, vast amounts of radiation are released allowing astronomers to observe the phenomenon. Important to note is that although the radiation released varies across the electromagnetic spectrum, much of it is absorbed by gas and dust, thus only x-ray and radio make it all the way here to earth. <br/><br/> As mentioned earlier, <a href='https://www.e-education.psu.edu/astro801/content/l8_p7.html'>Observing Sagittarius A</a> and its orbitting stars, scientists have concluded that the supemassive black hole has a mass of 4 million solar masses. Obviously just any supernova could not result in such a massive black hole, so Sagittarius A must have formed in some other, as of yet unknown way.<br/><br/>On your journey enjoy all the beauty our own Milky Way galaxy has to offer. You'll experience breathtaking visuals, an experience crew, complementary breakfast consisting of dehydrated foods, and a wild story for your friends and family. Don't wait to book today!</p>"

  //"<p>TON 618, <a href='https://encyclopedia.pub/entry/35684'>technically a quasar</a>, is powered by a supermassive black hole in the center of its galaxy. Light from the quasar received here on earth is thought to be 10.8 billion years old. TON 618 is so bright we can't even see the rest of the galaxy around it. TON 618's luminosity has been calculated to be 4x10^40 watts - 140 trillion times greater than our own sun!.<br/><br/> For such a bright quasar, the black hole powering it must be massive right? You'd be correct. Scientists have figured that TON 618 has a mass of at least <a href='https://encyclopedia.pub/entry/35684'>66 billion solar masses</a>. That's more than the mass of every star in our Milky Way combined. Whats more, the event horizon has a diameter of 390 billion km - or the distance of Neptune to the sun times 40!<br/><br/>For this trip be sure to bring some sunglasses as we take the more than ten and a half billion light year journey to witness one of the most amazing feats of nature. Thank you for choosing Black Hole Travel guide, and if you book today you could save 10% or more on your journey!</p>"

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
