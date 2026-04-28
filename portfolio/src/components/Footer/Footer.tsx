import styles from './Footer.module.css'

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <span>© 2026 吴卫哲</span>
        <span>用心做的每一件事</span>
      </footer>
      <div className={styles.watermark}>wututu</div>
    </>
  )
}
