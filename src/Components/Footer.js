import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";
import '../Assets/css/Footer.css'

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
                            <button class="btn btn-outline-light mb-2 ml-2">Subscribe</button>
                        </form>
                    </div>
                </section>
            </div>
            <div className="footer-item">
                <div>
                    <div className="social-icons">
                        <h5>Connect with us</h5>
                        <div><Link to='/'><FaFacebook size="2em" color="honeydew" /></Link></div><br />
                        <div><Link to='/'><FaInstagram size="2em" color="honeydew" /></Link></div>
                    </div>
                </div>
            </div>
            <div className="footer-item">
                <div>
                    <div>
                        <h5>Contacts</h5>
                        <Link to='/'>hello@veritas.com</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;