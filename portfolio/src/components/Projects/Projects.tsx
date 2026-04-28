import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { profileData } from '../../data/profile'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

export function Projects() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.08 })

  return (
    <section id="projects" ref={ref} className={styles.section}>
      <p className={styles.label}>// 项目经验</p>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.list}>
        {profileData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
