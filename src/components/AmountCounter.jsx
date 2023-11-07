import React, { useState } from 'react'

function AmountCounter({amount, increase, decrease}) {
    
    return (    
        <React.Fragment>
            <div className="counterBox">
                <div onClick={decrease} className="decrement"><i class="fa-solid fa-minus"></i></div>
                <span>{amount}</span>
                <div onClick={increase} className="increment"><i class="fa-solid fa-plus"></i></div>
            </div>
        </React.Fragment>
    )
}

export default AmountCounter