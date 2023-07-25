import './BlackHole.css'
import HtmlReactParser from 'html-react-parser'

const BlackHole = ({obj}) => {
    return(
        <div>
            <h1>{obj.name}</h1>
            <img src={obj.image} alt={`${obj.name}`} />
            {HtmlReactParser(obj.description)}
        </div>
    )
}

export default BlackHole