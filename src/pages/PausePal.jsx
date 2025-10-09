import "./styles/PausePal.css";
import './styles/ProjectsCommon.css';
import Breadcrumbs from "../components/Breadcrumbs";
import SectionTitleAboveContent from "../components/ProjectPage/SectionTitleAboveContent";
import SectionTextLeftContentRight from "../components/ProjectPage/SectionTextLeftContentRight";
import ProjectTopSection from "../components/ProjectPage/ProjectTopSection";


const PausePal = () => {
    return (
        <div>
            <Breadcrumbs />
            <main className="project-page-center">
                <ProjectTopSection
                  title="PausePal"
                  description={[
                    "After learning from the Swedish Cancer Society that prolonged sitting increases the risk of cancer, diabetes, and cardiovascular disease, I tried to build healthier habits myself. I knew short breaks were good for my focus and wellbeing—but like many remote workers, I often forgot to take them.",
                    "This became the spark for my project: a Chrome extension that reminds users to pause and suggests quick stretches or desk exercises to make breaks more meaningful."
                  ]}
                  info={{
                    client: "Personal Project",
                    role: "UX, Visual, Motion Design",
                    team: "Individual Contribution",
                    timeline: "4 weeks in spring 2019"
                  }}
                />

                <SectionTitleAboveContent title="What is PausePal?">
                  <p>PausePal is a Chrome extension for healthier workdays...</p>
                </SectionTitleAboveContent>


                <SectionTextLeftContentRight
                  left={<p>Why use PausePal?</p>}
                  right={<img src="..." alt="PausePal screenshot" />}
                />
            </main>
        </div>
    );
};

export default PausePal;