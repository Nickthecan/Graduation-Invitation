
import '../styles/components/About.css'
import chubbyCattleLogo from '../assets/chubbyCattleLogo.png'
import thumbsup from '../assets/thumbsup.png'
import happy from '../assets/happy.png'
import cow from '../assets/cow.jpg'

const About = () => {
    return(
        <div className="about-container">
            <span>
                <h1>Where</h1>
                <div className="image-cc">
                    <img className='cc-logo' src={chubbyCattleLogo} alt="" />
                </div>
                <iframe className='chubby-cattle-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4001.4255434737415!2d-117.9013221!3d33.9935618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32b101edbbe75%3A0xc27431bc81556ccb!2sChubby%20Cattle%20BBQ%20%7C%20Rowland%20Heights!5e1!3m2!1sen!2sus!4v1746811426449!5m2!1sen!2sus" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p className='address'>1388 Fullerton Rd, Rowland Heights, CA 91748</p>
            </span>
            <span>
                <h1>When</h1>
                <p>Date: June 7th, 2025, Time: 6pm</p>
            </span>
            <span>
                <h1>Who</h1>
                <p>You!!!</p>
                <img className='thumbsup' src={thumbsup} alt="thumbs up" />
            </span>
            <span>
                <h1>Why</h1>
                <p>To celebrate my graduation</p>
                <img className='happy' src={happy} alt="happy face" />
            </span>
            <span>
                <h1>What</h1>
                <p>Chubby Cattle eat <br /> <span className='disclaimer'>this is NOT coming from my own pocket mb but I am broke</span> </p>
                <img className='cow' src={cow} alt="cow that you are going to eat" />
            </span>
        </div>
    )
}

export default About
