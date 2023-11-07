import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useProductContext } from '../context/ProductContext';

function Navbar() {
    const { myData, getUniqueData } = useProductContext();
    const categoryOnlyData = getUniqueData(myData, "category");

    categoryOnlyData.map((category) => {
        // return category = {category.name};
    });
    // let categoryName = category ;

    let navigate = useNavigate();
    const routeChange = () => {
        // let path = `/CategoryPage/${categoryName}`;
        // navigate(path);  
    }

    return (
        <React.Fragment>
            <nav>
                <div className="container" id='navbar'>
                    <ul className='navLinkCont'>
                        <li><HashLink to="/" >Home</HashLink></li>
                        <li><HashLink to="/aboutPage/#about">About us</HashLink></li>
                        <li><HashLink>Categories<i class="fa-solid fa-angle-down"></i></HashLink>
                            <div className="dropdownCont">
                                <h3>Popular Categories</h3>
                                <ul>
                                    {categoryOnlyData.map((category) => {
                                        return <>
                                            <li className='navbarLink' ><HashLink to="/categoryPage/categoryProductSec#">{category.name}</HashLink></li>
                                        </>
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li><HashLink to="/contact/#contact">Contact Us</HashLink></li>
                        <li><NavLink>FAQ</NavLink></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment >
    )
}

export default Navbar