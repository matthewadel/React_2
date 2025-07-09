import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>

                <ul>
                    <li className='nav-item'>
                        <a href="/">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#about">About</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#demo">Demo</a>
                    </li>
                </ul>


                <span className='line'></span>

                <p>2025 Execute, Inc. All rights reserved</p>

            </div>
        </div>
    )
}
