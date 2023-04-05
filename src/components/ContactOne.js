import React from 'react';
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const ContactOne = () => {
    return (
        <>
            <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Τηλέφωνα Επικοινωνίας</h4>
                                        <p><a href="tel:2410 532920">+30 2410 532920 </a></p>
                                        <p><a href="tel:6944918702">+30 6944918702 </a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Ηλεκτρονική Διεύθυνση</h4>
                                        <p><a href="mailto:arsenopouloumarina@gmail.com"> arsenopouloumarina@gmail.com</a></p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Διεύθυνση</h4>
                                        <p>Ασκληπιού 17  Λάρισα   ΤΚ 41222    </p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ContactOne;