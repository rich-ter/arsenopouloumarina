import React from 'react';
import { FiX } from "react-icons/fi";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useEffect } from 'react';

const MobileMenu = ({show, onClose}) => {

    useEffect(() => {
            var elements = document.querySelectorAll('.popup-mobile-menu .has-droupdown > a');
    var elementsTwo = document.querySelectorAll('.popup-mobile-menu .with-megamenu > a');
    for(var i in elements) {
        if(elements.hasOwnProperty(i)) {
            elements[i].onclick = function() {
                this.parentElement.querySelector('.submenu').classList.toggle("active");
                this.classList.toggle("open");
            }
        }
    }

    for(var i in elementsTwo) {
        if(elementsTwo.hasOwnProperty(i)) {
            elementsTwo[i].onclick = function() {
                this.parentElement.querySelector('.rn-megamenu').classList.toggle("active");
                this.classList.toggle("open");
            }
        }
    }

    },[]);


    return (
        <div className={`popup-mobile-menu ${show ? "active": ""}`}>
            <div className="inner">
                <div className="header-top">
                    <div className="close-menu">
                        <span className="close-button" onClick={onClose}><FiX /></span>
                    </div>
                </div>
                <ul className="mainmenu">
                    <ul className="submenu">
                        <li className="has-droupdown"><AnchorLink href='#home'>Αρχική</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#services'>Υπηρεσίες</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#why-us'>Γιατί Εμάς</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#mediationtraining'>Εκπαίδευση Διαμεσολαβητών</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#practitioner'>Η Διαμεσολαβήτρια</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#office'>Ο Χώρος</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#contact'>Επικοινωνία</AnchorLink></li>
                    </ul>
                </ul>
                <p>Powered by: <br></br> Richterlabs</p>
            </div>
        </div>
    )
}
export default MobileMenu;