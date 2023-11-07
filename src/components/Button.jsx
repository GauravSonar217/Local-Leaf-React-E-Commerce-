import React from 'react'
import { useNavigate } from 'react-router-dom'
import product from "../data/product.json"

function Button(props) {
  let quantity = props.quantity

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path =props.path ;
    navigate(path);

  }
    return (
      <button onClick={routeChange} className={props.class}>{props.icon}{props.text}</button>
    );
}

export default Button