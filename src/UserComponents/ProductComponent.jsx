import React from 'react';
import './Styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductComponent = () => {
    return(
        <div className = "product-item">
            <div className = "product-image-container">
                <img className = "product-image" alt = "product" src = {require("../Images/product-sample.jpg")}/>
            </div>
            <div className = "product-details">
                <div className = "product-name-text">India Gate Basmati Super</div>
                <div>
                    <span>5 Kg - </span>
                    <span style = {{fontWeight:"bold"}}>950</span>
                </div>
            </div>
            <div className = "add-cart">
                <FontAwesomeIcon icon = {faShoppingCart}/>
                add to cart
            </div>
        </div>
    )
}

export default ProductComponent;