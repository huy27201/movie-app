import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FAQPage from './Components/FAQPage/FAQPage'
import HomePage from './Components/HomePage/HomePage'
import MoviePage from './Components/MoviePage/MoviePage'
import Navbar from './Components/Navbar/Navbar'
import SearchPage from './Components/SearchPage/SearchPage'
import TVPage from './Components/TVPage/TVPage'
import Footer from './Components/Footer/Footer'
import './Style/Style.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/movie" component={MoviePage} />
          <Route path="/show" component={TVPage} />
          <Route path="/faq" component={FAQPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
