import './Demo.css'

export const Demo = () => {
    return (
        <div className='demo'>

            <div className='container'>

                <div className='content'>
                    <p>More Than 100 Financial Planners,</p>
                    <h1>One Philosophy</h1>
                    <p>Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.</p>
                    <button className='button'>Get your free financial analysis</button>
                </div>

                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Youtube Video Player" src="https://www.youtube.com/embed/oeqP5JtihMA" width="570" height="320"></iframe>

            </div>
        </div>
    )
}
