import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="container" id='footer'>
                    <div className="footerLinkCont">
                        <div className="linkBox">
                            <h2>local</h2>
                            <p>Fresh products from local producers, delivered directly to your front door, daily.</p>
                            <div className="footerIconBox"></div>
                        </div>
                        <div className="linkBox">
                            <h3>Popular Categories</h3>
                            <ul>
                                <li><NavLink>Bread & Bakery</NavLink></li>
                                <li><NavLink>Dairy & Eggs</NavLink></li>
                                <li><NavLink>Fruits & Vegetables</NavLink></li>
                                <li><NavLink>Home & Kitchen</NavLink></li>
                                <li><NavLink>Snacks & Beverages</NavLink></li>
                            </ul>
                        </div>
                        <div className="linkBox">
                            <h3>Address</h3>
                            <address>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, tenetur?
                                </p>
                            </address>
                        </div>
                        <div className="linkBox">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><HashLink to="#header">Search</HashLink></li>
                                <li><HashLink to="/aboutPage/#about">About Us</HashLink></li>
                                <li><NavLink>Delivery</NavLink></li>
                                <li><HashLink to="/contact/#contact">Contact</HashLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copy">
                        <p>Copyright © 2023 </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer