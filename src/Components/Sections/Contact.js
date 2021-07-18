import { concat } from '../../Utility'
import './Sections.css'

import styles from './Contact.module.css'

const contact = () => {
  return (
    <div id='contact' className={'page'}>
      <div className={concat(styles.contactWrapper)}>
        <div className={concat(styles.navRow, styles.center)}>
          <a href='https://twitter.com/PharmDTechie' target='_blank'>
            <i className='fab fa-twitter'></i>
          </a>
        </div>
        <div className={concat(styles.navRow, styles.spread)}>
          <a href='https://github.com/buddafucofibas' target='_blank'>
            <i className='fab fa-github-alt'></i>
          </a>
          <a href='https://www.linkedin.com/in/dorian-edwards-503136211/' target='_blank'>
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
        <div className={concat(styles.navRow, styles.center)}>
          <a href='mailto:dorian.m.edwards@gmail.com?subject=When+can+you+start?' target='_blank'>
            <i className='fas fa-envelope-open-text'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default contact
