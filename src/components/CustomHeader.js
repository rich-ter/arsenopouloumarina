import {useState, useRef} from "react";
import { FiMenu } from "react-icons/fi";
import useStickyHeader from "./useStickyHeader";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from './MobileMenu'

const HeaderTwo = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }


    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
    const { clientHeight } = ref;
    
    const checkChange = (value) => {
      setCheck(value);
    };


    return (
        <>
            <header ref={ref} className={`rn-header header-default header-left-align ${HeaderSTyle} ${headerClasses}`}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-6 col-4 position-static">
                            <div className="header-left d-flex">
  
                                <nav className="mainmenu-nav d-none d-lg-block">
                                            <ul className="mainmenu link-hover">
                        <li className="has-droupdown"><AnchorLink href='#services'>Υπηρεσίες</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#why-us'>Γιατί Εμάς</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#mediationtraining'>Εκπαίδευση Διαμεσολαβητών</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#practitioner'>Η Διαμεσολαβήτρια</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#office'>Ο Χώρος</AnchorLink></li>
                        <li className="has-droupdown"><AnchorLink href='#contact'>Επικοινωνία</AnchorLink></li>
                         </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-8">
                            <div className="header-right">
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                    </div>
                                </div>
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                <p>Powered by: <br></br> Richterlabs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
        </>
    )
}
export default HeaderTwo;