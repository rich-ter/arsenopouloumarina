import React from 'react';
import SectionTitle from "./SectionTitle";
import ContactOne from "./ContactOne";

const Contact = () => {
    return (
        <>

                <div className="main-content">
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ"
                                        title = "ΕΠΙΚΟΙΝΩΝΙΑ"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
        </>
    )
}
export default Contact;