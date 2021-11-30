import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import './index.css'

class HomeSearch extends Component {
  state = {searchText: ''}

  searchInputChanged = e => {
    this.setState({searchText: e.target.value})
  }

  FiterStatesList = () => {
    const {statesList} = this.props
    const {searchText} = this.state

    const filtered = statesList.filter(each =>
      each.state_name.toLowerCase().includes(searchText.toLowerCase()),
    )
    return filtered
  }

  render() {
    const filteredData = this.FiterStatesList()
    const {searchText} = this.state
    return (
      <>
        <div className="home-search-input home-search-input-container">
          <div className="search-container">
            <label htmlFor="search">
              <BsSearch className="search-label" />
            </label>
          </div>
          <input
            type="search"
            id="search"
            className="home-search-input"
            placeholder="Enter the State"
            value={searchText}
            onChange={this.searchInputChanged}
          />
        </div>
        {searchText && (
          <ul testid="searchResultsUnorderedList">
            {filteredData.map(each => (
              <Link
                to={`/state/${each.state_code}`}
                className="search-home-state-link"
                key={each.state_name}
              >
                <li className="search-home-state-li-item">
                  <p>{each.state_name}</p>
                  <div className="search-home-state-code">
                    {each.state_code}
                    <BiChevronRightSquare className="search-home-arrow-right" />
                  </div>
                </li>
                <hr className="hr-line-home-search" />
              </Link>
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default HomeSearch
