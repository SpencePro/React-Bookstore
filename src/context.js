import React, { useState, useContext, useEffect } from 'react';
import { Books } from "./books";


const AppContext = React.createContext()

// const getLocalStorage = () => {
//     let cart = localStorage.getItem("cart");
//     if (cart) {
//         return JSON.parse(localStorage.getItem("cart"))
//     }
//     else {
//         return [];
//     }
// }

const AppProvider = ({ children }) => {
    const [cartContents, setCartContents] = useState([]); //useState(getLocalStorage());

    const increase = (id) => {
        const newItem = Books.find((book) => book.id === parseInt(id));
        let newCart = [...cartContents, newItem];
        setCartContents(newCart);
    }
    const decrease = (id, amount) => {
        if (amount > 0) {
            const removedItem = cartContents.indexOf(cartContents.find((book) => book.id === parseInt(id)));
            cartContents.splice(removedItem, 1);
            let newCart = [...cartContents];
            setCartContents(newCart);
        }
    }
    const removeItem = (id) => {
        let newCart = cartContents.filter((item) => item.id !== parseInt(id));
        setCartContents(newCart);
    }
    const clearCart = () => {
        setCartContents([]);
    }

    // useEffect(() => {
    //     console.log(cartContents);
    //     localStorage.setItem("cart", JSON.stringify(cartContents));
    // })

    return (
    <AppContext.Provider value={{cartContents, setCartContents, clearCart, removeItem, increase, decrease}}>
        {children}
    </AppContext.Provider>
    );
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
