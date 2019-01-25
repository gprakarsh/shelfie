import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      inventory:[]
    }
    this.handleGetInventory=this.handleGetInventory.bind(this);
  }

  handleGetInventory(){
    axios.get('/api/inventory').then(res=>
      this.setState({inventory:res.data})
    )    
  }

  componentDidMount(){
    
    this.handleGetInventory()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form handleGetInventory={this.handleGetInventory} inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
