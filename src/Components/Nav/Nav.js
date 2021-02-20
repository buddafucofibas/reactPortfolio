import styles from './Nav.module.css'
import { concat } from '../../Utility'

const Nav = () => {
  return (
    <div className={styles.navWrapper}>
      <ul className={styles.nav}>
        <li className={concat(styles.navLink, 'rando1')}>
          <a href='#home'>home</a>
        </li>
        <li className={concat(styles.navLink, 'rando2')}>
          <a href='#about'>about</a>
        </li>
        <li className={concat(styles.navLink, 'rando3')}>
          <a href='#projects'>projects</a>
        </li>
        <li className={concat(styles.navLink, 'rando4')}>
          <a href='#contact'>contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
