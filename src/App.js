import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selected: {}
    }
    this.handleGetInventory = this.handleGetInventory.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleGetInventory() {
    axios.get('/api/inventory').then(res =>
      this.setState({ inventory: res.data })
    )
  }

  componentDidMount() {
    this.handleGetInventory()
  }

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

          <Link to='/'><Dashboard inventory={this.state.inventory} handleGetInventory={this.handleGetInventory} handleSelection={this.handleSelection} />

          <Header />
          <Form handleGetInventory={this.handleGetInventory} selected={this.state.selected} />
        </div>
      </Router>
    );
  }
}

export default App;
