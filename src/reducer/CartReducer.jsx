// import { act } from "react-dom/test-utils";

function CartReducer(state, action) {
    if (action.type === "ADD_TO_CART") {
        let { id, amount, singleProduct } = action.payload;

        let existingProduct = state.cart.find(
            (product) => product.id == id
        );

        if (existingProduct) {
            let updatedProduct = state.cart.map((product) => {
                if (product.id == id) {
                    let newAmount = product.amount + amount;
                    return {
                        ...product,
                        amount: newAmount,
                    };
                } else {
                    return product;
                }
            });

            return {
                ...state,
                cart: updatedProduct,
            }
        } else {
            let cartProduct = {
                id: id,
                name: singleProduct.name,
                amount,
                image: singleProduct.img,
                price: singleProduct.price,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }

    // setIncrease and setDecrease
    // if (action.type === "SET_DECREMENT"){
    //     let updatedProduct = state.cart.map((product) =>{
    //         if(product.id === action.payload)
    //     })
    // }

    // to remove item from cart
    if (action.type === "REMOVE_FROM_CART") {
        let updatedCart = state.cart.filter((product) => product.id !== action.payload);
        return {
            ...state,
            cart: updatedCart,
        }
    }

    // to clear cart
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    // if (action.type === "CART_TOTAL_ITEM") {
    //     let updatedItem = state.cart.reduce((initialVal, product) => {
    //         let { amount } = product;
    //         initialVal = initialVal + amount;
    //         return initialVal;
    //     }, 0);
    //     return {
    //         ...state,
    //         total_item: updatedItem,
    //     }
    // }

    // if (action.type === "CART_TOTAL_AMOUNT") {
    //     let totalPrice = state.cart.reduce((initialVal, product) => {
    //         let { price, amount } = product;
    //         initialVal = initialVal + price * amount;

    //         return initialVal;
    //     }, 0)
    //     return {
    //         ...state,
    //         total_amount: totalPrice,
    //     }
    // }

    if (action.type === "CART_TOTAL_PRICE_AMOUNT") {
        let { total_item, total_amount } = state.cart.reduce((acc, product) => {
            let { price, amount } = product;
            acc.total_item += amount;
            acc.total_amount += (price * amount);

            return acc;
        }, 
        {
            total_item: 0,
            total_amount: 0,
        }
        );
        return {
            ...state,
            total_item,
            total_amount,
        };
    }

    return state;
}

export default CartReducer