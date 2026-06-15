import SEO from "../components/SEO";
import "./styles/Overbooking.css";
import './styles/ProjectsCommon.css';
import Breadcrumbs from "../components/Breadcrumbs";
import SectionTitleAboveContent from "../components/ProjectPage/SectionTitleAboveContent";
import SectionTextLeftContentRight from "../components/ProjectPage/SectionTextLeftContentRight";
import ProjectTopSection from "../components/ProjectPage/ProjectTopSection";
import timer from "../assets/PausePal/Timer-view.png"
import breathe from "../assets/PausePal/Breathing 2.png"
import timerOld from "../assets/PausePal/Timer-view-old.png"
import breatheOld from "../assets/PausePal/breathe-old.png"
import Hero from "../assets/PausePal/PausePal-Hero.png"
import HeroMobile from "../assets/PausePal/PausePal-cover-image-mobile.png"
import ResponsiveHeroImage from "../components/ResponsiveHeroImage";
import sketchesPhoto from "../assets/PausePal/PausePalLowFiSketch.png"


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
                        <ul>
                            <li>Some users turned automation off before weekends and holidays.</li>
                            <li>Some regions continued handling departures manually.</li>
                            <li>Users requested manual limits that automation could not exceed.</li>
                            <li>Most users started with safer departures before gradually expanding usage.</li>
                        </ul>
                        <p>These behaviours revealed something important: trust was contextual.</p>
                        <p>Users were not only evaluating whether the model was correct. They were evaluating whether they felt comfortable letting it act when they were no longer actively monitoring the situation.</p>
                    </SectionTitleAboveContent>
                    <SectionTitleAboveContent title=" Different mental models">

                        <p>As we worked with users, another pattern emerged. The model and the users were often looking at the same departure through different lenses:</p>
                        <p className="highlight-text">The model reasoned about expected future outcomes, probabilities, and cost optimisation.</p>
                        <p className="highlight-text">Users focused on current bookings, operational consequences, and the risk of being wrong.</p>
                        <p>This meant that recommendations could be mathematically sound while still appearing unreasonable.One user might see an acceptable probability of short shipment. Another might see a difficult conversation with a customer. Understanding that difference became central to the design work.</p>
                    </SectionTitleAboveContent>
                    <SectionTitleAboveContent title="Design decisions">
                        <div className="subsection">
                            <h3>Preserving user control</h3>
                            <p>Rather than forcing a fully automated workflow, we allowed users to influence recommendations, switch departures back to manual handling, and gradually adopt automation at their own pace.</p>
                            <p> This lowered the barrier to adoption and gave users a way to intervene when they believed local knowledge or unusual circumstances were not reflected in the model.
                            </p>
                            <p>Looking back, the ability to intervene was valuable not only because users occasionally needed it, but because it made automation feel safer to adopt in the first place.</p>
                        </div>

                        <div className="subsection">
                            <h3>Supporting judgement</h3>
                            <p>Instead of focusing on explaining every detail of the model, I focused on helping users answer a simpler question:</p>
                            <p className="highlight-text">Does this recommendation seem reasonable?</p>
                            <p>I introduced historical comparisons, trend visualizations, and cost-impact views that allowed users to compare current recommendations with previous departures and understand the consequences of adjusting the model.</p>
                        </div>

                        <div className="subsection">
                            <h3>Designing for oversight</h3>
                            <p>User feedback consistently pointed towards the same concern: what happens when nobody is watching? Several users disabled automation before weekends and holidays because they were uncomfortable with recommendations changing while nobody was actively monitoring the system. This revealed that trust depended on more than recommendation quality. Users also needed confidence in the surrounding system.</p>
                            <p>Users wanted to know:</p>
                            <ul>
                                <li>Is automation active?</li>
                                <li>Has the recommendation updated?</li>
                                <li>What happens if the service stops running?</li>
                            </ul>
                            <p>To address this, we improved visibility around automation status and implemented safeguards that reduced risk if the automation service stopped updating.</p>
                        </div>

                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="Outcomes">
                        <p>The feature became one of the platform's core automation capabilities and was rolled out across freight regions.</p>
                        <p>Adoption was gradual, reflecting the operational importance of the decisions involved. Over time, users became increasingly comfortable relying on automated recommendations while still retaining the ability to intervene when needed.</p>
                        <p>The project reinforced an important lesson for me: trust in automation is rarely created by the algorithm alone. Users need enough visibility, context, and control to feel confident acting on recommendations they did not generate themselves.</p>
                    </SectionTitleAboveContent>

                    <SectionTitleAboveContent title="Reflections">
                        <p>One of the most interesting lessons came after launch.</p>
                        <p>Although the model's recommendations were mathematically sound, they did not always align with how users perceived risk. A recommendation could be technically correct while still appearing unsafe.</p>
                        <p>Looking back, I would explore ways of communicating recommendations that better match how users think about risk, rather than exposing the full calculated value from the outset. This idea was discussed but never prioritised, which reflects a common reality in enterprise products: once a feature is delivering value, improvements to transparency and usability often compete with new revenue-generating initiatives.</p>
                        <p>The experience strengthened my interest in designing systems where people need to understand, supervise, and trust automated decisions rather than simply receive them.</p>
                    </SectionTitleAboveContent>



                </main>
            </div>
        </>
    );
};

export default Overbooking;