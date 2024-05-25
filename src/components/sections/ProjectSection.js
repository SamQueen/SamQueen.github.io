import { motion } from 'framer-motion';
import ProjectItem from '../util/ProjectItem';
import './projectSection.css';


function ProjectSection() {

    const openPictureThis = () => {
        window.open('https://picturethisapp.netlify.app/', '_blank');
    }
    const openBubble = () => {
        window.open('https://samqueen.github.io/bubble-sort/bubble.html', '_blank');
    }
    const openVeriloot = () => {
        window.open('https://veriloot.netlify.app/', '_blank');
    }

    const projects = [
        {
            'title': 'Netflix Clone',
            'description': 'Presenting a React-based portfolio project showcasing a Netflix-inspired streaming platform, integrated with the TMDB API for an extensive collection of movies and TV shows.',
            'imgPath': 'projects/net.JPG',
            'link': 'https://havesomemovies.netlify.app/?fbclid=IwAR1NxYMgHKLDX7DU7Hs3bIVy6HOL7WeyrPtP-ks2y2xzFR1ZBnCcL4F4CwA',
            'techStack': ['react', 'javascript', 'rest', 'git'],
            'side': 'left'
        },
        {
            'title': 'React Flexible Slide',
            'description': 'A responsive React carousel designed for integration into my Netflix clone project, encapsulated within an npm package for versatile usage across various projects.',
            'imgPath': 'projects/npm.JPG',
            'link': 'https://www.npmjs.com/package/react-flexible-slide?activeTab=readme',
            'techStack': ['react', 'typeScript', 'git'],
            'side': 'right'
        },
        {
            'title': 'VeriLoot',
            'description': 'An innovative local marketplace company built using React, powering its dynamic web application.',
            'imgPath': 'projects/veriloot.JPG',
            'link': 'https://veriloot.netlify.app/',
            'techStack': ['react', 'javascript', 'mysql', 'git'],
            'side': 'left'
        },
    ]

    return (
        <section id='project-section' className='project-section-container'>
            <h1 id="title">Projects</h1>

            <div className="gallery">
                
                {projects.map((project, i) => (
                    <div key={i}>
                        <ProjectItem 
                            title={project.title}
                            description={project.description}
                            imgPath={project.imgPath}
                            link={project.link}
                            techStack={project.techStack}
                            side={project.side}
                        />
                    </div>
                ))}                

            </div>
        </section>
    )
}

export default ProjectSection;