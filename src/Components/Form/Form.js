import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            name: "",
            price: 0,
            id: null,
            buttonName: 'Add To Inventory'
        }
    }
    handleGetProduct(id) {
        axios.get(`/api/product/${id}`).then((res) => {
            this.setState({
                url: res.url,
                name: res.product_name,
                price: res.price,
                id: res.id
            })
        })
    }

    componentDidMount(){
        this.handleGetProduct(this.state.id);
    }
    
    handleEditProduct(id) {
        let edittedProduct = {
            product_name: this.state.name,
            url: this.state.url,
            price: this.state.price
        }
        axios.put(`/api/product/${id}`, edittedProduct)
            .then(() => {
                this.props.handleGetInventory()
            })
    }

    componentDidUpdate(oldProps) {
        console.log(oldProps);
        console.log(this.props.selected);
        if (oldProps.selected !== this.props.selected) {
            let { product_name, url, price, id } = this.props.selected;
            this.setState({ url: url, name: product_name, price: price, id: id, buttonName: 'Save Changes' })
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
        if (this.state.buttonName === 'Save Changes') {
            this.handleEditProduct(this.state.id)
        }
        else {
            let productObj = {
                product_name: this.state.name,
                url: this.state.url,
                price: this.state.price
            }
            axios.post(`/api/product`, productObj).then(() => {
                this.props.handleGetInventory()
                this.handleCancel()
            })
        }
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
            price: 0,
            buttonName: "Add To Inventory"
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
                <button onClick={() => this.handleInventory()}>{this.state.buttonName}</button>
                <button onClick={() => this.handleCancel()}>Cancel</button>
            </div>
        )
    }
}