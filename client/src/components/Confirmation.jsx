import '../styles/components/Confirmation.css'

const Confirmation = ({ setConfirmation }) => {
    return(
        <>
            <div className="overlay">
                <div className="confirmation-container">
                    <h1>Thanks Twin ❤️‍🩹❤️‍🩹❤️‍🩹 Hope to see you there!</h1>
                     <button onClick={() => {setConfirmation(false)}}>Alr bet</button>
                </div>
            </div>
        </>
    )
}

export default Confirmation