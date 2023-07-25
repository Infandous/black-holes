import blackHoleHomepage from '../images/blackholeHomepage.jpg'
import blackHoleEventHorizen from '../images/blackHoleEventHorizen.jpg'
import './Intro.css'

const Intro = ({toursFunc}) => {
    const handleToursClick=(event)=>{
        event.stopPropagation();
        toursFunc()
    }
    return(
        <div className="intro">
            <div className="imgDiv">
                <img src={blackHoleHomepage} alt="image of black hole" />
                <h5><a href="https://www.nasa.gov/vision/universe/starsgalaxies/black_hole_description.html">source: NASA</a></h5>
            </div>
            <p>
                Welcome to the black hole travel guide!
                Here we aim to make your wildest dreams 
                of visiting a black hole come true!
                According to <a href="https://www.nasa.gov/vision/universe/starsgalaxies/black_hole_description.html">NASA</a>, 
                black holes are object that have such strong gravitational pulls that not even light can escape.
                Everything around the black hole is pulled down to a  point of zero volume and infinite density
                known as a singularity.
                <br/>
                <span><hr /></span>
                <br/>
                Every black hole has a characteristic known as an event horizon. The event horizon is the point
                at which the necessary velocity to withstand the pull of the black hole is greater than the
                speed of light. This becons the question, what would happend if you were to fall into one
                of these galactic monsters? 
                Lets just say it wouldn't be <a href="https://www.rmg.co.uk/stories/topics/what-happens-if-you-fall-black-hole">pretty</a>.
                If you decided to leave the safety of one of our ships during the tour and approach the black hole, some strange things
                would start to happen. First, for the rest of us safely observing, you would appear to start slowing down as you approach
                the event horizon. This process is known as time dilation. When you reach the horizon you would appear frozen,
                your imprint suspended for the rest of time. Of course you'll be having a very different experience.
                As you pass over to the other side you'll find that the concept of outside no longer exists. In fact no matter
                which direction you turn you'll head straight towards the center of the black hole. This isn't the worst of it though.
                You're body will start to change in a process known as spaghetification. The way this works is, because of the strong 
                gravitational forces of your new home, you'll be stretched thin, like spaghetti and begin to go through a sort of 
                compression perpendicularly. Worry not though, on our tour we won't dare venture this close to the black hole
                and instead maintain a stable orbit around this stellar mass on our journey.
                <br />
                <span><hr /></span>
                <br />
                <img src={blackHoleEventHorizen} alt="black hole event horizen" />
                <span><h5><a href="https://www.universetoday.com/42471/event-horizon/">source: universtoday.com</a> </h5></span>
                <br />
                <span><hr /></span>
                There are two <a href="https://imagine.gsfc.nasa.gov/science/objects/black_holes1.html">main "classes" of black holes</a>,
                stellar-mass black holes, and supermassive black holes. While Stellar-mass black holes are around five to twenty
                times the mass of our sun, supermassive black holes contains millions to billions of times greater stellar mass.
                Supermassive black holes are found at the center of galaxies. Yes there is even one in our galaxy, which you can
                book a tour for! Now there is third class posited to exist known as intermediate-mass black holes, however research
                into these are fairly new with just a few candidate objects that we know of in the universe.
                <br />
                <span><hr /></span>
                <br />
                <a href="https://www.nasa.gov/vision/universe/starsgalaxies/black_hole_description.html">The formation fo black holes</a>
                is of immense interest. Stellar-mass black holes can form when stars greater than 20 stellar-masses collapse into supernovas.
                In the aftermass of these expolosions, the core, if it contains a mass greater than three times that of our sun, can continue
                to collapse forming a black hole. Less is known about supermassive black holes, however scientists understand these behemoths
                to be ancient artifacts of the earliest days of a galaxy. Upon the birth of a black hole, it can grow by sucking up all the 
                material around it - be it stars, planets, or even other black holes. One particularly interesting event relating to that last one
                came in 2016 when scientists observed gravitational waves from a black hole collison
                almost <a href="https://www.ligo.caltech.edu/news/ligo20160211">1.3 billion years ago</a>!
                These black holes are estimated to be around 29 and 36 times the mass of our sun.
                <br />
                <span><hr /></span>
                <br />
                If you're now ready to embark on the most amazing journey of a lifetime, check out
                our <button className="pButton" onClick={handleToursClick}>tours</button> page today
                and see what we have to offer!
                <br />
                <span><hr /></span>
                
                </p>
        </div>
    )
}

export default Intro