import React, { useState } from 'react'
import AmountCounter from './AmountCounter'
import FormatPrice from '../helpers/FormatPrice';
import { useCartContext } from '../context/cartContext';
import Button from './Button';

function CartBox({ id, name, image, price, amount }) {
    const { removeItem, setIncrease, setDecrease, total_amount } = useCartContext();

    // function setIncrease() {
    //     setAmount(amount + 1);
    // }
    // function setDecrease() {
    //     if (amount > 1) {
    //         setAmount(amount - 1);
    //     }
    // }
    return (
        <React.Fragment>
            <div className="cartBox">
                <picture className="itemPicBox">
                    <img src={"../" + image} alt={name} />
                </picture>
                <div className="cartDetailBox">
                    <div className="itemNameBox">
                        <p>{name}</p>
                    </div>
                    <div className='pricecont'>
                        <p><FormatPrice price={price} /></p>
                    </div>
                    <div className="btnBox">
                        <div className="counterCont">
                            <AmountCounter amount={amount} setIncrease={() => setIncrease(id)} setDecrease={() => setDecrease(id)} />
                        </div>
                        <Button class="buyNow" text="Buy Now"></Button>
                        <div className="removeItem">
                            <i class="fa-solid fa-trash" onClick={() => removeItem(id)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default CartBox