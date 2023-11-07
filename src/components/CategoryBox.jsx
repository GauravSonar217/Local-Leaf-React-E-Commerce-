import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function CategoryBox({ name, image }) {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/CategoryPage/${name}`;
    navigate(path);
  }

  return (
    <React.Fragment>
      <div onClick={routeChange} className="categoryBox">
        <div className="categoryImgbox">
          <img src={image} alt="" />
        </div>
        <h3><HashLink to="/categoryPage/categoryProductSec#">{name}</HashLink></h3>
      </div>
    </React.Fragment>
  )
}

export default CategoryBox


    
