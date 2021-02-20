import { concat } from '../../Utility'
import styles from './About.module.css'

const about = () => {
  return (
    <div id='about' className={concat(styles.flex_center, 'page')}>
      <div className={styles.image}></div>
      <div className={styles.lead}>
        <p>
          i am a pharmacist by trade and a coder by heart. i'm driven, passionate, dedicated and
          most importantly, a life-long learner. coding started as a hobby, a leftover from an
          earlier foray into tech, and has been a endeavor that has come to fill every second of my
          free time.
        </p>
      </div>
    </div>
  )
}

export default about
