import blackHoleHomepage from '../images/blackholeHomepage.jpg'
import './Intro.css'

const Intro = () => {
    return(
        <div className="intro">
            <div>
                <img src={blackHoleHomepage} alt="image of black hole" />
                <h5>source: NASA</h5>
            </div>
            <p>
                Welcome to the black hole travel guide!
                Here we aim to make your wildest dreams 
                of visiting a black hole come true!
                According to <a href="https://www.nasa.gov/vision/universe/starsgalaxies/black_hole_description.html">NASA</a>, 
                black holes are object that have such strong gravitational pulls that not even light can escape.
                Every black hole has a characteristic known as an event horizen. The event horizen is the point
                at which the necessary velocity to withstand the pull of the black hole is greater than the
                speed of light.
                <br />
                There are two
                </p>
        </div>
    )
}

export default Intro