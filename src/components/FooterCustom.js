import React from 'react';
// import ScrollTop from "./ScrollTop";
import { FiGithub, FiInstagram } from "react-icons/fi";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const FooterTwo = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default variation-two">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
    
                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">Μενού</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">

                        <li className="has-droupdown"><AnchorLink href='#home'>Αρχική</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#services'>Υπηρεσίες</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#mediation'>Διαμεσολάβηση</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#why-us'>Γιατί Εμάς</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#mediationtraining'>Εκπαίδευση Διαμεσολαβητών</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#practitioner'>Η Διαμεσολαβήτρια</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#office'>Ο Χώρος</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#contact'>Επικοινωνία</AnchorLink></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">Επικοινωνία</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li>+30 2410 532920,+30 6944918702 </li> <br></br>
                                            <li>arsenopouloumarina@gmail.com</li><br></br>
                                            <li>Ασκληπιού 17 Λάρισα ΤΚ 41222</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">Designed, Developed & Powered by</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">Richterlabs</h6>
                                        <ul className="social-icon social-default justify-content-start">
                                            {/* <li><Link to="https://github.com/richterlabs" target='_blank'><FiGithub /></Link></li>
                                            <li><Link to="instagram.com/" target='_blank'><FiInstagram /></Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* <ScrollTop /> */}
        </>
    )
}

export default FooterTwo;
