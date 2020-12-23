import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fabfacebook, fabinstagram } from '@fortawesome/free-solid-svg-icons'


import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-item">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading"></p>
                    <p className="footer-subscription-text">Leave your email and be first to get discounts</p>
                    <div className="input-areas">
                        <form>
                            <input type="email" name="email" placeholder="Write your email..." className="footer-input" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </section>
            </div>
            <div className="footer-item">
                <div>
                    <div>
                        <h2>Follow</h2>
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                    </div>
                </div>
            </div>
            <div className="footer-item">
                <div>
                    <div>
                        <h2>Contact</h2>
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;