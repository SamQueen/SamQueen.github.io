import React from "react";
import { motion } from 'framer-motion';
import './projectItem.css';

const ProjectItem = ({imgPath, link, side, title, description, techStack}) => {
    
    const openLink = (link) => {
        window.open(link, '_blank');
    }

    if (side === 'right') {
        return (
            <div className='project'>
                <motion.div 
                    className='project-img-container'
                    initial={{x: "-200px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                >
                    <img className='project-img' src={imgPath}></img>
                </motion.div>

                <motion.div 
                    className='project-info-container'
                    initial={{x: "200px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                >
                    <h3>{title}</h3>
                    <img id="mobile-project-img" src="projects/veriloot.JPG"></img>
                    <p>{description}</p>

                    <ul className="project-tech-stack">
                        {techStack.map((item, i) => (
                            <li key={i}><img src={`./tech/${item}.png`}></img></li>
                        ))}          
                    </ul>

                    <span id="project-btn" onClick={() => openLink(link)}>Demo</span>
                </motion.div>
            </div>
        )
    }

    return (
        <div className='project'>
            <motion.div 
                className='project-info-container'
                initial={{x: "200px", opacity: 0}}
                whileInView={{x: "0", opacity: 1}}
                viewport={{ once: true, amount: 0.8}}
            >
                <h3>{title}</h3>
                <img id="mobile-project-img" src="projects/veriloot.JPG"></img>
                <p>{description}</p>

                <ul className="project-tech-stack">
                    <ul className="project-tech-stack">
                        {techStack.map((item, i) => (
                            <li key={i}><img src={`./tech/${item}.png`}></img></li>
                        ))}          
                    </ul>
                </ul>

                <span id="project-btn" onClick={() => openLink(link)}>Demo</span>
            </motion.div>

            <motion.div 
                className='project-img-container'
                initial={{x: "-200px", opacity: 0}}
                whileInView={{x: "0", opacity: 1}}
                viewport={{ once: true, amount: 0.8}}
            >
                <img className='project-img' src={imgPath}></img>
            </motion.div>
        </div>
    )
}

export default ProjectItem;