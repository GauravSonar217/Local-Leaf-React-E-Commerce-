import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"
import { HashLink } from 'react-router-hash-link'
// import { useAuth0 } from "@auth0/auth0-react";

function Contact() {
    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((value) => alert("Message Sent SuccessFully"));
    };

    return (
        <React.Fragment>
            <section className='contactSec' id='contact'>
                <div className="container" id='contactCont'>
                    <div className="contactForm">
                        <h1>CONTACT US</h1>
                        {/* https://formspree.io/f/myyqpzor */}
                        <form action="">
                            {/* <label htmlFor="fullname">Name</label><br /> */}
                            {/* <input
                                type="text"
                                name='Username'
                                id='fullname'
                                placeholder='Enter Your Name'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            // value={isAuthenticated ? user.name : ""}      
                            /><br /> */}
                            <label htmlFor="email">Email</label><br />
                            <input
                                type="email"
                                name='email'
                                // id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // value={isAuthenticated ? user.email : ""}
                                placeholder='Enter your email address'
                            /><br />
                            <label htmlFor="email">Password</label><br />
                            <input
                                type="password"
                                name='password'
                                // id='email'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                // value={isAuthenticated ? user.email : ""}
                                placeholder='Enter your password'
                            /><br />
                            <button onClick={createUser} id='submitBtn' className='normalBtn'>SUBMIT</button>
                            {/* <label htmlFor="message">Message</label><br />
                            <textarea name="message" id="message" cols="30" rows="4" placeholder='Type your Message'></textarea> */}
                            {/* <div className="checkBox">
                                <input type="checkbox" name="Terms and Conditions" id="tnc" />
                                <label id='checkLabel' htmlFor="Terms and Conditions">I accept the <HashLink to="/">Terms and Conditions</HashLink></label>
                            </div> */}
                            {/* <input onClick={createUser} type="submit" value="SUBMIT" id='submitBtn' /> */}
                        </form>
                    </div>
                    <div className="mapBox">
                        <iframe className='contactMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69565.7591434631!2d73.74056007462168!3d19.98932565835592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb705d8d581d%3A0x15b55e47c4a7f07a!2sTreemiti%20Informatics!5e0!3m2!1sen!2sin!4v1694588806732!5m2!1sen!2sin" width="50%" height="700px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact