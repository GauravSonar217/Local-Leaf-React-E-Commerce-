import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


function Contact() {
    return (
        <React.Fragment>
            <section className='contactSec' id='contact'>
                <div className="container" id='contactCont'>
                    <div className="contactForm">
                        <h1>CONTACT US</h1>
                        <form action="https://formspree.io/f/myyqpzor" method='POST'>
                            <label htmlFor="fullname">Name</label><br />
                            <input type="text" name='Username' id='fullname' placeholder='Enter Your Name' required autoComplete='off' /><br />
                            <label htmlFor="email">Email</label><br />
                            <input type="email" name='email' id='email' placeholder='Enter your email address' required /><br />
                            <label htmlFor="message">Message</label><br />
                            <textarea name="message" id="message" cols="30" rows="4" placeholder='Type your Message'></textarea>
                            <div className="checkBox">
                                <input type="checkbox" name="Terms and Conditions" id="tnc" />
                                <label id='checkLabel' htmlFor="Terms and Conditions">I accept the <HashLink to="/">Terms and Conditions</HashLink></label>
                            </div>
                            <input type="submit" value="SUBMIT" id='submitBtn' />
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