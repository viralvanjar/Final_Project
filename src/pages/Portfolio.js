// Importing required dependency for Portfolio section
import './Portfolio.css';

// Createing the function for Portfolio section
const Portfolio = () => {
    return (
        // Portfolio section
        <div className="portfolio section">
            <div className="container">
                {/* heading */}
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Portfolio</h2>
                        <div className='div1'></div>
                        <div className='div2'></div>
                        <div className='div3'></div>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h3>My Projects :</h3>
                    </div>
                </div>
                {/* Projects */}
                <div className="row">
                    {/* Text Editor */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href='https://sparkling-lolly-0ad4da.netlify.app'  target="_blank" rel="noreferrer" ><img src="New folder/Untitled 4.png" alt="" /></a>
                            </div>
                        </div>
                        <p>Text Editor</p>
                    </div>
                    {/* Dictionary */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href='https://sparkling-lolly-0ad4da.netlify.app/dictionary.html' target="_blank" rel="noreferrer"><img src="New folder/Untitled 5.png" alt="" /></a>
                            </div>
                        </div>
                        <p>Dictionary</p>
                    </div>
                    {/* Voiceinator */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href='https://sparkling-lolly-0ad4da.netlify.app/textTospeech.html' target="_blank" rel="noreferrer"><img src="New folder/Untitled 6.png" alt="" /></a>
                            </div>
                        </div>
                        <p>The Voiceinator</p>
                    </div>
                    {/* Weather APP */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href='https://sparkling-lolly-0ad4da.netlify.app/weather.html' target="_blank" rel="noreferrer"><img src="New folder/Untitled 7.png" alt="" /></a>
                            </div>
                        </div>
                        <p>Weather App</p>
                    </div>
                    {/* Snake Game */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href='https://sparkling-lolly-0ad4da.netlify.app/snake.html' target="_blank" rel="noreferrer"><img src="New folder/Untitled 8.png" alt="" /></a>
                            </div>
                        </div>
                        <p>Snake Game</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;