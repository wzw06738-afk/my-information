import { useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { profileData } from '../../data/profile'
import styles from './Contact.module.css'

const contacts = [
  { label: '邮箱', value: profileData.email, icon: '✉' },
  { label: '电话', value: profileData.phone, icon: '📞' },
  { label: 'GitHub', value: profileData.github, icon: '🐙' },
]

export function Contact() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.2 })
  const [toast, setToast] = useState('')

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setToast(`${label} 已复制`)
      setTimeout(() => setToast(''), 2000)
    } catch {
      setToast('复制失败')
      setTimeout(() => setToast(''), 2000)
    }
  }

  return (
    <section id="contact" ref={ref} className={styles.section}>
      <p className={styles.label}>// 联系方式</p>
      <h2 className={styles.title}>Contact</h2>

      <div
        className={styles.grid}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        {contacts.map(c => (
          <div key={c.label} className={styles.card} onClick={() => copy(c.value, c.label)}>
            <div className={styles.cardIcon}>{c.icon}</div>
            <div className={styles.cardInfo}>
              <div className={styles.cardLabel}>{c.label}</div>
              <div className={styles.cardValue}>{c.value}</div>
            </div>
            <span className={styles.copyHint}>点击复制</span>
          </div>
        ))}
      </div>

      {toast && <div className={styles.toast}>{toast}</div>}
    </section>
  )
}
