import { concat } from '../../Utility'
import styles from './Home.module.css'

const home = () => {
  return (
    <div className={concat(styles.flex_center, 'page')}>
      <div className={concat(styles.image, 'slideRight')}></div>
      <div className={concat(styles.lead, 'slideLeft')}>
        <p>i am dorian</p>
      </div>
    </div>
  )
}

export default home
