import React, {Component} from 'react';

export default function Product (props){
let {product_name,price,url} = props.product;
    return(
    <div className="Product">
     Product
     <p>{product_name}</p>
     <p>{price}</p>
     <img src={url}/>
    </div>
)
}