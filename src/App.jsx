import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './Contexts/AuthContext'
import { StoreProvider } from './Contexts/StoreContext'
import FAQPage from './Components/FAQPage/FAQPage'
import DetailPage from './Components/DetailPage/DetailPage'
import HomePage from './Components/HomePage/HomePage'
import MoviePage from './Components/MoviePage/MoviePage'
import Navbar from './Components/Navbar/Navbar'
import SearchPage from './Components/SearchPage/SearchPage'
import TVPage from './Components/TVPage/TVPage'
import Footer from './Components/Footer/Footer'
import NotFound from './Components/NotFound/NotFound'
import ActorPage from './Components/ActorPage/ActorPage'
import LoginPage from './Components/LoginPage/LoginPage'
import SignupPage from './Components/LoginPage/SignupPage'
import ResetPassPage from './Components/LoginPage/ResetPassPage'
import Collection from './Components/Collection/Collection'
import PrivateRoute from './Route/PrivateRoute'
import './Style/Style.scss'


function App() {
  return (
    <Router>
      <AuthProvider>
        <StoreProvider>
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
                path= "/login" 
                component = {LoginPage} 
              />
              <Route
                path= "/signup" 
                component = {SignupPage} 
              />
              <Route
                path= "/forgot" 
                component = {ResetPassPage} 
              />
              <PrivateRoute
                path= "/collection" 
                component = {Collection} 
              />
              <Route
                exact
                path= "/person/:id"
                component = {ActorPage} 
              />
              <Route
                exact
                path= "/:type/:id"
                component = {DetailPage} 
              />
              <Route
                component={NotFound}
              />
            </Switch>
            <Footer />
          </div>
        </StoreProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
