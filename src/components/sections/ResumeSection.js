import './resumeSection.css';

function ResumeSection() {
    
    const openResume = () => {
        window.open('./Resume.PDF', '_blank');
    }
    
    return(
        <div id='resume-section' className='resume-section-container'>
            <h1 id='title'>Have a look at my resume!</h1>

            <img id='resume-img' src="projects/Resume.JPG"></img>

            <div className='download-btn' onClick={openResume}>
                Open
            </div>
        </div>
    )
}

export default ResumeSection;