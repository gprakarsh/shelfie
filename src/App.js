import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  

  handleSelection(id) {
    console.log()
    for (let i = 0; i < this.state.inventory.length; i++) {
      if (id === this.state.inventory[i].id) {
        this.setState({ selected: this.state.inventory[i] })
      }
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <div>
          <Link to="/"><button>Dashboard</button></Link>
          </div>
          <Switch>
            <Route path="/edit/:id" component={Form}/>
            <Route path="/add" component={Form}/> 
          </Switch>
        </div>
        </Router>
      
    );
  }
}

export default App;
