import './About.css'
import john from '../assets/john-doe.png'

export const About = () => {
    return (
        <div className='about'>
            <div className='child'>
                <img src={john} alt="john" />
                <div className='text-container'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}
