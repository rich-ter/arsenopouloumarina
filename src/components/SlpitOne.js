import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SlpitOne = () => {
    return (
            <div className="rn-splite-style">
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    <img src="/assets/images/compressed/whatismediation.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Τι είναι η Διαμεσολάβηση</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description"> 	Η διαμεσολάβηση είναι μία σύντομη, θεσμοθετημένη διαδικασία που στόχο έχει την επίλυση των διαφορών εκτός δικαστηρίων. Με τη βοήθεια του Διαμεσολαβητή, και μέσω του διαλόγου και της διαπραγμάτευσης,  οι εμπλεκόμενοι σε μία διαφορά μπορούν να επιδιώξουν την επίλυση της διαφοράς αυτής, σε ένα πλαίσιο εχεμύθειας, σε σύντομο χρονικό διάστημα και με εύλογο κόστος. Η συμφωνία που θα επιτευχθεί, θα είναι αμοιβαία αποδεκτή και απόλυτα ισχυρή, καθώς, σύμφωνα με τον ν.4640/2019,  αυτή μπορεί να λάβει την ισχύ εκτελεστού τίτλου. <br></br><br></br>Η επιλογή του  κατάλληλου Διαμεσολαβητή είναι κρίσιμη για την έκβαση της διαμεσολάβησης, καθώς όσο πιο έμπειρος και καλύτερα καταρτισμένος είναι ο Διαμεσολαβητής, τόσο περισσότερο είναι σε θέση να διαχειριστεί με επιτυχία πολύπλοκα ή ευαίσθητα ζητήματα και συγκρούσεις που έχουν εξελιχθεί και έχουν ήδη προκαλέσει δυσκολία στους εμπλεκόμενους.
</p>
                                    </ScrollAnimation>


                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SlpitOne
