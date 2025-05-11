import { useState, useEffect } from "react"
import axios from "axios"
import '../styles/pages/Guests.css'

const URI = import.meta.env.VITE_APP_URI

const Guests = () => {
    const [guests, setGuests] = useState([])

    useEffect(() => {
        const getGuests = async () => {
            try {
                const response = await axios.get(`${URI}getUsers`)
                if (response.status === 200)
                    setGuests(response.data.names)
            }
            catch (e) {
                console.error('failed to retreive guests', e)
            }
        }
        getGuests()
    }, [])

    return (
        <>
            <div className="guest-container">
                <h1>Guests</h1>
                <div className="guest-list">
                    {guests.length !== 0 ? (   
                        <>
                            {guests.map((guest, index) => (
                                <p key={index}>{guest.name}</p>
                            ))}
                        </>
                    ) : (
                        <h1 className="none">No Guests Yet</h1>
                    )}
                </div>
            </div>
        </>
    )
}

export default Guests