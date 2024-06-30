import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/chatapp.png';
import sun from '../../assets/sun.png';
import minipay from '../../assets/minipay.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/manmindersingh01/chatting-app"
          h3="chit-chat"
          p="Chatting App"
        />
        <ProjectCard
          src={sun}
          link="https://manmindersingh01.github.io/responsive-animated/"
          h3="sun-dawn"
          p="studio website"
        />
        <ProjectCard
          src={minipay}
          link="https://github.com/manmindersingh01/minipaytm"
          h3="minipay"
          p="payment app"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
