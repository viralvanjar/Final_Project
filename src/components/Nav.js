// Importing required dependency for navigation bar
import './Nav.css';
import './color.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// Createing the function for navbar
const Nav = () => {

    // using usestate hook for opening and closing navbar for rerponsive Designer
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(open => !open);
    }

    const closeNav = () => {
        setOpen(false);
    }

    return (
        <>
            <div className='background' />
            <div className='navigtion' onScroll={closeNav}>
                <img className='logo' src="New folder/logo.png" alt="" />
                <div className="nav-toggle" onClick={toggleNav}>
                    <span></span>
                </div>
                {/* nav items */}
                <ul className={open ? "open" : "close"} onClick={closeNav}>
                    {/* Home pages*/}
                    <NavLink className="list" to="/home">
                        <div className='page'>
                            <span className="icon"><img src="./New folder/home.png" alt="" /></span>
                            <span className="text">Home</span>
                        </div>
                    </NavLink>
                    {/* About pages*/}
                    <NavLink className="list" to="/about">
                        <div className='page'>
                            <span className="icon"><img className='about-icon' src="./New folder/about.png" alt="" /></span>
                            <span className="text">About</span>
                        </div>
                    </NavLink>
                    {/* Services pages*/}
                    <NavLink className="list" to="/services">
                        <div className='page'>
                            <span className="icon service"></span>
                            <span className="text">Service</span>
                        </div>
                    </NavLink>
                    {/* Portfolio pages*/}
                    <NavLink className="list" to="/portfolio">
                        <div className='page'>
                            <span className="icon"><img src="./New folder/portfolio.png" alt="" /></span>
                            <span className="text">Portfolio</span>
                        </div>
                    </NavLink>
                    {/* Contact pages*/}
                    <NavLink className="list" to="/contact">
                        <div className='page'>
                            <span className="icon"><img src="./New folder/chat-message.png" alt="" /></span>
                            <span className="text">Contact</span>
                        </div>
                    </NavLink>
                    <div className="indicator"></div>
                </ul>
            </div>
        </>
    )
}
export default Nav;