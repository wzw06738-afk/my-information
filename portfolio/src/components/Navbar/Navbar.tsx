import { useTheme } from '../../context/ThemeContext'
import styles from './Navbar.module.css'

const sections = ['about', 'skills', 'projects', 'contact']

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="#">
        wu<span>tu</span>tu
      </a>

      <ul className={styles.navLinks}>
        {sections.map(s => (
          <li key={s}>
            <button className={styles.navLink} onClick={() => scrollTo(s)}>
              {s === 'about' ? '关于' : s === 'skills' ? '技能' : s === 'projects' ? '项目' : '联系'}
            </button>
          </li>
        ))}
      </ul>

      <button className={styles.themeBtn} onClick={toggleTheme} aria-label="切换主题">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}
