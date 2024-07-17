import styles from './ProjectsStyles.module.css';
import fes from '../../assets/fes.png';
import gym from '../../assets/gym.png';
import rs from '../../assets/rs.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fes}
          link="https://github.com/jericho-padua/bpc-faculty-evaluation-system"
          h3="BPC Faculty Evaluation"
          p="Faculty Evaluation Website"
        />
        <ProjectCard
          src={rs}
          link="https://github.com/jericho-padua/bpc-registration-system"
          h3="BPC Registration System"
          p="School Registration"
        />
        <ProjectCard
          src={gym}
          link="https://github.com/jericho-padua/gym-management-system"
          h3="Gym Management"
          p="Fitness Website"
        />
      </div>
    </section>
  );
}

export default Projects;
