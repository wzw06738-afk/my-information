import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { profileData } from '../../data/profile'
import styles from './About.module.css'

export function About() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.15 })

  return (
    <section id="about" ref={ref} className={styles.section}>
      <div className={`${styles.fadeUp} ${isVisible ? styles.fadeUpVisible : ''}`}>
        <p className={styles.label}>// 关于我</p>
        <h2 className={styles.title}>About</h2>

        <div className={styles.grid}>
          <p className={styles.bio}>
            <span className={styles.bioAccent}>{profileData.alias}</span>，{profileData.bio}
          </p>

          <div className={styles.card}>
            <p className={styles.cardTitle}>教育背景</p>
            <div className={styles.cardItem}>
              <span className={styles.cardLabel}>学校</span>
              <span className={styles.cardValue}>{profileData.education.school}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.cardLabel}>专业</span>
              <span className={styles.cardValue}>{profileData.education.major}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.cardLabel}>学历</span>
              <span className={styles.cardValue}>本科</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.cardLabel}>时间</span>
              <span className={styles.cardValue}>{profileData.education.period}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
