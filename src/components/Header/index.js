import {Component} from 'react'
import {Link} from 'react-router-dom'
import {RiMenuAddFill} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  //   const [buttonClicked, setButton] = useState(false)
  state = {buttonClicked: false}

  showMenu = () => {
    this.setState(prev => ({
      buttonClicked: !prev.buttonClicked,
    }))
  }

  render() {
    const {buttonClicked} = this.state
    return (
      <>
        <div className="header-bg-container">
          <Link to="/">
            <h1 className="header-title">
              COVID19INDIA
              {/* <span className="header-title-span">INDIA</span> */}
            </h1>
          </Link>

          <div className="header-add-to-queue-button">
            <div className="header-show-icon">
              <button
                type="button"
                onClick={this.showMenu}
                className="header-show-button"
              >
                <RiMenuAddFill className="header-icon" />
              </button>
            </div>
            <ul className="header-links-desktop">
              <Link to="/" className="link-item-header-menu">
                <li className="header-li-item header-menuitem about-menu">
                  Home
                </li>
              </Link>

              <Link to="/about" className="link-item-header-menu">
                <li className="header-li-item header-menuitem about-menu">
                  About
                </li>
              </Link>
              {/* <li className="header-li-item header-menuitem about-menu">
                Vaccination
              </li> */}
            </ul>
          </div>
        </div>
        {buttonClicked && (
          <div className="header-menu-show-data">
            <ul className="header-links">
              <Link to="/" className="link-item-header-menu">
                <li className="header-li-item header-menuitem about-menu">
                  Home
                </li>
              </Link>

              <Link to="/about" className="link-item-header-menu">
                <li className="header-li-item header-menuitem about-menu">
                  About
                </li>
              </Link>
              {/* <li className="link-item-header-menu header-li-item header-menuitem about-menu">
                Vaccination
              </li> */}
            </ul>
            <button
              type="button"
              className="header-close-button"
              onClick={this.showMenu}
            >
              <AiFillCloseCircle className="header-icon" />
            </button>
          </div>
        )}
      </>
    )
  }
}

export default Header
