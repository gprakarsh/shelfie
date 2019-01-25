import React, { Component } from 'react';

export default function Product(props) {
    let { product_name, price, url, id } = props.product;
    return (
        <div className="Product">
            Product
     <p>{product_name}</p>
            <p>{price}</p>
            <img src={url} />
            <button onClick={() =>props.handleDeleteProduct(id)}>Delete</button>
            <button onClick={()=>props.handleSelection(id)}>Edit</button>
        </div>
    )
}