import { useEffect, useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import './nav.css';

function Nav() {
    const ref = useRef(null);
    const [scroll, setScroll] = useState(true);
    const [scroll2, setScroll2] = useState(true);
    const [navGrow, setNavGrow] = useState(false);
    
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollVal = window.scrollY < 100; 

            if (scrollVal !== scroll) {
                setScroll(scrollVal);
            }
        });
    })

    // grow mobile nave when icon clicker
    const navGrowEvent = () => {
        setNavGrow(!navGrow);
        setScroll2(!scroll2);
    }

    // set classname based on scrollval
    var className = (scroll) ? '' : 'nav-active';
    var className3 = (scroll2) ? '' : 'nav-active';
    // set classname based on nav grow
    var className2 = (navGrow) ? 'nav-grow' : ''; 

    // scroll to view event
    const scrollToView = (event) => {
        var element = '';
        const name = event.target.innerText;

        switch(name) {
            case 'HOME':
                element = document.getElementById('title-section');
                break;
            case 'ABOUT':
                element = document.getElementById('about-section');
                break;
            case 'PROJECTS':
                element = document.getElementById('project-section');
                break;
            case 'RESUME':
                element = document.getElementById('resume-section');
                break;
            case 'CONTACT':
                element = document.getElementById('contact-section');
                break;
            default: 
                break;
        }
        
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return(
        <div className={`nav-container ${className} ${className3}`}>
            
            <h2 id="logo">Sam Queen</h2>

            {/* <p>icons</p> */}

            <FaBars id="bars-icon" onClick={navGrowEvent}/>

            <div className={`mobile-nav ${className2}`}>
                <ul id="mobile-nav-list">
                    <li onClick={scrollToView}> HOME </li>
                    <li onClick={scrollToView}> ABOUT </li>
                    <li onClick={scrollToView}> PROJECTS </li>
                    <li onClick={scrollToView}> RESUME </li>
                    <li onClick={scrollToView}> CONTACT </li>
                </ul>
            </div>

            <ul id="nav-list">
                <li onClick={scrollToView}> HOME </li>
                <li onClick={scrollToView}> ABOUT </li>
                <li onClick={scrollToView}> PROJECTS </li>
                <li onClick={scrollToView}><a> RESUME </a></li>
                <li onClick={scrollToView}>CONTACT </li>
            </ul>

        </div>
    );
}

export default Nav;