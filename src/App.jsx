import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FAQPage from './Components/FAQPage/FAQPage'
import DetailPage from './Components/DetailPage/DetailPage'
import HomePage from './Components/HomePage/HomePage'
import MoviePage from './Components/MoviePage/MoviePage'
import Navbar from './Components/Navbar/Navbar'
import SearchPage from './Components/SearchPage/SearchPage'
import TVPage from './Components/TVPage/TVPage'
import Footer from './Components/Footer/Footer'
import NotFound from './Components/NotFound/NotFound'
import './Style/Style.scss'

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route 
              exact 
              path = "/" 
              component = {HomePage} 
            />
            <Route 
              path = "/search" 
              component = {SearchPage} 
            />
            <Route
              exact
              path= "/movie" 
              component = {MoviePage}
            />
            <Route
              exact
              path= "/tv" 
              component = {TVPage} 
            />
            <Route
              path= "/faq" 
              component = {FAQPage} 
            />
            <Route
              path= "/:type/:id"
              component = {DetailPage} 
            />
            <Route
              component={NotFound}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
