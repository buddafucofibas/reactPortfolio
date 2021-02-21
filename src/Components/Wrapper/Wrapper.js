import React, { Component } from 'react'
import styles from './Wrapper.module.css'
import Home from '../Sections/Home'
import About from '../Sections/About'
import Projects from '../Sections/Projects'
import Contact from '../Sections/Contact'
import Nav from '../Nav/Nav'
import '../../Containers/App.css'

class Wrapper extends Component {
  state = {
    pages: null,
    display: null,
  }

  // Checks if a component is in view
  isInView = element => {
    const position = element.getBoundingClientRect()
    const screenWidth = window.innerWidth || document.documentElement.clientWidth
    const screenHeight = window.innerHeight || document.documentElement.clientHeight

    return (
      position.left >= 0 &&
      position.top >= 0 &&
      position.right <= screenWidth &&
      position.bottom <= screenHeight
    )
  }

  //returns the component
  currentDisplay = () => {
    let current
    for (let page of this.state.pages) {
      if (this.isInView(page)) {
        current = document.getElementById('#' + page.id).parentElement
      }
    }
    return current
  }

  // Grab the pages when the component mounts
  componentDidMount = () => {
    console.log(`[Wrapper Component] did mount...`)
    this.setState({
      pages: document.querySelectorAll('.page'),
      display: document.querySelector('#displayPane'),
      links: document.querySelectorAll('li'),
    })
  }

  componentDidUpdate = () => {
    console.log(`[Wrapper Component] did update`)
    let isScrolling

    this.state.display.addEventListener('scroll', () => {
      clearTimeout(isScrolling)
      isScrolling = setTimeout(() => {
        let element = this.currentDisplay()
        for (let link of this.state.links) {
          link.classList.remove('active')
        }
        console.log(this.state.links)
        element.classList.add('active')
      }, 300)
    })
  }

  render() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.navDisplayPane}>
          <Nav />
        </div>
        <div id='displayPane' className={styles.contentDisplayPane}>
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
