import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    render() {
        let { inventory } = this.props
        let mapper = inventory.map((product, i) => {
            return (<p key={i}>
               <Product product={product}/>
            </p>)
        })
        return (
            <div className="Dashboard">
                {mapper}
            </div>
        )
    }
}