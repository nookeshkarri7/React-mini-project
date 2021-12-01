import './index.css'
import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

import AboutFaqItem from '../AboutFaqItem'

class About extends Component {
  state = {covidAboutData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const options = {method: 'GET'}
    let response = await fetch('https://apis.ccbp.in/covid19-faqs', options)
    response = await response.json()
    this.setState(prev => ({
      covidAboutData: response.faq,
      isLoading: !prev.isLoading,
    }))
    console.log(response.faq)
  }

  render() {
    const {covidAboutData, isLoading} = this.state

    return (
      <>
        <div className="home-bg-container about-page-main">
          {isLoading && (
            <div testid="aboutRouteLoader" className="home-loader">
              <Loader type="Oval" color="#007BFF" height={32} width={32} />
            </div>
          )}
          {!isLoading && (
            <div className="about-container">
              <h1 className="about-title">About</h1>
              <p className="last-updated-para">Last update on Nov 28th 2021</p>
              <p className="about-para-vaccines">
                COVID-19 vaccines be ready for distribution
              </p>
              <ul testid="faqsUnorderedList" className="about-faqs">
                {covidAboutData.map(each => (
                  <AboutFaqItem data={each} key={each.qno} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default About
