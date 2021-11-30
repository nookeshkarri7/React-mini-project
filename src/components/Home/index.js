import './index.css'
import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

import HomeStateData from '../HomeStateData'
import HomeAllDataCount from '../HomeAllDataCount'

class Home extends Component {
  state = {covidData: {}, isLoading: true, total: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    let response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    response = await response.json()
    this.setState(prev => ({
      covidData: response,
      isLoading: !prev.isLoading,
      total: response.TT.total,
    }))
    // console.log(response)
  }

  render() {
    const {covidData, isLoading, total} = this.state

    return (
      <>
        <div className="home-bg-container">
          {isLoading && (
            <div testid="homeRouteLoader" className="home-loader">
              <Loader type="Oval" color="#007BFF" height={32} width={32} />
            </div>
          )}
          {!isLoading && <HomeAllDataCount allStatesData={total} />}
          {!isLoading && <HomeStateData allStatesData={covidData} />}
        </div>
      </>
    )
  }
}

export default Home
