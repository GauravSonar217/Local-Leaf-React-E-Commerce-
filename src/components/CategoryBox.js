import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function CategoryBox(props) {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/CategoryPage/${props.text}`;
    navigate(path);
  }

  return (
    <React.Fragment>
      
        <div onClick={routeChange} className="categoryBox">
          <h3><HashLink to="/categoryPage/categoryProductSec#">{props.text}</HashLink></h3>
        </div>


    </React.Fragment>
  )
}

export default CategoryBox