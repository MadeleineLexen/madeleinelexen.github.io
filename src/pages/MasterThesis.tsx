import './styles/ProjectsCommon.css';
import Breadcrumbs from '../components/Breadcrumbs';
import HeaderImage from '../assets/MasterThesis/MasterThesisCardWhite.png';
import ProjectTopSection from '../components/ProjectPage/ProjectTopSection';
import SectionTitleAboveContent from '../components/ProjectPage/SectionTitleAboveContent';
import Loggar from '../assets/MasterThesis/Loggar.png';
import Crazy8_1 from '../assets/MasterThesis/Crazy8_1.png';
import Crazy8_2 from '../assets/MasterThesis/Crazy8_2.png';
import StudyVisit from '../assets/MasterThesis/Study_visit.png';
import Map1 from '../assets/MasterThesis/Map1.png';
import Maps2 from '../assets/MasterThesis/Maps2.png';
import Loggar1 from '../assets/MasterThesis/Loggar1.png';
import Loggar2 from '../assets/MasterThesis/Loggar2.png';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const MasterThesis = () => {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const slides = [
        { src: Map1 },
        { src: Maps2 },
        { src: Loggar1 },
        { src: Loggar2 }
    ];

    return (
        <div>
            <main className="project-page-center">
                <Breadcrumbs />
                <h1 className="project-main-title">Master thesis</h1>
                <img src={HeaderImage} alt="Master Thesis" className="page-header-image" />
                <ProjectTopSection title={"Master Thesis"} description={"The goal of this thesis was to figure out the best way to present information to an operator at a maritime coordination centre. To do this, we collaborated with the Swedish Sea Rescue Society (SSRS), a volunteer rescue organisation that helps with rescue operations in Swedish and surrounding waters.   To support their crews, SSRS have five employees that rotate being on-call. They function as decision support and aid in coordinating the resources and operations at SSRS. Over the years, SSRS has grown to the point where they need a physical coordination centre to do their work efficiently. This project aimed to contribute to the centre by exploring how to design a system for it."} info={{ client: "The Swedish Sea Rescue Society, Chalmers University of Technology", team: "Research partner Sara Kitzing", role: "Researcher", timeline: "Jan 2021 - Jun 2021" }} />
                <p className='goal-statement'>Problem statement: How does one present information to meet the needs of an operator at a maritime coordination centre?</p>

                <SectionTitleAboveContent title="Context" >
                    <p className="project-text">
                    </p>
                    <div className="centered-image">
                        <img src={Loggar} alt="PausePal sketches photo" />

                    </div>
                </SectionTitleAboveContent>
                <SectionTitleAboveContent title="Designing for a maritime coordination centre" >
                    <p className="project-text">
                        The project started with a literature study and an initial pre-study to gather information about needs, tasks being performed, the users, and the types of alarms SSRS handles.

                        We followed the Design Thinking process, which included three iterations. For each iteration, we created a prototype and refined the guidelines. The final prototype featured two monitors: one for event information and the other for a map view, connected through shortcuts. User tests showed that the prototype was understandable and usable for the on-call workers at SSRS.
                    </p>
                    <div className="image-grid">
                        <img src={Crazy8_1} alt="PausePal sketches photo" />
                        <img src={Crazy8_2} alt="PausePal sketches photo" />
                    </div>

                </SectionTitleAboveContent>
                {/* <SectionTitleAboveContent title="Digital field study and user interviews" >
                    <p className="project-text">
                        This project took place during the Covid-19 pandemic, which meant we couldn't use methods like on-site observations and in-person testing. Instead we did digital study visits with the sea rescue societies in Norway, Denmark, Germany and Åland. Norway had a similar centre to what SSRS wanted to create. which gave great insight into what had worked well for them.

                        We also interviewed volunteer sea rescuers to see what their needs were and what support they required from the on-call person.
                    </p>
                    <img src={StudyVisit} alt="PausePal sketches photo" className="centered-image" />

                </SectionTitleAboveContent> */}
                <SectionTitleAboveContent title="Final prototype and guidelines" >
                    <p className="project-text">
                        The end result of the thesis project was 10 guidelines for how to present information in a maritime Coordination centre, as well as an interactive, high-fidelity prototype.
                    </p>
                    <div className="image-grid">
                        <img 
                            src={Map1} 
                            alt="Maritime coordination centre map view prototype" 
                            onClick={() => { setPhotoIndex(0); setOpen(true); }}
                            style={{ cursor: 'zoom-in' }}
                        />    
                        <img 
                            src={Maps2} 
                            alt="Maritime coordination centre map interface" 
                            onClick={() => { setPhotoIndex(1); setOpen(true); }}
                            style={{ cursor: 'zoom-in' }}
                        />    
                        <img 
                            src={Loggar1} 
                            alt="Event information display prototype" 
                            onClick={() => { setPhotoIndex(2); setOpen(true); }}
                            style={{ cursor: 'zoom-in' }}
                        />    
                        <img 
                            src={Loggar2} 
                            alt="Event details interface design" 
                            onClick={() => { setPhotoIndex(3); setOpen(true); }}
                            style={{ cursor: 'zoom-in' }}
                        />    
                    </div>

                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={slides}
                        index={photoIndex}
                    />
                </SectionTitleAboveContent>
            </main>
        </div>
    );
};

export default MasterThesis;
