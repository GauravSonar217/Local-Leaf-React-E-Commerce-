
function CartReducer(state, action) {
    if(action.type === "ADD_TO_CART"){
        let {id, amount, singleProduct } = action.payload;

        let cartProduct;

        cartProduct = {
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
  return state;
};

export default CartReducer