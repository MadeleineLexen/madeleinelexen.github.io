import SEO from "../components/SEO";
import "./styles/ProjectsCommon.css";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionTitleAboveContent from "../components/ProjectPage/SectionTitleAboveContent";
import ProjectTopSection from "../components/ProjectPage/ProjectTopSection";
import Decision1 from "../assets/MasterThesis/DecisionsCard1.png";
import Decision2 from "../assets/MasterThesis/DecisionsCard2.png";
import Decision3 from "../assets/MasterThesis/DecisionsCard3.png";
import HeaderImage from "../assets/MasterThesis/MasterThesisCardWhite.png";
import Loggar from "../assets/MasterThesis/Loggar.png";
import Map1 from "../assets/MasterThesis/Map1.png";
import Maps2 from "../assets/MasterThesis/Maps2.png";
import Loggar1 from "../assets/MasterThesis/Loggar1.png";
import Loggar2 from "../assets/MasterThesis/Loggar2.png";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



const MasterThesisNew = () => {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const slides = [
        { src: Map1 },
        { src: Maps2 },
        { src: Loggar1 },
        { src: Loggar2 }
    ];

    return (
        <>
            <SEO
                title="Master Thesis - Maritime Coordination Centre"
                description="Case study: Designing situational awareness in a maritime coordination centre for the Swedish Sea Rescue Society. Research on information presentation for emergency operators."
                path="/projects/masterthesis"
                type="article"
            />
            <div className="page-transition">
                <main className="project-page-center">
                    <Breadcrumbs />
                    <h1 className="project-main-title">Designing Situational Awareness in a Maritime Coordination Centre</h1>
                    <img src={HeaderImage} alt="Master Thesis" className="page-header-image" />

                    <ProjectTopSection
                        title="Summary"
                        description={[
                            "The Swedish Sea Rescue Society (SSRS) was exploring the creation of a dedicated coordination centre to support volunteer rescue crews operating across Sweden's coastline.",
                            "At the time, operational support was handled by a small group of rotating on-call coordinators working alongside their regular responsibilities. As the organisation grew, so did the complexity of coordinating missions, resources, weather conditions, and communication across multiple stakeholders. SSRS needed to understand what a future coordination centre should look like and how information should be presented to support operators effectively.",
                            "As part of my Master's thesis, I investigated how information should be structured and visualized to support maritime coordination work. The project combined research into existing rescue operations with the design and evaluation of a future coordination-centre concept."
                        ]}
                        info={{
                            client: "Swedish Sea Rescue Society, Chalmers University",
                            role: "Researcher & Designer",
                            team: "Research partner Sara Kitzing",
                            timeline: "Jan 2021 – Jun 2021"
                        }}
                    />
                    <div className="centered-image">
                        <img src={Loggar} alt="PausePal sketches photo" />

                    </div>
                    <SectionTitleAboveContent title="Context">
                        <p>Unlike emergency rescue centres such as Sweden's Joint Rescue Coordination Centre (JRCC), SSRS does not lead rescue operations. Instead, they support volunteer crews operating in the field, coordinate internal resources, and provide decision support when situations become complex.</p>
                        <p>This creates a unique operational challenge. Operators need to maintain awareness of ongoing missions, available resources, weather conditions, incoming incidents, and communication across multiple organisations. A routine assistance mission can quickly escalate into a critical situation if conditions change or additional support becomes necessary.</p>
                        <p>The work is highly dynamic. Priorities shift throughout the day, multiple missions may run simultaneously, and information arrives from many different sources. Success depends less on accessing information and more on understanding the current situation well enough to act when needed.</p>
                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="The Challenge">
                        <p>The challenge was not determining what information operators needed. Most of that information already existed. The real challenge was helping operators maintain a reliable mental model of a constantly changing operational landscape.</p>
                        <p>Information was spread across different systems, communication channels, and stakeholders. Operators frequently switched between monitoring ongoing activity, supporting individual missions, and coordinating resources. Missing a critical update could have operational consequences, while displaying too much information risked overwhelming the user. The solution needed to support both broad situational awareness and focused operational work without sacrificing either.</p>
                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="Insights">
                        <div className="subsection">
                            <h3>Operators think in relationships rather than individual pieces of information</h3>
                            <p>When discussing missions, operators rarely referred to information in isolation. Instead, they described relationships between incidents, boats, crews, weather conditions, and geographic locations. Understanding how these elements connected was often more important than the underlying data itself. This suggested that the interface should focus on exposing relationships rather than simply displaying information.</p>
                        </div>

                        <div className="subsection">
                            <h3>Awareness depends on noticing change</h3>
                            <p>Operators spent much of their time monitoring rather than actively interacting with systems.The challenge was noticing when something important had changed.A new incident, a status update, a moving resource, or changing weather conditions could all require attention. Designing for change detection became as important as designing for information access.</p>
                        </div>

                        <div className="subsection">
                            <h3>Context switching is a fundamental part of the job</h3>
                            <p>Operators continuously moved between different levels of detail. One moment they needed an overview of all ongoing activity. The next they needed detailed information about a specific mission or resource. Supporting these transitions efficiently was critical to maintaining awareness and reducing cognitive effort.</p>
                        </div>

                        <div className="subsection">
                            <h3>Multiple screens create unique usability challenges</h3>
                            <p>Coordination-centre work naturally spreads information across several displays. While this provides more space for information, it also introduces a new problem: important changes can occur outside the user's immediate focus.The challenge was not fitting more information on screen, but helping users maintain awareness across screens and views.</p>
                        </div>
                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="Design Decisions">
                        <div className="decision-cards-container">
                            <img src={Decision1} alt="Design decision card: Preserving user control over automated recommendations" />
                            <img src={Decision2} alt="Design decision card: Supporting user judgement with historical comparisons" />
                            <img src={Decision3} alt="Design decision card: Designing for oversight and system transparency" />
                        </div>
                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="Key Tradeoffs">
                        <div className="tradeoff-card">
                            <h3>Overview vs Detail</h3>
                            <p>Operators required both a high-level operational overview and mission-specific information. Prioritising overview made the system easier to monitor but required users to drill down for detail when needed. This tradeoff was acceptable because maintaining situational awareness was the primary responsibility of the role.</p>
                        </div>

                        <div className="tradeoff-card">
                            <h3>Visibility vs Information Overload</h3>
                            <p>Research consistently uncovered additional information that operators found useful. However, displaying all available information simultaneously would have reduced clarity and made monitoring more difficult. The solution was to provide rich information while allowing operators to control visibility through layers, filtering, and contextual details.</p>
                        </div>

                        <div className="tradeoff-card">
                            <h3>Flexibility vs Consistency</h3>
                            <p>Different operators preferred different ways of working. While customization supported individual workflows, excessive flexibility risked reducing shared understanding across the coordination team. The final concept balanced configurable views with a consistent overall structure.</p>
                        </div>
                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="Outcomes">
                        <p>The project resulted in a high-fidelity prototype for a future maritime coordination centre and a set of design principles for supporting operational coordination work.</p>
                        <p>The concept was positively received during evaluation and successfully supported the key scenarios explored throughout the project. Participants were generally able to navigate between missions, resources, and operational information without major issues.</p>
                        <p>More importantly, the work helped articulate a broader set of principles for designing operational systems, including:</p>
                        <ul className="centered-list">
                            <li>Supporting situational awareness before task completion</li>
                            <li>Making changes visible</li>
                            <li>Connecting related information across views</li>
                            <li>Designing for multi-monitor environments</li>
                            <li>Maintaining a clear operational overview</li>
                        </ul>
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

                    <div className="section-with-background">
                        <SectionTitleAboveContent title="Reflection">
                            <p>The biggest lesson from this project was that information itself is rarely the problem.</p>
                            <p>Most operational environments already contain vast amounts of data. The challenge is helping people understand what matters right now.</p>
                            <p>What surprised me most was how often participants discussed relationships rather than individual pieces of information. They thought about incidents in terms of connected resources, locations, weather conditions, and dependencies. This fundamentally changed how I approached the design.</p>
                            <p>The project also introduced me to the challenges of designing for operational awareness rather than task execution. In many systems, success is measured by how efficiently users complete actions. In coordination work, success often depends on maintaining an accurate understanding of a changing situation.</p>
                            <p>That lesson has continued to influence my work on complex operational products, where clarity, context, and awareness are often more valuable than adding more functionality.</p>
                        </SectionTitleAboveContent>
                    </div>

                </main>
            </div>
        </>
    );
};

export default MasterThesisNew;
