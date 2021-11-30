import './index.css'
import {Component} from 'react'

class AboutFaqItem extends Component {
  render() {
    const {data} = this.props
    const {question, answer} = data
    return (
      <li className="about-faq-li-item">
        <p className="faq-questions">{question}</p>
        <p className="faq-answer">{answer}</p>
      </li>
    )
  }
}

export default AboutFaqItem
