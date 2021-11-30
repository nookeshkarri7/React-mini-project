import './index.css'
import {Component} from 'react'

class HomeStateDetails extends Component {
  render() {
    const {states} = this.props
    const state = Object.keys(states)[0]
    const {confirmed, recovered, deceased} = states[state].total
    const {population} = states[state].meta
    //   console.log(confirmed)

    return (
      <div className="states-data-container-each">
        <div>
          <p className="state-data-name">{state}</p>
        </div>
        <div>
          <p className="state-data-confirm-para">{confirmed}</p>
        </div>
        <div>
          <p className="state-data-active-para">{confirmed}</p>
        </div>
        <div>
          <p className="state-data-recovered-para">{recovered}</p>
        </div>
        <div>
          <p className="state-data-deceased-para">{deceased}</p>
        </div>
        <div>
          <p className="state-data-population-para">{population}</p>
        </div>
      </div>
    )
  }
}

export default HomeStateDetails
