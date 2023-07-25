import './Tour.css'
const Tour = (props) => {
    return(
        <div className="tour">
            <img src={props.image} alt={props.altDescription} />
            <h1>{props.tourName}</h1>
            <p>{props.description}</p>
            <button onClick={()=>console.log('clicked')}>click to book now!</button>
        </div>
    )
}

export default Tour