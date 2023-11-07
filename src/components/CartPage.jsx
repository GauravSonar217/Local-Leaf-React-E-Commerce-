import React from 'react'
import { useNavigate } from 'react-router-dom'
import AmountCounter from './AmountCounter';
import FormatPrice from '../helpers/FormatPrice';
import Button from './Button';
import { useCartContext } from '../context/cartContext';
import CartBox from './CartBox';


function CartPage({ }) {

  const { cart, clearCart, total_amount } = useCartContext();

  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `navigate -1`;
  //   navigate(path);
  // };

  return (
    <React.Fragment>
      <section className='cartPage' id='cartSec'>
        <div className="container" id='cart'>
          <div className="sectionHead">
            <h2>Shopping Cart</h2>
            {
              (cart.length !== 0) ?
                <button onClick={clearCart} className="clearDataBtn">CLEAR CART</button>
                : null
            }
          </div>
          {
            (cart.length !== 0) ?
              <div className="cartItemCont">
                <div className="productItemCont">
                  {
                    cart.map((product) => {
                      return <CartBox key={product.id} {...product} />
                    })
                  }
                </div>
                <div className="cartTotal">
                  <div className="totalPrice">
                    <h2>Subtotal</h2>
                    <h3><FormatPrice price={total_amount} /></h3>
                  </div>
                  <p>Taxes and shipping fees included at checkout</p>
                  <Button class="checkOutBtn" text="Check Out" />
                  <Button class="continueBtn" text="CONTINUE SHOPPING" />
                </div>
              </div>
              :
              <div className="emptyCartBox">
                <iframe src="https://lottie.host/?file=3f00453a-4ccb-42fb-9215-6915e38cba02/geHIYqqGak.json"></iframe>
              </div>
          }
        </div>

      </section>

    </React.Fragment>
  )
}

export default CartPage