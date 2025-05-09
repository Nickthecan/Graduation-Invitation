import '../styles/components/Title.css'
import downArrow from '../assets/arrow.png'

const Title = () => {
    return (
        <>
            <div className="title">
                <h1>Nick's <br></br> Grad <br></br> Party</h1>
            </div>
            <img className="down-arrow" src={downArrow} alt="" />
        </>
    )
}

export default Title