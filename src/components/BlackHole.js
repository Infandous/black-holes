import './BlackHole.css'

const BlackHole = ({obj}) => {
    return(
        <div>
            <h1>{obj.name}</h1>
            <img src={obj.image} alt={`${obj.name}`} />
            {obj.description} 
        </div>
    )
}

export default BlackHole