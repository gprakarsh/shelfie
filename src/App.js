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
  }

  handleGetInventory(){
    axios.get('/api/inventory').then(res=>
      this.setState({inventory:res.data})
    )    
  }

  componentDidMount(){
    
    this.handleGetInventory()
    console.log(this.state)
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {console.log(this.state)}
        <Header />
        <Dashboard inventory={this.state.inventory}/>
        <Form />
      </div>
    );
  }
}

export default App;
