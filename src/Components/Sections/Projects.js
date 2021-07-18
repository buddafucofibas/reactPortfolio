import { concat } from '../../Utility'
import React, { Component } from 'react'
import styles from './Projects.module.css'
import devDiaries from '../../Assets/Images/devDiaries.png'
import portfolio from '../../Assets/Images/portfolio.png'
import weatherApp from '../../Assets/Images/weatherapp.png'
import tandemTrivia from '../../Assets/Images/tandemTrivia.png'
import blog from '../../Assets/Images/blog.png'
import RADocs from '../../Assets/Images/RADocs.png'

class Projects extends Component {
  state = {
    data: [
      {
        image: blog,
        title: 'NextJS Blog',
        link: 'https://pharmdtechie.net/',
      },
      {
        image: devDiaries,
        title: 'DevDiaries',
        link: 'https://devdiaries.herokuapp.com/',
      },
      {
        image: portfolio,
        title: 'Portfolio 1.0',
        link: 'https://buddafucofibas.github.io/portfolio1.0/',
      },
      {
        image: weatherApp,
        title: 'Weather App',
        link: 'https://buddafucofibas.github.io/weatherapp/',
      },
      {
        image: RADocs,
        title: 'Open Source Notes',
        link: 'https://buddafucofibas.github.io/RA_OpenSource/',
      },
    ],
    view: 0,
  }

  handleNext = () => {
    let max = this.state.data.length - 1
    let cur = this.state.view

    if (cur === max) {
      this.setState({ view: 0 })
    } else {
      this.setState(prevState => {
        return { view: prevState.view + 1 }
      })
    }
  }

  handlePrev = () => {
    let max = this.state.data.length - 1
    let cur = this.state.view

    if (cur === 0) {
      this.setState({ view: max })
    } else {
      this.setState(prevState => {
        return { view: prevState.view - 1 }
      })
    }
  }

  render() {
    return (
      <div id='projects' className={concat(styles.flex_center, 'page')}>
        <div className={styles.displayPane}>
          <button className={concat(styles.navButton, styles.right)} onClick={this.handleNext}>
            <i className='fas fa-arrow-right'></i>
          </button>
          <button className={concat(styles.navButton, styles.left)} onClick={this.handlePrev}>
            <i className='fas fa-arrow-left'></i>
          </button>
          <a href={this.state.data[this.state.view].link} target='_blank'>
            <div className={styles.displayImage}>
              <img src={this.state.data[this.state.view].image} alt='' />
            </div>
          </a>
        </div>
        <div className={styles.displayCaption}>
          <a href={this.state.data[this.state.view].link} target='_blank'>
            {this.state.data[this.state.view].title}
          </a>
        </div>
      </div>
    )
  }
}

export default Projects
