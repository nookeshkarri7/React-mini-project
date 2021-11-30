// import {AiOutlineCheckCircle} from 'react-icons/ai'
import {Component} from 'react'
import HomeSearch from '../HomeSearch'

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

export default class HomeAllDataCount extends Component {
  render() {
    const {allStatesData} = this.props
    const {confirmed, recovered, deceased} = allStatesData

    return (
      <>
        <div className="home-data-container">
          <HomeSearch statesList={statesList} />
          <div className="home-counter-container">
            <div
              testid="countryWideConfirmedCases"
              className="home-counter-inner-container color-confirm"
            >
              <p className="home-counter-para">Confirmed</p>
              <img
                src="https://lh3.googleusercontent.com/-oKKyJI3uYGM/YaOFcprzsaI/AAAAAAAAhxQ/L6FT9Lsh824M4Hgs0Gvn1clesys38j9SQCLcBGAsYHQ/s16000/confirmed.png"
                alt="country wide confirmed cases pic"
                className="home-counter-icon"
              />
              <p className="home-counter-para2">{confirmed}</p>
            </div>
            <div
              testid="countryWideActiveCases"
              className="home-counter-inner-container color-active"
            >
              <p className="home-counter-para">Active</p>
              <img
                src="https://lh3.googleusercontent.com/-KgRT0w95ypk/YaNVch7rpWI/AAAAAAAAhv0/2IHmVMV9hI4zk71VrFKb5dGcPMRcaZBJwCLcBGAsYHQ/s16000/active.png"
                alt="country wide active cases pic"
                className="home-counter-icon"
              />
              <p className="home-counter-para2">
                {confirmed - (recovered + deceased)}
              </p>
            </div>
            <div
              testid="countryWideRecoveredCases"
              className="home-counter-inner-container color-recovered"
            >
              <p className="home-counter-para">Recovered</p>
              <img
                src="https://bit.ly/3cT45lu"
                alt="country wide recovered cases pic"
                className="home-counter-icon"
              />
              <p className="home-counter-para2">{recovered}</p>
            </div>
            <div
              testid="countryWideDeceasedCases"
              className="home-counter-inner-container color-deceased"
            >
              <p className="home-counter-para">Deceased</p>
              <img
                src="https://bit.ly/3lffHUG"
                alt="country wide deceased cases pic"
                className="home-counter-icon"
              />
              <p className="home-counter-para2">{deceased}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
