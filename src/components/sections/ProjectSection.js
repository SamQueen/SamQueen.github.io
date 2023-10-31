import { motion } from 'framer-motion';
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


    return (
        <section id='project-section' className='project-section-container'>
            <h1 id="title">Projects</h1>

            <div className="gallery">
                
                <div className='project'>

                    <motion.div 
                        className='project-img-container'
                        initial={{x: "-200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <img src="projects/veriloot.JPG"></img>
                    </motion.div>

                    <motion.div 
                        className='project-info-container'
                        initial={{x: "200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <h3>Veriloot</h3>
                        <img id="mobile-project-img" src="projects/veriloot.JPG"></img>
                        <p>A fictional local marketplace company. This web application was created using react.</p>
                        <span id="project-btn" onClick={openVeriloot}>Demo</span>
                    </motion.div>
                </div>

                <div className='project'>

                    <motion.div 
                        className='project-info-container'
                        initial={{x: "-20px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <h3>Picture This Social Media Project</h3>
                        <img id="mobile-project-img" src="projects/picture-this.PNG"></img>
                        <p>This web application was made using react, node js, express, and mysql. This is my simple facebook-like clone.</p>
                        <span id="project-btn" onClick={openPictureThis}>Demo</span>
                    </motion.div>
                    
                    <motion.div 
                        className='project-img-container'
                        initial={{x: "200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <img src="projects/picture-this.PNG"></img>
                    </motion.div>

                </div>
                <div className='project'>

                    <motion.div 
                        className='project-img-container'
                        initial={{x: "-200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <img src="projects/bubblesort.JPG"></img>
                    </motion.div>

                    <motion.div 
                        className='project-info-container'
                        initial={{x: "200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <h3>Bubble Sort Visualizer</h3>
                        <img id="mobile-project-img" src="projects/bubblesort.JPG"></img>
                        <p>This website was made to demonstrate a visual representation of the bubble sort algorithm.</p>
                        <span id="project-btn" onClick={openBubble}>Demo</span>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default ProjectSection;