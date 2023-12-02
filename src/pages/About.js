// Importing required dependency for about section
import './About.css';
import '../components/color.css';
import '../components/responsive.css';
import { NavLink } from 'react-router-dom';
import { makeStyles, Modal } from 'material-ui-core';
import { useState } from 'react';

// Createing the function for style View CV(resume)
function getModalStyle() {
    const top = 10;
    const left = 10;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transfrom: `translate(-${top}%,-${left}%)`
    };
  }
  
  // Createing the const variable for style View CV button
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #ffff',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }))
  
// Createing the function for about section
const About = () => {

    const classes = useStyles();
    // using usestate hook for opening and closing cv(resume)
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);

    // XML one type of HTML
    return (
        <>
        <div className="about section">
            <div className="container">
                {/* heading */}
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>About Me</h2>
                        <div className='div1'></div>
                        <div className='div2'></div>
                        <div className='div3'></div>
                    </div>
                </div>
                {/* Introduction section */}
                <div className="row">
                    <div className="about-content padd-15">
                        {/* Information */}
                        <div className="row">
                            <div className="about-text padd-15">
                                <h2>I'm viral vanjar and <span>Frontend web Developer</span></h2>
                                <p>To be a self motivated next generation leader with ability to rapidly changing tecnology and to drive business environment. To undertake a challenging jobs and too work with the team to achieve the organization goals which can lead to the success.</p>
                            </div>
                        </div>
                        {/* Personal information */}
                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p>Birthday : <span>30 aug 2002</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Age : <span>21</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Email : <span>viralvanjar1@gmail.com</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Phone : <span>+91 9313341454</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>City : <span>Rajula</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Freelnace : <span>available</span></p>
                                    </div>
                                </div>
                                {/* button for resume (CV) and contact section */}
                                <div className="row">
                                    <div className="button padd-15">
                                        <button href="" className="btn" onClick={() => setOpen(true)}>View CV</button>
                                        <NavLink to='/contact' className='btn hire-me'>Hire Me</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Skills */}
                            <div className="skills padd-15">
                                <div className="row">
                                    <div className="skill-item padd-15">
                                        <h4>HTML</h4>
                                        <div className="progress">
                                            <div className="progress-in html"></div>
                                            <div className="skill-percent">80%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h4>CSS</h4>
                                        <div className="progress">
                                            <div className="progress-in css"></div>
                                            <div className="skill-percent">86%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h4>JS</h4>
                                        <div className="progress">
                                            <div className="progress-in js"></div>
                                            <div className="skill-percent">76%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h4>REACT</h4>
                                        <div className="progress">
                                            <div className="progress-in react"></div>
                                            <div className="skill-percent">70%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Modal for resume(CV) */}    
        <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
            <center className='about-modal'>
            <img src="New folder/resume.jpg" alt="" />
            </center>
        </div>
      </Modal>
        </>
    )
}
export default About;