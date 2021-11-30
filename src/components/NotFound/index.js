import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <>
        <div className="not-found-page">
          <div className="not-found-image-container">
            <img
              src="https://lh3.googleusercontent.com/-mOS9KiZ9QMQ/YaNyi8_gLoI/AAAAAAAAhwo/Zi58Box3lsYb2mVD_PVWQ9IvlYdbvMTVQCLcBGAsYHQ/s16000/notfoun.png"
              alt="not-found-pic"
              className="not-found-image"
            />
          </div>
          <h1 className="not-found-title">PAGE NOT FOUND</h1>
          <p className="not-found-para">
            we’re sorry, the page you requested could not be found
          </p>
          <p className="not-found-para">Please go back to the homepage</p>
          <div className="not-found-page-button-container">
            <Link to="/">
              <button type="button" className="go-to-home-button">
                Home
              </button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default NotFound
