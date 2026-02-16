import "./styles/PausePal.css";
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
import sketchesPhoto from "../assets/PausePal/PausePalLowFiSketch.png"


const PausePal = () => {
  return (
    <div>
      <main className="project-page-center">
        <Breadcrumbs />
        <h1 className="project-main-title">PausePal</h1>

        <img src={Hero} alt="PausePal" className="page-header-image" />


        <ProjectTopSection
          title="PausePal"
          description={[
            "After learning from the Swedish Cancer Society that prolonged sitting increases the risk of cancer, diabetes, and cardiovascular disease, I tried to build healthier habits myself. I knew short breaks were good for my focus and wellbeing, but i kept forgetting to take them.",
            " This became the spark for my project: a Chrome extension that reminds users to pause and breathe, or do some quick stretches or desk exercises to make breaks more meaningful."
          ]}
          info={{
            client: "Personal Project",
            role: "UX, UI",
            team: "Individual Contribution",
            timeline: "3 months summer 2025"
          }}
        />

        <p className="goal-statement">Goal - Design a simple tool that reminds users to take short active breaks and guides them through quick exercises, reducing the health risks of prolonged sitting.</p>

        <SectionTextLeftContentRight
          title="Solution"
          left={<p>PausePal runs quietly in the background while you work. At set intervals, it gently reminds you to take a short break. When a reminder appears, you can start a guided breathing exercise or do some quick stretches or desk exercises that only take a minute or two to complete.
            The exercises are designed to be simple and accessible, making it easy to move without leaving your workspace. Once the break is done, you can seamlessly return to your work, and stay active without breaking your flow.</p>}
          right={<img src={timer} alt="PausePal screenshot" />}
        />
        <SectionTitleAboveContent title="Process">
          <p>
            I started by benchmarking similar products to understand what was already out there and where we could do better. Here I identified that altough similar tools exist, they didn't offer alternative activities, where you can chose what suits you in the moment. I decided to combine movement excercises and mindfullness excercises like guided box breathing. I also identified that customisability of interval and schedule was a positive feature, that should be incorporated in my solution.
          </p>
          <div className="centered-image">
            <img src={sketchesPhoto} alt="PausePal sketches photo" />

          </div>
          <p>From there, I sketched wireframes and turned them into low fidelity prototypes to quickly test some layouts and flows which i used to get some early user feedback. With this I created wireframes in Figma and a clickable prototype which i used in some further user testing to see what worked, what didn't, and how to refine the experience. After these test I updated the wireframes based on the feedback i recieved.</p>
          <div className="image-grid">
            <img src={timerOld} alt="PausePal screenshot version 1 timer" />
            <img src={breatheOld} alt="PausePal screenshot version 1 breathe" />
            <img src={timer} alt="PausePal screenshot version 2 timer" />
            <img src={breathe} alt="PausePal screenshot version 2 breathe" />
          </div>
          <p>
            The images above show how the app developed over time. The first version was my initial concept, where I focused on structure and functionality. Feedback from the second user tests showed that the app felt a bit "square" in it's design, and not so cosy. Changing the color palette and some of the animations made the app feel more calming.
          </p>
        </SectionTitleAboveContent>

      </main>
    </div>
  );
};

export default PausePal;