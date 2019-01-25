import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            name: "",
            price: 0
        }
    }
    handleURLChange(val) {
        this.setState({ url: val })
    }
    handleNameChange(val) {
        this.setState({ name: val })

    }
    handlePriceChange(val) {
        this.setState({ price: val })

    }
    handleInventory() {
        let productObj = {
            product_name:this.state.name,
            url:this.state.url,
            price:this.state.price
        }
        axios.post(`/api/product`,productObj).then(()=>{
            this.props.handleGetInventory()
            this.handleCancel()
        })
        this.setState({
            url: "",
            name: "",
            price: 0
        })
        
        
    }
    handleCancel() {
        this.setState({
            url: "",
            name: "",
            price: 0
        })
    }

    render() {
        return (
            <div className="Form">
                {"Image URL:"}
                <input placeholder="Enter Image URL Here" onChange={(e) => this.handleURLChange(e.target.value)} value={this.state.url} />
                {"Product Name:"}
                <input placeholder="Enter product name Here" onChange={(e) => this.handleNameChange(e.target.value)} value={this.state.name} />
                {"Price:"}
                <input placeholder="Enter price Here" onChange={(e) => this.handlePriceChange(e.target.value)} value={this.state.price} />
                <button onClick={() => this.handleInventory()}>Add To Inventory</button>
                <button onClick={() => this.handleCancel()}>Cancel</button>                
            </div>
        )
    }
}