import './resumeSection.css';

function ResumeSection() {
    
    const openResume = () => {
        window.open('resume2.PDF', '_blank');
    }
    
    return(
        <div id='resume-section' className='resume-section-container'>
            <h1 id='title'>Have a look at my resume!</h1>

            <img id='resume-img' src="projects/resimg.JPG"></img>

            <div className='download-btn' onClick={openResume}>
                Download
            </div>
        </div>
    )
}

export default ResumeSection;