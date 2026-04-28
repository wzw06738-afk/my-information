import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { profileData } from '../../data/profile'
import { SkillCard } from './SkillCard'
import styles from './Skills.module.css'

export function Skills() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.08 })

  return (
    <section id="skills" ref={ref} className={styles.section}>
      <p className={styles.label}>// 技能栈</p>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.grid}>
        {profileData.skills.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
