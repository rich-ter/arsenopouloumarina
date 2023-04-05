import React from 'react';
import { GiFamilyHouse } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";

import { FaChild } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";


import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FaPeopleArrows />,
        title: 'Διαμεσολάβηση σε εμπορικές και αστικές διαφορές',
        description: ' Διαθέτοντας μεγάλη εμπειρία σε εμπορικές και αστικές υποθέσεις και λαμβάνοντας υπόψη τη σημασία της ταχύτητας στην επίλυση των διαφορών, χωρίς τη δημοσιότητα και τη φθορά της αντιδικίας και με ελεγχόμενο κόστος, εφαρμόζουμε τη Διαμεσολάβηση ως τον βέλτιστο τρόπο εξεύρεσης λειτουργικών και αμοιβαίως αποδεκτών συμφωνιών για τις επιχειρήσεις και όσους επιζητούν μία εποικοδομητική λύση για την υπόθεση που τους απασχολεί.'
    },
    {
        icon: <SiHandshake />,
        title: 'Διαμεσολάβηση στον εργασιακό χώρο',
        description: 'Με τη διαδικασία της Διαμεσολάβησης στον εργασιακό χώρο μπορούμε να αντιμετωπίσουμε προληπτικά ψυχοφθόρες και αντιπαραγωγικές συγκρούσεις και να επιλύσουμε διάφορα θέματα που μπορεί να προκαλέσουν διενέξεις στο χώρο της εργασίας.  Με τον τρόπο αυτό, διασφαλίζεται για τους εργαζόμενους καλή ψυχική υγεία, ικανοποίηση από την εργασία τους και υψηλή αποδοτικότητα καθώς παράλληλα προάγεται η εργασιακή ειρήνη στο εργασιακό περιβάλλον της επιχείρησης.'
    },
    {
        icon: <HiUserGroup />,
        title: 'Διαμεσολάβηση σε οικογενειακές διαφορές ',
        description: 'Ανεπιφύλακτα προκρίνουμε την Διαμεσολάβηση στον ευαίσθητο τομέα των οικογενειακών διαφορών καθώς αποδεικνύεται το πιο αποτελεσματικό μέσο για την επίτευξη λειτουργικών συμφωνιών, με γνώμονα το συμφέρον των παιδιών, για όλα τα θέματα που προκύπτουν σε σχέση με ένα διαζύγιο. Αποφεύγονται καταστροφικές εντάσεις, συγκρούσεις και αντιδικίες. Θέματα όπως η επιμέλεια, η διατροφή, η επικοινωνία, η ρύθμιση των περιουσιακών αποκτημάτων και πολλά άλλα προσωπικά και οικονομικά ζητήματα, συζητούνται σε ένα προστατευτικό πλαίσιο απορρήτου και μπορούν να ρυθμιστούν με συναινετικό τρόπο. Έτσι μπορεί να διατηρηθεί μία αρμονική σχέση και των δύο γονιών με τα παιδιά και να διαμορφωθεί μία καθημερινότητα που θα είναι λειτουργική για όλους και μετά το διαζύγιο. '
    },

    {
        icon: <FaChild />,
        title: 'Σχολική Διαμεσολάβηση',
        description: ' Η επίλυση των συγκρούσεων με Διαμεσολάβηση αποτελεί μία προσέγγιση που μαθαίνεται. Μέσω της σχολικής Διαμεσολάβησης οι μαθητές και οι εκπαιδευτικοί μπορούν να εκπαιδευτούν ώστε να διαχειρίζονται με αποτελεσματικό τρόπο τις συγκρούσεις στο σχολικό περιβάλλον. Τα παιδιά από τη σχολική τους ηλικία είναι χρήσιμο να μάθουν να αντιμετωπίζουν τις συγκρούσεις με τους συνομηλίκους τους σαν ένα πρόβλημα που μπορεί να επιλυθεί με φιλικό τρόπο, αλληλοκατανόηση και αμοιβαίο σεβασμό. Η εκπαίδευση των παιδιών μέσω της Διαμεσολάβησης τα εξοπλίζει με πολύτιμες δεξιότητες και διαμορφώνει βιώματα που θα τους είναι χρήσιμα σε όλη τους τη ζωή. <br></br>&nbsp; '
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600" dangerouslySetInnerHTML={{__html: val.title}}></h4>
                                <p className="description b1 color-gray mb--0 text-justify " dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;