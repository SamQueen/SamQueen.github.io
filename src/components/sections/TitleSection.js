import { useCallback } from 'react';
import './titleSection.css';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import particleOptions from '../../particleOptions';
import {FaArrowCircleDown} from 'react-icons/fa';

function TitleSection() {
    
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const arrowDownEvent = () => {
        
    }

    return(
        <div id="title-section" className="title-section-container">
            
            <div className='title-section'>
                <h2 id="title1">My name is <u>Sam Queen</u></h2>
                <h2 id="title2">I make web applications</h2>
            </div>

            <FaArrowCircleDown id="down-arrow" onClick={arrowDownEvent} ></FaArrowCircleDown>
            

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleOptions}
                width='100px'
            /> 

        </div>
    );
}

export default TitleSection;