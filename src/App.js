import {useState} from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Intro from './components/Intro'

function App() {
  //set initial states for changes to main app render
  //initial state is home
  const [home, setHome] = useState(true)
  const [henize_2_10, setHenize_2_10] = useState(false)


  if (home){
    return (
      <div className='app'>
        <Topbar />
        <Intro />
      </div> 
    )
  }else if (henize_2_10){
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
