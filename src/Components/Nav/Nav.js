import styles from './Nav.module.css'
import { concat } from '../../Utility'
import React, { Component } from 'react'

class Nav extends Component {
  handleNav = event => {
    event.preventDefault()
    let destination = event.target.id
    let page = document.querySelector(destination)
    page.scrollIntoView({ behavior: 'smooth' })
    let links = document.querySelectorAll('li')
    for (let link of links) {
      link.classList.remove('active')
    }
    event.target.parentNode.classList.add('active')
  }

  render() {
    return (
      <div className={styles.navWrapper}>
        <ul className={styles.nav}>
          <li className={concat(styles.navLink, 'active', 'rando1')}>
            <a id='#home' onClick={this.handleNav}>
              home
            </a>
          </li>
          <li className={concat(styles.navLink, 'rando2')}>
            <a id='#about' onClick={this.handleNav}>
              about
            </a>
          </li>
          <li className={concat(styles.navLink, 'rando3')}>
            <a id='#projects' onClick={this.handleNav}>
              projects
            </a>
          </li>
          <li className={concat(styles.navLink, 'rando4')}>
            <a id='#contact' onClick={this.handleNav}>
              contact
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
