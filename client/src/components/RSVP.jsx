import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import '../styles/components/RSVP.css'

const URI = import.meta.env.VITE_APP_URI

const RSVP = ({ setConfirmation }) => {
    const [fullName, setFullName] = useState("")
    const [error, setError] = useState(false)
    const [errorDescription, setErrorDescription] = useState("")


    const navigate = useNavigate()


    const rsvpToTheParty = async () => {
        setErrorDescription("")
        setError(false)
        if (!fullName) {
            setErrorDescription("Please enter a name")
            setError(true)
            return
        }

        try {
            console.log("trying axios")
            const response = await axios.post(`${URI}addUser`, {
                "name": fullName
            })
            if (response.status === 200) {
                setError(false)
                setConfirmation(true)
            }
        }
        catch (e) {
            if (e.response) {
                if (e.response.status === 400) {
                    setErrorDescription("Please enter a name")
                    setError(true)
                }
                else if (e.response.status === 409) {
                    setErrorDescription("name already RSVP'd")
                    setError(true)
                }
                else if (e.response.status === 500) {
                    setErrorDescription("Server Error: Please try again later")
                    setError(true)
                }
                else {
                    setErrorDescription("Something went wrong")
                    setError(true)
                }
            }
            else {
                setErrorDescription("Server did not respond")
            }
        }

    }

    return(
        <div className="container-for-sign-up">
            <h1>RSVP below!</h1>
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => {setFullName(e.target.value)}}/>
            {error && errorDescription && (<p className="error-description">{errorDescription}</p>)}
            <button onClick={() => {rsvpToTheParty()}}>Submit</button>
            <button onClick={() => {navigate('/guests')}}>Guests</button>
        </div>
    )
}

export default RSVP