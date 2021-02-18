import { concat } from '../../Utility'
import React, { Component } from 'react'
import styles from './Projects.module.css'
import bookFinder from '../../Assets/Images/bookfinder.png'
import devDiaries from '../../Assets/Images/devDiaries.png'
import portfolio from '../../Assets/Images/portfolio.png'
import weatherApp from '../../Assets/Images/weatherapp.png'
import tandemTrivia from '../../Assets/Images/tandemTrivia.png'

class Projects extends Component {
  state = {
    data: [
      {
        image: bookFinder,
        title: 'Book Finder',
        link: 'https://github.com/buddafucofibas/bookfinder',
      },
      {
        image: devDiaries,
        title: 'DevDiaries',
        link: 'https://github.com/buddafucofibas/devDiaries',
      },
      {
        image: portfolio,
        title: 'Portfolio 1.0',
        link: 'https://github.com/buddafucofibas/portfolio1.0',
      },
      {
        image: weatherApp,
        title: 'Weather App',
        link: 'https://github.com/buddafucofibas/weatherapp',
      },
      {
        image: tandemTrivia,
        title: 'Tandem Trivia',
        link: 'https://github.com/buddafucofibas/triviaJS',
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
      <div className={concat(styles.flex_center, 'page')}>
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
