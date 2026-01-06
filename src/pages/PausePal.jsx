import "./styles/PausePal.css";
import './styles/ProjectsCommon.css';
import Breadcrumbs from "../components/Breadcrumbs";
import SectionTitleAboveContent from "../components/ProjectPage/SectionTitleAboveContent";
import SectionTextLeftContentRight from "../components/ProjectPage/SectionTextLeftContentRight";
import ProjectTopSection from "../components/ProjectPage/ProjectTopSection";
import timer from "../assets/PausePal/Timer-view.png"
import breathe from "../assets/PausePal/Breathing 2.png"
import timerOld from "../assets/PausePal/Timer-view-old.png"
import breatheOld from "../assets/PausePal/Breathe-old.png"
import Hero from "../assets/PausePal/PausePal-Hero.png"


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
            "After learning from the Swedish Cancer Society that prolonged sitting increases the risk of cancer, diabetes, and cardiovascular disease, I tried to build healthier habits myself. I knew short breaks were good for my focus and wellbeing—but like many remote workers, I often forgot to take them.",
            " This became the spark for my project: a Chrome extension that reminds users to pause and suggests quick stretches or desk exercises to make breaks more meaningful."
          ]}
          info={{
            client: "Personal Project",
            role: "UX, Visual, Motion Design",
            team: "Individual Contribution",
            timeline: "4 weeks in spring 2019"
          }}
        />

        <h3 className="goal-heading">Goal - Design a simple tool that reminds users to take short active breaks and guides them through quick exercises, reducing the health risks of prolonged sitting.</h3>
        
        <SectionTextLeftContentRight
          title="Solution"
          left={<p>PausePal runs quietly in the background while you work. At set intervals, it gently reminds you to take a short break. When a reminder appears, you can start a guided stretch or desk exercise that only takes a minute or two to complete.
            The exercises are designed to be simple and accessible, making it easy to move without leaving your workspace. Once the break is done, PausePal seamlessly returns you to your work—helping you stay active without breaking your flow.</p>}
          right={<img src={timer} alt="PausePal screenshot" />}
        />
        <SectionTitleAboveContent title="Process">
          <p>
            I started by benchmarking similar products to understand what was already out there and where we could do better. From there, I sketched wireframes and turned them into prototypes to quickly test ideas. I also created illustrations to bring personality into the design. Finally, I ran user testing sessions, which gave me direct insights into what worked, what didn't, and how to refine the experience.
          </p>
          <div className="image-grid">
            <img src={timerOld} alt="PausePal screenshot version 1 timer" />
            <img src={breatheOld} alt="PausePal screenshot version 1 breathe" />
            <img src={timer} alt="PausePal screenshot version 2 timer" />
            <img src={breathe} alt="PausePal screenshot version 2 breathe" />
          </div>
          <p>
            The images above show how the app developed over time. The first version was my initial concept, where I focused on structure and functionality. After running user tests, I gathered valuable feedback about how the app felt to use, not just how it worked. One of the biggest takeaways was the impact of the colorway — something that seemed minor at first, but completely changed the mood and made the app feel more approachable. The improved version reflects those insights, turning early ideas into a design that resonated more strongly with users.
          </p>
        </SectionTitleAboveContent>

      </main>
    </div>
  );
};

export default PausePal;