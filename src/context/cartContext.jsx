import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const getLocalCartData = () => {
        let localCartData = localStorage.getItem("shoppingCart");
        if (localCartData == []) {
            return [];
        } else {
            return JSON.parse(localCartData);
        }
    };

    const initialState = {
        cart: getLocalCartData(),
        total_item: 0,
        total_amount: "",
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // to add the data to cart
    const addToCart = (id, amount, singleProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, singleProduct } });
    };

    // setIncrease and setDecrease
    const setDecrease = (id) =>{
        dispatch({type: "SET_DECREMENT", payload: id});
    }
    const setIncrease = (id) =>{
        dispatch({type: "SET_INCREMENT", payload: id});
    }

    // to remove item from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    // to clear cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART"});
    };

    // to add data to our localStorage
    useEffect(() => {
        // dispatch({ type: "CART_TOTAL_ITEM"});
        // dispatch({ type: "CART_TOTAL_AMOUNT"});
        dispatch({ type: "CART_TOTAL_PRICE_AMOUNT"});
        localStorage.setItem("shoppingCart", JSON.stringify(state.cart))
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
            {children}
        </CartContext.Provider>
    );
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };