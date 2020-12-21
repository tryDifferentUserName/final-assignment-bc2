import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading"></p>
                <p className="footer-subscription-text">Leave your email and be first to get discounts</p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Write your email..." className="footer-input" />
                        <Button>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div>
                <div>
                    <div>
                        <h2>Follow</h2>
                        <Link></Link>
                        <Link></Link>
                        <Link></Link>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h2>Contact</h2>
                        <Link></Link>
                        <Link></Link>
                        <Link></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;