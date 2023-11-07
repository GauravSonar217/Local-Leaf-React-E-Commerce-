import React, { useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AmountCounter from './AmountCounter';
import Button from './Button';
import Card from './Card';
import FormatPrice from '../helpers/FormatPrice';
import Rating from './Rating';
import { useCartContext } from '../context/cartContext';

function ProductPage() {
    const { myData, singleProduct, getSingleProduct } = useProductContext();
    const { id } = useParams();
    const { addToCart } = useCartContext();
    const [amount, setAmount] = useState(1);

    useEffect(() => {
         getSingleProduct(id);
        // let sp =  getSingleProduct(id);
        // dispatch({ type: "SET_SINGLE_PRODUCT", payload: sp });
        // console.log(singleProduct);
        // window.location.reload();
    }, []);

    const { name, img, quantity, price, rating, review } = singleProduct;
    let description = singleProduct.description;
    let category = singleProduct.category;

    function increase() {
        setAmount(amount + 1);
    }
    function decrease() {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    }
    const relativeProducts = myData.filter((product) => {
        if (product.id != id)
            return product.category === category;
    });

    return (
        <React.Fragment>
            <section className="productPage" id='productSec'>
                <div className="container" id='productPage'>
                    <div className="productPicBox">
                        <img src={"../" + img} alt="" />
                    </div>
                    <div className="productDetails">
                        <div className="nameBox">
                            <h1>{name} ({quantity})</h1>
                        </div>

                        <Rating class="ratingBox" stars={rating} reviews={review} />

                        <div className="priseBox">
                            <p>Prise:<h2><FormatPrice price={price} /></h2> (Incl. of all taxes)</p>
                        </div>
                        <div className="productDescBox">
                            <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        </div>
                        <div className="counterCont">
                            <label htmlFor="">Add Items :</label>
                            <AmountCounter amount={amount} increase={increase} decrease={decrease} />
                        </div>
                        <div className="btnBox2">
                            <HashLink to={`/cartPage/#cartSec`} onClick={() => addToCart(id, amount, singleProduct)} ><Button class="addToCart" text="Add to Cart"></Button></HashLink>
                            <Button class="normalBtn" text="Buy Now"></Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relativeSec">
                <div className="container" id='relatedProduct'>
                    <div className="sectionHead">
                        <h2>You May Also Like</h2>
                    </div>
                    <div className="productBoxCont">
                        {relativeProducts.map((product, id) =>
                            <Card imgpath="../" key={id} p {...product} ></Card>
                        )}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ProductPage



