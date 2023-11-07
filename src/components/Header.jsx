import React from "react";
import { useProductContext } from "../context/ProductContext";
import logo from "../Images/LocalLeaf2.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useCartContext } from "../context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

function Header(props) {
  const { updateFilterValue } = useProductContext();
  const { total_item } = useCartContext();
  // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = props.path;
    navigate(path);
  };
  const userLogin = () => {
    let path = props.goTo;
    navigate(path);
  };
  return (
    // onClick={routeChange}
    <React.Fragment>
      <header>
        <div className="container" id="header">
          <div className="logoBox">
            <HashLink to="/home">
              <img src={logo} alt="Company Logo" />
            </HashLink>
          </div>
          <div className="searchBox">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name="text"
              placeholder="Search Here..."
              onChange={updateFilterValue}
            />
            <HashLink to={`/allProduct`}>
              <Button class="searchBtn" text="SEARCH" />
            </HashLink>
          </div>
          {
            // isAuthenticated ?
            // <HashLink to="/Profile"> <button className='normalBtn'>
            //     <i class="fa-solid fa-user"></i>
            //     {/* <p>My Profile</p> */}
            // </button>
            // </HashLink>
            // :
          }
          <button className="normalBtn" onClick={userLogin}>
            <i className="fa-solid fa-user"></i> <p>Log In</p>
          </button>
          {/* onClick={() => loginWithRedirect()} */}
          <HashLink to="/cartPage/#cartSec">
            <button className="normalBtn">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Cart</p>
              <span className="valueBox">{total_item}</span>
            </button>
          </HashLink>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
