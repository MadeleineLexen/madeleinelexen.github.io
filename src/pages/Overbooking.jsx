import SEO from "../components/SEO";
import "./styles/Overbooking.css";
import './styles/ProjectsCommon.css';
import Breadcrumbs from "../components/Breadcrumbs";
import SectionTitleAboveContent from "../components/ProjectPage/SectionTitleAboveContent";
import SectionTextLeftContentRight from "../components/ProjectPage/SectionTextLeftContentRight";
import ProjectTopSection from "../components/ProjectPage/ProjectTopSection";
import Mental_Models_Graphic from "../assets/Overbooking/Mental_Model_Graphic.png"
import Decision1 from "../assets/Overbooking/DecisionsCard1.png"
import Decision2 from "../assets/Overbooking/DecisionsCard2.png"
import Decision3 from "../assets/Overbooking/DecisionsCard3.png"


const Overbooking = () => {
    return (
        <>
            <SEO
                title="Automatic Overbooking Model"
                description="Case study: Making automated optimization understandable, monitorable, and trustworthy. Designing oversight and decision support for a complex revenue management system."
                path="/projects/automatic-overbooking"
                type="article"
            />
            <div className="page-transition">
                <main className="project-page-center">
                    <Breadcrumbs />
                    <h1 className="project-main-title">Designing trust in automated overbooking decisions</h1>


                    <p className="goal-statement">A recommendation can be mathematically correct and still feel too risky to trust.</p>



                    <ProjectTopSection
                        title="Summary"
                        description={[
                            "I helped design an automated overbooking capability for a revenue management platform used by freight optimizers.\n\nThe goal was to move away from static overbooking limits and allow the system to continuously adjust recommendations based on changing booking conditions. While the optimization model itself was developed by data scientists, a significant part of the design challenge was helping experienced users understand, monitor, and feel comfortable relying on automated decisions that could directly affect revenue and operations."]}
                        info={{
                            client: "Stena Line",
                            role: "UX Designer",
                            team: "7-person cross-functional team",
                            timeline: "2022–2023"
                        }}
                    />

                    <p className="goal-statement">Goal - Help revenue optimizers confidently oversee automated overbooking decisions while balancing revenue opportunities against operational risk.</p>

                    <SectionTitleAboveContent title="Context">
                        <p>
                            Freight optimizers are responsible for balancing two competing risks: Leaving capacity unsold (lost revenue) and accepting more bookings than can be accommodated (short shipment). Before automation, users managed overbooking manually by setting static limits on each departure. This required constant monitoring and made it difficult to react to booking changes during evenings, weekends, and holidays. The new model automatically recalculated overbooking recommendations whenever booking conditions changed.
                        </p>
                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="The challenge">
                        <p>The model could react faster and more consistently than any human operator. Adoption, however, proved to be a human problem rather than a technical one.</p>
                        <p>Although the model was performing as intended, many users were uncomfortable relying on its recommendations.</p>
                        <p>What I found particularly interesting was that users rarely challenged the mathematics itself. Instead, they questioned whether they could trust the recommendation enough to be responsible for the outcome.</p>
                        <p>This showed up in behaviour:</p>
                        <ul className="centered-list">
                            <li>Some users turned automation off before weekends and holidays.</li>
                            <li>Some regions continued handling departures manually.</li>
                            <li>Users requested manual limits that automation could not exceed.</li>
                            <li>Most users started with safer departures before gradually expanding usage.</li>
                        </ul>
                        <p>These behaviours revealed something important: trust was contextual.</p>
                        <p>Users were not only evaluating whether the model was correct. They were evaluating whether they felt comfortable letting it act when they were no longer actively monitoring the situation.</p>
                    </SectionTitleAboveContent>
                    <SectionTitleAboveContent title=" Different mental models">

                        <img src={Mental_Models_Graphic} alt="Graphic illustrating different mental models of the model and users" className="centered-image-small" />

                        <p className="highlight-text">The model reasoned about expected future outcomes, probabilities, and cost optimisation.</p>
                        <p className="highlight-text">Users focused on current bookings, operational consequences, and the risk of being wrong.</p>
                        <p>This meant that recommendations could be mathematically sound while still appearing unreasonable. One user might see an acceptable probability of short shipment. Another might see a difficult conversation with a customer. Understanding that difference became central to the design work.</p>
                    </SectionTitleAboveContent>
                    <SectionTitleAboveContent title="Design decisions">
                        <div className="decision-cards-container">
                            <img src={Decision1} alt="Design decision card: Preserving user control over automated recommendations" />
                            <img src={Decision2} alt="Design decision card: Supporting user judgement with historical comparisons" />
                            <img src={Decision3} alt="Design decision card: Designing for oversight and system transparency" />
                        </div>


                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="Outcomes">
                        <p>The feature became one of the platform's core automation capabilities and was rolled out across freight regions.</p>
                        <p>Adoption was gradual, reflecting the operational importance of the decisions involved. Over time, users became increasingly comfortable relying on automated recommendations while still retaining the ability to intervene when needed.</p>
                        <p>While some regions embraced the model quickly, others continued managing departures manually, highlighting how adoption varied depending on local conditions and confidence in the system.</p>
                        </SectionTitleAboveContent>

                    <div className="section-with-background">
                        <SectionTitleAboveContent title="Reflections">
                            <p className="highlight-text">A recommendation can be mathematically correct and still feel unsafe</p>
                            <p>Although the model's recommendations were mathematically sound, they did not always align with how users perceived risk. A recommendation could be technically correct while still appearing unsafe.</p>
                            <p>The overbooking model has generally performed well in production, but adoption was never automatic. Some regions embraced it quickly, while others continued managing departures manually. Seeing those differences first-hand reinforced that successful automation depends as much on trust and local context as it does on technical performance.</p>
                            <p>Looking back, I would explore ways of communicating recommendations that better match how users think about risk, rather than exposing the full calculated value from the outset. This idea was discussed but never prioritised, which reflects a common reality in enterprise products: once a feature is delivering value, improvements to transparency and usability often compete with new revenue-generating initiatives.</p>
                            <p>The experience strengthened my interest in designing systems where people need to understand, supervise, and trust automated decisions rather than simply receive them. It also reinforced that introducing automation is often as much a human challenge as a technical one.</p>
                        </SectionTitleAboveContent>
                    </div>



                </main>
            </div>
        </>
    );
};

export default Overbooking;