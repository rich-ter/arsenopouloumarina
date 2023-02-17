import React from 'react';
import CustomHeader from '../Components/CustomHeader';
import SEO from "../Components/SEO";
import Separator from "../Components/Separator";
import ServiceOne from "../Components/ServiceOne";
import SectionTitle from "../Components/SectionTitle";
import SlipFour from "../Components/SlipFour";
import SlpitOne from "../Components/SlpitOne";
import SplitOneTwo from "../Components/SplitOneTwo";
import Contact from '../Components/Contact';
import AboutTwo from "../Components/AboutTwo";
import FooterCustom from '../Components/FooterCustom';
import Gallery from '../Components/Gallery';

const FinalMarinaSPA = () => {
  return (
    <div>
        <SEO title="Finance" />
        <main className="page-wrapper">
        <CustomHeader btnStyle="btn-small" HeaderSTyle="header-not-transparent" />


    <div id="home">
        <div className="slider-area slider-style-5 bg-overlay-solid height-850 bg_image" data-black-overlay="3" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-13.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-start">
                            <h4 className="subtitle">ΕΞΩΔΙΚΑΣΤΙΚΗ  ΕΠΙΛΥΣΗ ΔΙΑΦΟΡΩΝ ΜΕ ΔΙΑΜΕΣΟΛΑΒΗΣΗ</h4>
                            <h1 className="title display-one">Διεπιστημονικό Κέντρο  <br />Διαμεσολάβησης</h1>
                            <div className="button-group mt--40 mt_sm--20">
                                <a className="btn-default" href="#hero-button-contact-anchor">ΕΠΙΚΟΙΝΩΝΙΑ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="services">{/* Services */}
        <div className="rn-service-area rn-section-gap ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <SectionTitle
                        textAlign = "text-center"
                        radiusRounded = ""
                        subtitle = "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ"
                        title = "ΤΙ ΜΠΟΡΟΥΜΕ ΝΑ ΠΡΟΣΦΕΡΟΥΜΕ"
                        description = ""
                        />
                </div>
            </div>
            <ServiceOne 
                serviceStyle = "service__style--1 bg-color-blackest radius mt--20 rbt-border"
                textAlign = "text-start"
                />
            <Separator />
        </div>
        </div>
    </div>


    <div id="mediation">
        <SlpitOne />{/* What is mediation */}
        <SlipFour />{/* Why us  */}
        <SplitOneTwo/>{/* Mediation training  */}
        <Separator />
    </div>

    <div id="practitioner">
        <AboutTwo />{/* Marina Arsenopoulou */}
        <Separator />
    </div>

    <div id="office">
        <Gallery/>{/* Our Office  */}
        <Separator />

    </div>

    <div id = 'contact'>
        <div id = 'hero-button-contact-anchor'>
            <Contact/>{/* Contact  */}
            <Separator />
        </div>
    </div>

        <FooterCustom/>{/* Footer  */}

</main>
    </div>
  )
}

export default FinalMarinaSPA

    
    
    
    
    
    
