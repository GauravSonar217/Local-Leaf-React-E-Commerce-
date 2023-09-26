import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const initialState = {
        cart: [],
        total_amount: "",
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, singleProduct) => {
        console.log(id);
        console.log(amount);
        console.log(singleProduct);
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, singleProduct }});
    };

    return (
        <CartContext.Provider value={{ ...state, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };