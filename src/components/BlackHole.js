import './BlackHole.css'
import HtmlReactParser from 'html-react-parser'

const BlackHole = ({obj}) => {
    //console.log(JSON.stringify(obj.tourName))
    return(
        <div className="blackHoleInfo">
            <br/><br/><br/><br/><br/><br/><br/>
            <h1>{obj.tourName}</h1>
            <img src={obj.image} alt={`${obj.name}`} />
            {HtmlReactParser(obj.description)}
            <button onClick={()=>alert("thank you for your interest, we'll get back to you soon")}>Secure your spot today!</button>
        </div>
    )
}

export default BlackHole