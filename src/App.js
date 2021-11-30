import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import StateWiseDetails from './components/StateWiseDetails'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/state/:stateCode" component={StateWiseDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
    <Footer />
  </>
)

export default App
