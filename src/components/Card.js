import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import FormatPrice from "../helpers/FormatPrice"
import Rating from './Rating';

function Card(product) {
  const { name, price, id, rating, review, quantity, img } = product;

  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/productPage/${id}/#productSec`;
  //   navigate(path);

  return (
    <React.Fragment>
      <HashLink to={`/productPage/${id}/#productSec`}>
        <div className="productBox">
          <div className="productImgbox">
            <img src={"../" + img} alt="" />
          </div>
          <div className="productTextbox">
            <h3>{name} ({quantity})</h3>
            <Rating class="ratingBox" stars={rating} reviews={review} />
            <h2><FormatPrice price={price} /></h2>
          </div>
        </div>
      </HashLink>
    </React.Fragment>
  )
}




export default Card