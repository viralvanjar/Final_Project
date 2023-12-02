// Importing required dependency for Services section
import './Services.css';
import '../components/color.css';
import '../components/responsive.css';
import 'font-awesome/css/font-awesome.min.css';

// Createing the function for Services section
const Services = () => {
    return (
        // Services section
        <div className='services section'>
            <div className='container'>
                {/* heading */}
                <div className='row'>
                    <div className='section-title padd-15'>
                        <h2>Services</h2>
                        <div className='div1'></div>
                        <div className='div2'></div>
                        <div className='div3'></div>
                    </div>
                </div>
                <div className='row'>
                    {/* card for web designer */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-paint-brush"></i>
                            </div>
                            <h3>Web Designer</h3>
                            <p>I am professional Frontend web designer and I will creat websites and pages to reflect a company's brand and information and ensure a user-friendly experience.</p>
                        </div>
                    </div>
                    {/* card for web developer */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-code"></i>
                            </div>
                            <h3>Web Developer</h3>
                            <p> I am Frontend Web Developer and I will build and maintenan your websites. and it's look great, work fast and perform well and user-friendly experience.</p>
                        </div>
                    </div>
                    {/* card for UI/UX */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa ui-ux">UI/UX</i>
                            </div>
                            <h3>Designer</h3>
                            <p>I have a knowledge of ux/ui designs and I will design straightforward, interesting, simple, easy, and efficient websites or software interactions, So that will give user-friendly experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;