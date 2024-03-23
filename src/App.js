import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import TitleSection from './components/sections/TitleSection';
import AboutSection from './components/sections/AboutSection';
import ProjectSection from './components/sections/ProjectSection';
import ContactSection from './components/sections/ContactSection';
import ResumeSection from './components/sections/ResumeSection';

function App() {
    return (
        <div className="App">

            <Nav />

            <TitleSection />

            <AboutSection />

            <ProjectSection />

            <ResumeSection />

            <ContactSection />

        </div>
    );
}

export default App;
