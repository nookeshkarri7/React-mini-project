import './index.css'
import {Component} from 'react'

class StateDetailsItem extends Component {
  render() {
    let {category} = this.props
    const {data} = this.props
    const list = Object.keys(data).sort().reverse()
    category = category.toLowerCase()
    const categoryData = list.map(element => ({
      distName: element,
      value: data[element].total[category] ? data[element].total[category] : 0,
    }))
    categoryData.sort((a, b) => b.value - a.value)

    return (
      <ul testid="topDistrictsUnorderedList" className="state-details-ul-item">
        {categoryData.map(each => (
          <li key={each.distName} className="state-details-li-item">
            <p className="state-details-li-count">
              {each.value}
              <span className="state-details-li-state-name">
                {each.distName}
              </span>
            </p>

            {/* {districts[each].total.confirmed === undefined && <p>0 {each}</p>} */}
          </li>
        ))}
      </ul>
    )
  }
}

export default StateDetailsItem
