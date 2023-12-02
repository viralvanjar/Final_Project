// Importing required dependency for Home section
import './Home.css';
import '../components/color.css';
import '../components/responsive.css';
import { NavLink } from 'react-router-dom';

// Createing the function for Home section
const Home = () => {
    return (
        // Home section
        <div className='home section'>
            <div className='container'>
                <div className='row'>
                    <div className='home-info padd-15'>
                        <h1 className='hello'>Hello, my name is <span className='name'><span className='logo-first-text'>V</span>iral <span className='logo-first-text'>V</span>anjar</span></h1>
                        <h3 className='my-profession'> I' m a <span className='typing'>Frontend web developer</span></h3>
                        <p> I'm a freelancer and I have High level experience in web design and development knowledge, producing qulity work.</p>
                        {/* button for about section */}
                        <NavLink to='/about' className='btn hire-me'>About Me</NavLink>
                    </div>
                    {/* my image */}
                    <div className='home-img padd-15'>
                        <img src="New folder/viral.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;