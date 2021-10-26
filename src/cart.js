import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const {cartContents, removeItem, clearCart} = useGlobalContext();
    
    if (cartContents.length === 0) {
        return (
            <main className="cart-page-div">
                <div>
                    <h2 className="cart-title">Cart</h2>
                    <h4>is empty</h4>
                </div>
            </main>
        )
    }

    console.log(cartContents);
    const newCartContents = new Set(cartContents);
    
    let totalCost = 0;
    for (let i=0; i < cartContents.length; i++) {
        totalCost += cartContents[i].price;
    }
    return (
        <main className="cart-page-div">
            <div>
                <h2 className="cart-title">Cart</h2>
            </div>
            <div className="cart-details">
                {[...newCartContents].map((book) => {
                    const {id, title, price} = book;
                    const number = cartContents.filter((item) => item.id === id).length;
                    console.log([...newCartContents]);
                    return (
                        <div className="cart-item" key={id}>
                            <h4><Link to={`/book/${id}`}>{title}</Link>({number})</h4>
                            <p className="divide-line">-</p>
                            <p>${price}</p>
                            <p className="divide-line">-</p>
                            <div className="total-item-price">
                                <p>Total: ${number * price}</p>
                            </div>
                            <div>
                                <button className="btn" onClick={()=>removeItem(id)}>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="total-cart-price">
                <label htmlFor="total-price">Cart Total: </label>
                <h4 id="total-price">${totalCost.toFixed(2)}</h4>
            </div>
            <div className="clear-btn">
                <button className="btn" onClick={clearCart}>
                    Clear Cart
                </button>
            </div>
        </main>
    )
}

export const CartSummary = () => {
    const {cartContents} = useGlobalContext();
    const totalPrice = cartContents.reduce((total, item) => {
        return total + item.price
    }, 0);

    return (
        <div className="cart shadow">
            <h2><Link to="/cart">Cart {cartContents.length > 0 ? `(${cartContents.length})`:""}</Link></h2>
            <h4>Total: {totalPrice > 0 ? totalPrice.toFixed(2):0}</h4>
        </div>
    );
}