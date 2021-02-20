import { concat } from '../../Utility'
import styles from './Home.module.css'
import './Sections.css'

const home = () => {
  return (
    <div id='home' className={concat(styles.flex_center, 'page')}>
      <div className={concat(styles.image, 'slideRight')}></div>
      <div className={concat(styles.lead, 'slideLeft')}>
        <p>
          my name is <span className={concat(styles.name, 'colorChange')}>dorian</span>
        </p>
      </div>
    </div>
  )
}

export default home
