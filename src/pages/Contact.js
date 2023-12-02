// Importing required dependency for contact section
import './Contact.css';
import '../components/color.css';
import '../components/responsive.css';
import 'font-awesome/css/font-awesome.min.css';

// Createing the function for contact section
const Contact = () => {
    return (
        // contact section
        <div className='contact section'>
            <div className='container'>
                {/* heading */}
                <div className='row'>
                    <div className='section-title padd-15'>
                        <h2>Contact Me</h2>
                        <div className='div1'></div>
                        <div className='div2'></div>
                        <div className='div3'></div>
                    </div>
                </div>
                <h3 className='contact-title'>Have You Any Questions ?</h3>
                <h4 className='contact-sub-title'>I'm AI YOUR SERVICES</h4>
                {/* contact Details */}
                <div className='row'>
                    <div className='contact-info-item padd-15'>
                        <div className='icon'><i className='fa fa-phone'></i></div>
                        <h4>Call Us On</h4>
                        <p>+91 9313341454</p>
                    </div>
                    <div className='contact-info-item padd-15'>
                        <div className='icon'><i className='fa fa-map-marker'></i></div>
                        <h4>office</h4>
                        <p>Rajula</p>
                    </div>
                    <div className='contact-info-item padd-15'>
                        <div className='icon'><i className='fa fa-envelope'></i></div>
                        <h4>Email</h4>
                        <p>viralvanjar1@gmail.com</p>
                    </div>
                    <div className='contact-info-item padd-15'>
                        <div className='icon'><i className='fa fa-globe'></i></div>
                        <h4>Website</h4>
                        <p>https://viralvanjar.netlify.app</p>
                    </div>
                </div>
                <h3 className='contact-title'>SEND ME AN EMAIL</h3>
                <h4 className='contact-sub-title'>I'M VERY RESPOSIVE TO MESSAGES</h4>
                {/* contact form */}
                <form action="https://formspree.io/f/xayzqpbz" method="POST">
                <div className='row'>
                    <div className='contact-form padd-15'>
                        <div className='row'>
                            {/* username */}
                            <div className='form-itme col-6 padd-15'>
                                <div className='form-group'>
                                    <input type='text' className='form-control' name='username' placeholder='Name' required/>
                                </div>
                            </div>
                            {/* email adderss */}
                            <div className='form-itme col-6 padd-15'>
                                <div className='form-group'>
                                    <input type='email' className='form-control' name='email' placeholder='Email' required/>
                                </div>
                            </div>
                        </div>
                        {/* Subject */}
                        <div className='row'>
                            <div className='form-itme col-12 padd-15'>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Subject' />
                                </div>
                            </div>
                        </div>
                        {/* body */}
                        <div className='row'>
                            <div className='form-itme col-12 padd-15'>
                                <div className='form-group'>
                                    <textarea name='message' className='form-control' placeholder='Message'></textarea>
                                </div>
                            </div>
                        </div>
                        {/* send button */}
                        <div className='row'>
                            <div className='form-itme btns col-12 padd-15'>
                                <button className='btn' type='submit'>Send Messages</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;