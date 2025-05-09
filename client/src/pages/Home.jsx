import Title from "../components/Title"
import About from "../components/About"
import RSVP from "../components/RSVP"
import Confirmation from "../components/Confirmation"
import '../styles/pages/Home.css'
import { useState } from "react"


const Home = () => {
const [confirmation, setConfirmation] = useState(false)


    return (
        <>
            <div className="home-container">
                {confirmation && (<Confirmation setConfirmation={setConfirmation}/>)}
                <Title />
                <About />
                <RSVP setConfirmation={setConfirmation} />
            </div>
        </>
    )
}

export default Home