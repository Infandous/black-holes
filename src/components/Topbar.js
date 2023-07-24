import './Topbar.css'
const Topbar = (props) => {
    return(
        <div className='topbar'>
            <button className='homeButton' onClick={props.homeFunc}><h1>Black Hole Travel Guide</h1></button>
            <button className='otherButton' onClick={props.toursFunc}>Tours</button>
            <button className='otherButton'>about us</button>
            <button className='otherButton'>sources</button>
        </div> 
    )
}

export default Topbar