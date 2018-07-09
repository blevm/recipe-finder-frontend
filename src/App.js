import React, { Component } from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import RecipeDetails from './components/RecipeDetails'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="pageTitle">Gourmand</h1>
        <Router>
          <div>
            <Route exact path="/" component={SearchContainer}/>
            <Route exact path="/recipe_details" component={RecipeDetails}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
