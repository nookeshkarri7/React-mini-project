import {Component} from 'react'
import axios from 'axios'

class Exams extends Component {
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await axios.get(
      'https://estudyspot.com/onlinetests/index.php/result.php',
    )
    console.log(response)
  }

  render() {
    return <p>test</p>
  }
}

export default Exams
