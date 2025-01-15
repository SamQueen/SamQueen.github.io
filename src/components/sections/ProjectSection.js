import ProjectItem from '../util/ProjectItem';
import './projectSection.css';


function ProjectSection() {

    /* const openPictureThis = () => {
        window.open('https://picturethisapp.netlify.app/', '_blank');
    }
    const openBubble = () => {
        window.open('https://samqueen.github.io/bubble-sort/bubble.html', '_blank');
    }
    const openVeriloot = () => {
        window.open('https://veriloot.netlify.app/', '_blank');
    } */

    const projects = [
        {
            'title': 'Startup 3',
            'description': ' A fully responsive web application developed based on the provided Figma design, ensuring seamless user experience and pixel-perfect implementation. The project includes attention to detail in translating the design into functional code, with optimized performance and cross-browser compatibility.',
            'imgPath': 'projects/figma.JPG',
            'link': 'https://figmapractice22.netlify.app/',
            'gitLink': 'https://github.com/SamQueen/figma-practice',
            'techStack': ['react', 'tailwind', 'typescript',],
            'side': 'left'
        },
        {
            'title': 'Picture Perfect',
            'description': 'An Instagram-inspired CRUD application enabling users to log in, share photos, comment on posts, and personalize their profiles.',
            'imgPath': 'projects/picture-perfect.JPG',
            'link': 'https://www.pictureper.com/',
            'gitLink': 'https://github.com/SamQueen/Picture-Perfect-Client',
            'techStack': ['react', 'next', 'tailwind', 'typescript', 'mysql', 'node'],
            'side': 'right'
        },
        {
            'title': 'Netflix Clone',
            'description': 'Presenting a React-based portfolio project showcasing a Netflix-inspired streaming platform, integrated with the TMDB API for an extensive collection of movies and TV shows.',
            'imgPath': 'projects/net.JPG',
            'link': 'https://havesomemovies.netlify.app/?fbclid=IwAR1NxYMgHKLDX7DU7Hs3bIVy6HOL7WeyrPtP-ks2y2xzFR1ZBnCcL4F4CwA',
            'gitLink': 'https://github.com/SamQueen/movie-app',
            'techStack': ['react', 'javascript', 'rest', 'git'],
            'side': 'left'
        },
        {
            'title': 'React Flexible Slide',
            'description': 'A responsive React carousel designed for integration into my Netflix clone project, encapsulated within an npm package for versatile usage across various projects.',
            'imgPath': 'projects/npm.JPG',
            'link': 'https://www.npmjs.com/package/react-flexible-slide?activeTab=readme',
            'gitLink': 'https://github.com/SamQueen/react-flexible-slide',
            'techStack': ['react', 'typeScript', 'git'],
            'side': 'right'
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
                            gitLink={project.gitLink}
                        />
                    </div>
                ))}                

            </div>
        </section>
    )
}

export default ProjectSection;