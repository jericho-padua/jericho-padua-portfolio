import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/bpc.ico';
import freshBurger from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/jericho-padua/evals/tree/master"
          h3="BPC Faculty Evaluation System"
          p="Faculty Evaluation Website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/jericho-padua/gym-management-system"
          h3="Gym Management System"
          p="Fitness Website"
        />
      </div>
    </section>
  );
}

export default Projects;
