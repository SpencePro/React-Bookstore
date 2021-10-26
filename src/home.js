import React from 'react';
import { Books } from "./books";
import { CartSummary } from './cart'; 
import { SingleBook } from './single-book';

export const Home = () => {
    // const [booklist, setBooklist] = useState(Books);

    return (
        <main>
            <div className="cart-summary">
                <CartSummary />
            </div>
            <div className="booklist">
                {Books.map((book) => {
                    return <SingleBook key={book.id} {...book} />
                })}
            </div>
        </main>
    )
}