import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
    
    handleDeleteProduct(id){    
        axios.delete(`/api/product/${id}`).then(()=>{
            this.props.handleGetInventory();
        })
    }
    render() {
        let { inventory,handleSelection } = this.props
        let mapper = inventory.map((product) => {
            return (<p key={product.id}>
               <Product product={product} handleDeleteProduct={this.handleDeleteProduct.bind(this)} handleSelection={handleSelection}/>
            </p>)
        })
        return (
            <div className="Dashboard">
                {console.log(this.props)}
                {mapper}
            </div>
        )
    }
}