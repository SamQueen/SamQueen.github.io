import './resumeSection.css';

function ResumeSection() {
    
    const openResume = () => {
        window.open('SamQueenResume.PDF', '_blank');
    }
    
    return(
        <div id='resume-section' className='resume-section-container'>
            <h1 id='resume-title'>Have a look at my resume!</h1>

            <img id='resume-img' src="projects/resImg.JPG" alt=""></img>

            <div className='download-btn' onClick={openResume}>
                View
            </div>
        </div>
    )
}

export default ResumeSection;