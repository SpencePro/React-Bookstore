import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';

export const SingleBook = ({id, title, image, author, price}) => {
    const {cartContents, removeItem, increase, decrease} = useGlobalContext();
    const number = cartContents.filter((item) => item.id === id).length;

    return (
        <article className="book shadow">
            <div>
                <img src={image} alt={title}/>
                <h4><Link to={`/book/${id}`}>{title}</Link></h4>
                <p>{author}</p>
                <p>${price}</p>
                <Link to={`/book/${id}`}>More Info</Link>
            </div>
            <div>
                <button className="btn cart-btn" onClick={()=>increase(id)}>+</button>
                <p>In cart: {number < 1 ? 0:number}</p>
                <button className="btn cart-btn" onClick={()=>decrease(id, number)}>-</button>
                <button className="btn" onClick={()=>removeItem(id)}>Remove</button>
            </div>
        </article>
    );
}