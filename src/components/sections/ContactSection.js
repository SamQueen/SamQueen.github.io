import { FaLinkedinIn, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import './contactSection.css';

function ContactSection() {
    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/samuel-queen-599298272/', '_blank');
    }

    const handleGmail = () => {
        window.open('mailto:sjqueen@asu.edu', '_blank');
    }

    const handleGithub = () => {
        window.open('https://github.com/SamQueen', '_blank');
    }

    return(
        <section id='contact-section' className='contact-section-container'>
            
            <h1 id='title'>Contact Me</h1>

           <div className='contact-section'>
                <div className='contact-info-container'>
                    <p>Feel free to contact me by feeling out this form by using any of the contact methods below</p>

                    <ul id="contact-icon-list">
                        <li id='contact-icon-linkedin' onClick={handleLinkedin}><FaLinkedinIn /></li>
                        <li id='contact-icon-gmail' onClick={handleGmail}>G</li>
                        <li id='contact-icon-phone'onClick={handleGmail}><FaPhoneAlt /></li>
                        <li id='contact-icon-git' onClick={handleGithub}><FaGithub /></li>
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