import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Books } from './books';
import { useGlobalContext } from './context';

export const BookProfile = () => {
    const {id} = useParams();
    const [singleBook, setSingleBook] = useState({});
    const {cartContents, removeItem, increase, decrease} = useGlobalContext();
    const number = cartContents.filter((item) => item.id === parseInt(id)).length;

    useEffect(() => {
        const newBook = Books.find((book) => book.id === parseInt(id));
        setSingleBook({...newBook});
    }, [id])

    return (
        <main>
            <div className="book">
                <div className="image-div">
                    <img src={singleBook.image} alt={singleBook.title}/>
                </div>
                <div className="info-div">
                    <h3>{singleBook.title}</h3>            
                    <h5>{singleBook.author}</h5>
                    <h5>${singleBook.price}</h5>
                    <p>{singleBook.synopsis}</p>
                </div>
                <div className="cart-options">
                    <button className="btn cart-btn" onClick={()=>increase(id)}>+</button>
                    <p>In cart: {number}</p>
                    <button className="btn cart-btn" onClick={()=>decrease(id, number)}>-</button>
                    <button className="btn" onClick={()=>removeItem(id)}>Remove</button>
                </div>
            </div>
        </main>
    );
}


