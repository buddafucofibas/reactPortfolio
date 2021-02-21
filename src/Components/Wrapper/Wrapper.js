import React, { Component } from 'react'
import styles from './Wrapper.module.css'
import Home from '../Sections/Home'
import About from '../Sections/About'
import Projects from '../Sections/Projects'
import Contact from '../Sections/Contact'
import Nav from '../Nav/Nav'

class Wrapper extends Component {
  render() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.navDisplayPane}>
          <Nav />
        </div>
        <div className={styles.contentDisplayPane}>
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    )
  }
}

export default Wrapper
