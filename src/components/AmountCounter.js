import React, { useState } from 'react'

function AmountCounter(props) {
    
    return (
        <React.Fragment>
            <div className="counterBox">
                <div onClick={props.decrease} className="decrement"><i class="fa-solid fa-minus"></i></div>
                <span>{props.amount}</span>
                <div onClick={props.increase} className="increment"><i class="fa-solid fa-plus"></i></div>
            </div>
        </React.Fragment>
    )
}

export default AmountCounter