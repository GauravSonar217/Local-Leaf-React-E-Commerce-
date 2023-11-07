import React from 'react'
import Carousel from 're-carousel'
import Button from './Button'
// import IndicatorDots from './indicator-dots'
// import Buttons from './buttons'
// widgets={[IndicatorDots, Buttons]}

function Slider() {
    return (
        <Carousel className="slider" loop auto interval={3000}>
            <div style={{ height: '100%' }} className='slide one'>
                <div className="sliderTextBox">
                    <h1>100% Organic </h1>
                    <Button class="shopNow" text="SHOP NOW"></Button>
                </div>
            </div>
            <div style={{ height: '100%' }} className='slide two'>
                <div className="sliderTextBox">
                    <h1>Prepared Meals</h1>
                    <Button class="shopNow" text="SHOP NOW"></Button>
                </div>
            </div>
        </Carousel>
    )
}

export default Slider












// export default function carousel () {
//   return
// }
