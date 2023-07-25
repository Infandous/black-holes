import './Tour.css'
const Tour = (props) => {
    return(
        <div className="tour">
            <img src={props.image} alt={props.altDescription} />
            <h1>{props.tourName}</h1>
            <p>{props.shortDescription}</p>
            <button onClick={props.func}>click to book now!</button>
        </div>
    )
}

export default Tour