import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useProductContext } from '../context/ProductContext';
import offerImg from "../Images/offerimg.webp";
import Button from './Button';
import Card from './Card';
import CategoryBox from './CategoryBox';
import { HashLink } from 'react-router-hash-link';
import HeroSlider from './HeroSlider';

function Template() {

    const { bestSellers, myData, getUniqueData } = useProductContext();

    const categoryOnlyData = getUniqueData(myData, "category");
    console.log(categoryOnlyData);

    // let navigate = useNavigate();
    // const routeChange = () => {
    //     let path = `/CategoryPage/Home & Kitchen`;
    //     navigate(path);
    // }
    {/* onClick={routeChange} */ }

    const responsive = {
        largeLaptop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 3
        },
        laptop: {
            breakpoint: { max: 1199.98, min: 992 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 991.98, min: 768 },
            items: 3
        },
        largeMobile: {
            breakpoint: { max: 767.98, min: 576 },
            items: 3
        },
        mediumMobile: {
            breakpoint: { max: 375, min: 0 },
            items: 1
        },
        smallMobile: {
            breakpoint: { max: 320, min: 0 },
            items: 1
        }
    };

    return (
        <React.Fragment>
            <section className="headerSlider">
                <div id="sliderBox">
                    <HeroSlider></HeroSlider>
                </div>
            </section>
            <section className="bestSellerSection">
                <div className="container" id='bestSeller'>
                    <div className="sectionHead">
                        <h2>Our BestSellers</h2>
                    </div>
                    <div className="productSliderCont">
                        <Carousel infinite={true} className='sliderCont' responsive={responsive} autoPlay={"mobile" ? true : false} autoPlaySpeed={2000} keyBoardControl={true}>
                            {bestSellers.map((product, id) =>
                                <Card key={id} {...product} ></Card>
                            )}
                        </Carousel>
                    </div>
                </div>
            </section >
            <section className='categorySection'>
                <div className="container" id='categorySec'>
                    <div className="sectionHead">
                        <h2>Shop by Category</h2>
                    </div>
                    <div className="productBoxCont">
                        {categoryOnlyData.map((curEle, id) => {
                            return <>
                                <CategoryBox key={id} {...curEle} ></CategoryBox>
                            </>
                        })}
                    </div>
                </div>
            </section>
            <section className="offerSec">
                <div className="container" id='offerCont'>
                    <div className="offerTextCont">
                        <div className="offerTextBox">
                            <h4>Up to 50% discount</h4>
                            <h1>Kitchen & Dining Summer Sale</h1>
                            <p>Common kitchen tasks include cutting food items to size, heating food on an open fire or on a stove...</p>
                            <HashLink to="/CategoryPage/Home & Kitchen" ><Button path="/CategoryPage/Home & Kitchen" class="normalBtn" text="Explore All"></Button></HashLink>
                        </div>
                    </div>
                    <picture>
                        <img src={offerImg} alt="home and dining sale" />
                    </picture>
                </div>
            </section>
            <section className='categorySection'>
                <div className="container" id='categorySec'>
                    <div className="sectionHead">
                        <h2>Our Services</h2>
                    </div>
                    

                </div>
            </section>
            <div className="extra"></div>
        </React.Fragment >
    )
}

export default Template




