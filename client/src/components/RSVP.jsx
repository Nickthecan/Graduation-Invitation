import { useState } from "react"
import '../styles/components/RSVP.css'

const RSVP = ({ setConfirmation }) => {
    const [fullName, setFullName] = useState("")
    const [error, setError] = useState(false)

    const rsvpToTheParty = () => {
        if (!fullName) {
            setError(true)
            return
        }

        //backend stuff
        setError(false)
        setConfirmation(true)
    }

    return(
        <div className="container-for-sign-up">
            <h1>RSVP below!</h1>
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => {setFullName(e.target.value)}}/>
            <button onClick={() => {rsvpToTheParty()}}>Submit</button>
            {error && (<p className="">Please enter a name</p>)}
        </div>
    )
}

export default RSVP