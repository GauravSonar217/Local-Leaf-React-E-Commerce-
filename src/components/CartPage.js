import React from 'react'
import { useParams } from 'react-router-dom';
import AmountCounter from './AmountCounter';
import FormatPrice from '../helpers/FormatPrice';
import { useCartContext } from '../context/cartContext';
import CartBox from './CartBox';


function CartPage({ }) {

  const { cart } = useCartContext();
  console.log(cart);
  // const { name, img, price } = cart;

  return (
    <React.Fragment>
      <section className='cartPage' id='cartSec'>
        <div className="container" id='cart'>
          <div className="sectionHead">
            <h2>Shopping Cart</h2>
          </div>
          <div className="cartItemCont">
            <div className='cartheading'>
              <p>Item</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total Price</p>
              <p>Remove</p>
            </div>
            <CartBox />
          </div>
        </div>

      </section>

    </React.Fragment>
  )
}

export default CartPage