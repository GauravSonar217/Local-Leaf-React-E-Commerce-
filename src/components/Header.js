import React from 'react'
import { useProductContext } from '../context/ProductContext'
import logo from "../Images/logo.png"
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Header(props) {

    const { updateFilterValue } = useProductContext();

    let navigate = useNavigate();
    const routeChange = () => {
        let path = props.path;
        navigate(path);
    }
    return (
        <React.Fragment>
            <header>
                <div className="container" id='header'>
                    <div onClick={routeChange} className="logoBox">
                        <img src={logo} alt="Company Logo" />
                    </div>
                    <div className="searchBox">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            name='text'
                            placeholder='Search for...'
                            onChange={updateFilterValue}
                        />
                        {/* <HashLink to="/allProduct/#allProductSec">View all products</HashLink> */}
                        <HashLink to={`/allProduct`}><Button class="searchBtn" text="SEARCH" /></HashLink>
                    </div>
                    <Button class="normalBtn" text="Account" path="/" icon=<i class="fa-solid fa-user"></i> />
                    <HashLink to="/cartPage/#cartSec"><Button class="normalBtn" text="Cart" icon=<i class="fa-solid fa-cart-shopping"></i> /></HashLink>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
