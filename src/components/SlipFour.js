import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";

const Data = [
    {
        countNum : 10,
        countTitle: 'έτη εμπειρίας σε διαμεσολαβήσεις',
    },
    {
        countNum : 25,
        countTitle: 'έτη άσκησης δικηγορίας',
    },
    {
        countNum : 2000,
        countTitle: 'ώρες εμπειρίας στην εκπαίδευση Διαμεσολαβητών',
    },
    {
        countNum : 20,
        countTitle: 'πιστοποιήσεις από αναγνωρισμένους Φορείς',
    },
];
const SlipFour = () => {
    return (
        <div className="rn-splite-style bg-color-blackest">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">
                    <div className="order-2 order-lg-1 col-lg-12 col-xl-6 col-12">
                        <div className="split-inner">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h4 className="title">Γιατί Εμάς</h4>
                            </ScrollAnimation>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">
H συνεχής ενασχόλησή μας τόσο με τη διαμεσολάβηση στην πράξη όσο και με την εκπαίδευση διαμεσολαβητών διευρύνει την εμπειρία μας και  αναβαθμίζει συνεχώς τις γνώσεις μας. <br></br><br></br>
Η εκτενής δικηγορική εμπειρία μας διασφαλίζει την κατανόηση των ζητημάτων σε βάθος και  μας  δίνει τη δυνατότητα να είμαστε αποτελεσματικοί στο χειρισμό δύσκολων υποθέσεων. <br></br><br></br>
Διαθέτουμε άριστες δεξιότητες επικοινωνίας και διαπραγμάτευσης και δυνατότητα πολύπλευρης προσέγγισης μιας υπόθεσης. <br></br><br></br>
Η συνεργασία μας με επιλεγμένους επιστήμονες και άλλων ειδικοτήτων, όπως οικονομικούς συμβούλους, παιδοψυχολόγους  κ.α., όταν ενδείκνυται η συνδρομή τους, μπορεί να προσφέρει συνολική επίλυση για όλες τις πτυχές μιας υπόθεσης, εμπλουτίζοντας τις  υπηρεσίες που παρέχει το Κέντρο μας.<br></br><br></br>
Γιατί η διαμεσολάβηση αποτελεί για μας στάση ζωής που κάνουμε πράξη κάθε μέρα! <br></br>
</p>
                            </ScrollAnimation>

           

                            <div className="row">
                                {Data.map((data, index) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="count-box counter-style-4 text-start">
                                            <TrackVisibility once>
                                                {({ isVisible }) => isVisible && 
                                                    <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                                            </TrackVisibility>
                                            <h5 className="counter-title">{data.countTitle}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="order-1 order-lg-2 col-lg-12 col-xl-6 col-12">
                        <div className="thumbnail">
                            <img src="assets/images/compressed/why-us.JPG" alt="Why us" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlipFour;