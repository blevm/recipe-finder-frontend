import React, { Component } from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import RecipeDetails from './components/RecipeDetails'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import RecipeList from './containers/RecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="pageTitle">Gourmand</h1>
        <Router>
          <div>
            <Route exact path="/" component={SearchContainer}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/my_recipes" component={RecipeList}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
