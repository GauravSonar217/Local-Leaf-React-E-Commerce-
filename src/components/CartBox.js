import React from 'react'
import AmountCounter from './AmountCounter'


function CartBox() {
    return (
        <React.Fragment>
            <div className="cartBox">
                <div className="itemBox">
                    <picture>
                        {/* <img src={"../" + img} alt="" /> */}
                    </picture>
                    {/* <p>{name}</p> */}
                </div>
                <AmountCounter/>
                {/* <h3><FormatPrice price={price} /></h3> */}
            </div>

        </React.Fragment>
    )
}

export default CartBox