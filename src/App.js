import './App.css';
import MovieContainer from './components/Movie/Container/MovieContainer';
import MovieDetail from './components/Movie/Detail/MovieDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Link to="/">
          <h2 className="Header-title">Movie List</h2>
        </Link>
      </header>
      
      
        <div className="container">
          <Switch>
            <Route path="/:imdbId">
              <MovieDetail />
            </Route>
            <Route path="/">
              <MovieContainer/>
            </Route>
          </Switch>
        </div>
      </Router>
      

      <footer className="App-footer">
        <p>Faris Perwira &copy;2021</p>
      </footer>
    </div>
  );
}

export default App;
