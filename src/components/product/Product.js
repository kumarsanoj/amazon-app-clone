import React from 'react';
import './Product.css'
const Product = ({ name, image, price, rating}) => {
    return (
        <div className="product">
            <p className="product__info">{name}</p>
            <p className="product__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating || 5).fill().map(
                        (_) => (
                            <p>⭐</p>
                        )
                    )
                }
            </div>
            <img className="product__image" src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;