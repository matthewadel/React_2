import './Testimonials.css'
import user1 from '../assets/user1.jpeg'
import user2 from '../assets/user2.jpeg'
import user3 from '../assets/user3.jpeg'

export const Testimonials = () => {

    const Card = ({ image, paragraph, name, position, }: { image: string, paragraph: string, name: string, position: string }) => {
        return (
            <div className='card'>
                <img src={image} alt="" />
                <p>{paragraph}</p>
                <p>{name}</p>
                <p>{position}</p>
            </div>
        )
    }

    return (
        <div className="Testimonials" id="testimonials">
            <div className="child">
                <h1>Testimonials</h1>
                <span className="line"></span>
                <div className='cards-container'>
                    <Card position='Director of "Financial Times"' name="Johnson.M.J." image={user1} paragraph='It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!' />
                    <Card position='Director at Risktec Solutions Ltd' name="Carol Harper" image={user2} paragraph='In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.' />
                    <Card position='Managing Director of BPW Global' name="Snow.J.R." image={user3} paragraph='A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.' />
                </div>
            </div>
        </div>
    )
}
