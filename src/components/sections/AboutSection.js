import { motion } from 'framer-motion';
import './aboutSection.css';

function AboutSection() {
    return(
        <section id="about-section" className='about-section-container'>
           
            
            <h1 id="title">About Me</h1>

            <div className='typing-container'>
                <p>I'm a</p>
                
                <ul className='typing-list'>
                    <li id="type">Web Developer</li>
                    <li id="type">Full Stack Developer</li>
                    <li id="type">Software Developer</li>
                </ul>
            </div>

            <p id="paragraph">Welcome to my corner of the web! My name is Sam Queen and I am a passionate computer science student on a mission to build beautiful web applications. My role as a developer goes beyond writing lines of code; it's about turning ideas into functional websites.</p>

           
        
            <div className='tech-stack'>
                
                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.5 }}
                >
                    <img src={'tech/react.png'} />
                    <p>React</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.7 }}
                >
                    <img src={'tech/vite.png'} />
                    <p>Vite</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/next.png'} />
                    <p>Next.js</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 1.1 }}
                >
                    <img src={'tech/sass.png'} />
                    <p>Sass</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/jq.png'} />
                    <p>jQuery</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/node.png'} />
                    <p>Node.js</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/express.png'} />
                    <p>Express</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/mysql.png'} />
                    <p>MySQL</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/c.png'} />
                    <p>C++</p>
                    </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/java.png'} />
                    <p>java</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/python.png'} />
                    <p>python</p>
                </motion.div>

                <motion.div 
                    className="tech-item"
                    initial={{x: "-20px", opacity: 0}}
                    whileInView={{x: "0", opacity: 1}}
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ duration: 0.9 }}
                >
                    <img src={'tech/git.png'} />
                    <p>Git</p>
                </motion.div>

            </div>
        </section>
    )
}

export default AboutSection;