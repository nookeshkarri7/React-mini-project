import '../About/index.css'
import {Component} from 'react'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {VscGithubAlt} from 'react-icons/vsc'

class Footer extends Component {
  render() {
    return (
      <div className="about-footer text-align-footer">
        <h1 className="about-title">COVID19INDIA</h1>
        {/* <span className="header-title-span">INDIA</span> */}
        <p className="para-footer-about">
          we stand with everyone fighting on the front lines
        </p>

        <ul className="about-footer-buttons">
          <li className="header-state-li-item">
            <VscGithubAlt className="about-footer-icons" />
          </li>
          <li className="header-state-li-item">
            <FiInstagram className="about-footer-icons" />
          </li>
          <li className="header-state-li-item">
            <FaTwitter className="about-footer-icons" />
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer
