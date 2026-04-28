import { useTypewriter } from '../../hooks/useTypewriter'
import { profileData } from '../../data/profile'
import styles from './Hero.module.css'

const titles = ['全栈开发者', 'AI Agent 探索者', '开源爱好者']

export function Hero() {
  const { displayText, isComplete } = useTypewriter({
    text: titles.join(' · '),
    speed: 80,
    delay: 600,
  })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>你好，我是</p>
      <h1 className={styles.name}>
        {profileData.name}
        <span className={styles.nameAccent}> / {profileData.alias}</span>
      </h1>
      <p className={styles.title}>
        {displayText}
        {!isComplete && <span className={styles.cursor} />}
      </p>

      <div className={styles.cta}>
        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => scrollTo('projects')}>
          查看项目
        </button>
        <button className={`${styles.btn} ${styles.btnOutline}`} onClick={() => scrollTo('contact')}>
          联系我
        </button>
      </div>

      <div className={styles.scrollHint}>↓ 向下滚动</div>
    </section>
  )
}
