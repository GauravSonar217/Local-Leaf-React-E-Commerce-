import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


function Navbar() {
    return (
        <React.Fragment>
            <nav>
                <div className="container" id='navbar'>
                    <ul className='navLinkCont'>
                        <li><NavLink>Categories<i class="fa-solid fa-angle-down"></i></NavLink>
                            <div className="dropdownCont">

                            </div>
                        </li>
                        <li><HashLink to="/aboutPage/#about">About us</HashLink></li>
                        <li><HashLink to="/contact/#contact">Contact Us</HashLink></li>
                        <li><NavLink>FAQ</NavLink></li>
                    </ul>

                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar