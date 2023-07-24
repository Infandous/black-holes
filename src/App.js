import {useState} from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Intro from './components/Intro'

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
        <Intro />
      </div> 
    )
  }else if (tours){
    return(
      <div>
        <Topbar homeFunc={activateHome} toursFunc={activateTours}/>
      </div>
    )
  }
  return (
    <div>
      
    </div>
  )
}

export default App;
