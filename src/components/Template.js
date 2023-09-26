import React from 'react'
import { NavLink } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'
import sliderImg1 from "../Images/SliderImg1.jpg"
import sliderImg2 from "../Images/SliderImg2.jpg"
import Button from './Button'
import Card from './Card'
import CategoryBox from './CategoryBox'
import { HashLink } from 'react-router-hash-link'

function Template() {

    const { bestSellers, myData } = useProductContext();

    const getUniqueData = (data, property) => {
        let newVal = data.map((curEle) => {
            return curEle[property];
        });
        return (newVal = [...new Set(newVal)]);
    };

    const categoryOnlyData = getUniqueData(myData, "category");

    return (
        <React.Fragment>
            <section className="headerSlider">
                <div id="sliderBox">
                    <div className="sliderTextBox">
                        <h1>100% Organic</h1>
                        <Button class="normalBtn" text="SHOP NOW" />
                    </div>
                    <img id='slider1' src={sliderImg1} alt="" />
                    {/* <img id='slider2' src={sliderImg2} alt="" /> */}
                </div>
            </section>
            <section className="bestSellerSection">
                <div className="container" id='bestSeller'>
                    <div className="sectionHead">
                        <h2>Best Sellers</h2>
                    </div>
                    <div className="productBoxCont">
                        {bestSellers.map((product, id) =>
                            <Card key={id} {...product} ></Card>
                        )}
                    </div>
                </div>
            </section>
            <section className='categorySection'>
                <div className="container" id='categorySec'>
                    <div className="sectionHead">
                        <h2>Shop by Category</h2>
                    </div>
                    <div className="productBoxCont">
                        {categoryOnlyData.map((curEle, id) => {
                            return <>
                                <CategoryBox key={id} text={curEle} ></CategoryBox>
                            </>
                        })}
                    </div>
                </div>

            </section>
            <div className="extra"></div>
        </React.Fragment>
    )
}

export default Template