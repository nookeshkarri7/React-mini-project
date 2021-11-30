import './index.css'
import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import StateDetailsItem from '../StateItemDetails'
import RenderBarChart from '../Charts'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class StateWiseDetails extends Component {
  state = {
    isLoading: true,
    total: {},
    districts: {},
    category: 'Confirmed',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    let response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    // const timeLinesData=await axios.get("https://apis.ccbp.in/covid19-timelines-data")
    response = await response.json()

    // responseTimeLines = await responseTimeLines.json()

    this.setState(prev => ({
      isLoading: !prev.isLoading,
      total: response[stateCode].total,
      districts: response[stateCode].districts,
    }))
    // console.log(response[stateCode])
  }

  changeDeceasedCategory = () => {
    this.setState({category: 'Deceased'})
  }

  changeActiveCategory = () => {
    this.setState({category: 'Active'})
  }

  changeConfirmedCategory = () => {
    this.setState({category: 'Confirmed'})
  }

  changeRecoveredCategory = () => {
    this.setState({category: 'Recovered'})
  }

  render() {
    const {isLoading, total, districts, category} = this.state
    const {confirmed, recovered, deceased, tested} = total
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const stateName = statesList.filter(
      each => each.state_code === stateCode,
    )[0].state_name

    return (
      <>
        <div className="home-bg-container">
          {isLoading && (
            <div testid="stateDetailsLoader" className="home-loader">
              <Loader type="Oval" color="#007BFF" height={32} width={32} />
            </div>
          )}
          {!isLoading && (
            <>
              <div className="home-data-container state-details">
                <div className="state-details-container">
                  <div className="state-details-title-container">
                    <div className="state-details-title">
                      <h1 className="state-title-h1">{stateName}</h1>
                    </div>
                    <p className="state-details-last-para">
                      Last update on Nov 28th 2021.
                    </p>
                  </div>
                  {/* <button type="button" onClick={this.changeTestedCategory}> */}
                  <div className="state-details-tested-container">
                    <p>Tested</p>
                    <p className="state-details-tested-para">{tested}</p>
                  </div>
                  {/* </button> */}
                </div>
                <div className="home-counter-container ">
                  <button
                    type="button"
                    onClick={this.changeConfirmedCategory}
                    className="change-category"
                  >
                    <div
                      testid="stateSpecificConfirmedCasesContainer"
                      className="home-counter-inner-container about-count color-confirm"
                      // onClick={this.changeConfirmedCategory}
                    >
                      <p className="home-counter-para">Confirmed</p>
                      <img
                        src="https://lh3.googleusercontent.com/-oKKyJI3uYGM/YaOFcprzsaI/AAAAAAAAhxQ/L6FT9Lsh824M4Hgs0Gvn1clesys38j9SQCLcBGAsYHQ/s16000/confirmed.png"
                        alt="state specific confirmed cases pic"
                        className="home-counter-icon"
                      />
                      <p className="home-counter-para2">{confirmed}</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={this.changeActiveCategory}
                    className="change-category"
                  >
                    <div
                      testid="stateSpecificActiveCasesContainer"
                      className="home-counter-inner-container about-count color-active"
                      // onClick={this.changeActiveCategory}
                    >
                      <p className="home-counter-para">Active</p>
                      <img
                        src="https://lh3.googleusercontent.com/-KgRT0w95ypk/YaNVch7rpWI/AAAAAAAAhv0/2IHmVMV9hI4zk71VrFKb5dGcPMRcaZBJwCLcBGAsYHQ/s16000/active.png"
                        alt="state specific active cases pic"
                        className="home-counter-icon"
                        // testid="countryWideActiveCases"
                      />
                      <p className="home-counter-para2">
                        {confirmed - (recovered + deceased)}
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={this.changeRecoveredCategory}
                    className="change-category"
                  >
                    <div
                      testid="stateSpecificRecoveredCasesContainer"
                      className="home-counter-inner-container about-count color-recovered"
                      // onClick={this.changeRecoveredCategory}
                    >
                      <p className="home-counter-para">Recovered</p>
                      <img
                        src="https://bit.ly/3cT45lu"
                        alt="state specific recovered cases pic"
                        className="home-counter-icon"
                        // testid="countryWideRecoveredCases"
                      />
                      <p className="home-counter-para2">{recovered}</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={this.changeDeceasedCategory}
                    className="change-category"
                  >
                    <div
                      testid="stateSpecificDeceasedCasesContainer"
                      className="home-counter-inner-container about-count color-deceased"
                      // onClick={this.changeDeceasedCategory}
                    >
                      <p className="home-counter-para">Deceased</p>
                      <img
                        src="https://bit.ly/3lffHUG"
                        alt="state specific deceased cases pic"
                        className="home-counter-icon"
                        // testid="countryWideDeceasedCases"
                      />
                      <p className="home-counter-para2">{deceased}</p>
                    </div>
                  </button>
                </div>
                <div className="top-districts-container">
                  <h1 className="top-districts-tite">Top Districts</h1>
                  <div>
                    <StateDetailsItem data={districts} category={category} />
                  </div>
                  {/* <RenderBarChart stateCode={stateCode} />
                  <RenderBarChart stateCode={stateCode} /> */}
                </div>
              </div>
              <div testid="lineChartsContainer" className="graphs-data">
                <RenderBarChart stateCode={stateCode} category={category} />
              </div>
            </>
          )}
        </div>
      </>
    )
  }
}

export default StateWiseDetails
