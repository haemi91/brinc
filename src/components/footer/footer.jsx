import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import './footer.scss';

function Footer(){
    return <BrowserRouter>
        <footer className="footer">
            <i className="foot__line"></i>
            <div className="footer__inner">
                <div className="foot__snn__link">
                    <Link to="/" className="sns__link">
                        <img src={require("../../media/icons/ico-twitter.svg").default} alt="twitter icon"/>
                    </Link>
                    <Link to="/" className="sns__link">
                        <img src={require("../../media/icons/ico-insta.svg").default} alt="insta icon"/>
                    </Link>
                    <Link to="/" className="sns__link">
                        <img src={require("../../media/icons/ico-send.svg").default} alt="send icon"/>
                    </Link>
                    <Link to="/" className="sns__link">
                        <img src={require("../../media/icons/ico-facebook.svg").default} alt="facebook icon"/>
                    </Link>
                </div>
                <ul className="foot__nav">
                    <li className="foot__nav__item"><Link to="/" className="foot__nav__link">Contact</Link></li>
                    <li className="foot__nav__item"><Link to="/" className="foot__nav__link">Help center</Link></li>
                    <li className="foot__nav__item"><Link to="/" className="foot__nav__link">Terms of Service</Link></li>
                    <li className="foot__nav__item"><Link to="/" className="foot__nav__link">Privacy Policy</Link></li>
                </ul>
                <p className="copyright">© Brinc finance 2021. All rights reserved.</p>
            </div>
        </footer>
    </BrowserRouter>
}

export default Footer;