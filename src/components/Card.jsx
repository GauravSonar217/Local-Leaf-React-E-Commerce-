import React from 'react'
import Button from './Button'
import { HashLink } from 'react-router-hash-link';
import FormatPrice from "../helpers/FormatPrice"
import Rating from './Rating';

function Card(product) {
  const { name, price, id, rating, review, img } = product;

  return (
    <React.Fragment>
      <HashLink to={`/productPage/${id}/#productSec`}>
        <div className="productBox">
          <div className="productImgbox">
            <img src={"../" + img} alt="" />
          </div>
          <div className="productTextbox">
            <h3>{name}</h3>
            <h2><FormatPrice price={price} /></h2>
            <Rating class="ratingBox" stars={rating} reviews={review} />
          </div>
        </div>
      </HashLink>
    </React.Fragment>
  )
}

export default Card