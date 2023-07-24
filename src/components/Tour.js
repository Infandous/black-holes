
const Tour = (props) => {
    return(
        <div className="tour">
            <img src={props.image} alt={props.altDescription} />
            <h1>{props.tourName}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Tour