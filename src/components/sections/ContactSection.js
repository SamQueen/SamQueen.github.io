import { FaLinkedinIn, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import './contactSection.css';

function ContactSection() {
    return(
        <section id='contact-section' className='contact-section-container'>
            
            <h1 id='title'>Contact Me</h1>

           <div className='contact-section'>
                <div className='contact-info-container'>
                    <p>Feel free to contact me by feeling out this form by using any of the contact methods below</p>

                    <ul id="contact-icon-list">
                        <li id='contact-icon-linkedin'><FaLinkedinIn /></li>
                        <li id='contact-icon-gmail'>G</li>
                        <li id='contact-icon-phone'><FaPhoneAlt /></li>
                        <li id='contact-icon-git'><FaGithub /></li>
                    </ul>
                </div>
                
                <div className='contact-page'>
                    <p id='contact-page-title'>Send me a message🚀</p>

                    <input placeholder='Name'></input>
                    <br />
                    <input placeholder='Email Address'></input>
                    <br />
                    <input placeholder='Subject'></input>

                    <p id='contact-page-info'>I'd love to know about your project</p>
                    <textarea ></textarea>

                    <div id='contact-page-send-btn'>Send</div>
                </div>
           </div>

        </section>
    )
}

export default ContactSection;