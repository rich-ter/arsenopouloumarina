import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SlpitOne = () => {
    return (
            <div className="rn-splite-style">
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    <img src="assets/images/compressed/mediationtraining.JPG" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Εκπαίδευση Διαμεσολαβητών</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description"> 	Η διαμόρφωση μίας κουλτούρας αλληλοσεβασμού και ειρηνικής προσέγγισης των συγκρούσεων που προάγονται μέσω της διαμεσολάβησης μπορούν να γίνουν πράξη με την εκπαίδευση νέων Διαμεσολαβητών, ικανών και άρτια εξοπλισμένων. <br></br>Με αυτόν το στόχο η Μαρίνα Αρσενοπούλου εκπαιδεύτηκε και πιστοποιήθηκε ως Εκπαιδεύτρια Διαμεσολαβητών, με βάση τα διεθνή πρότυπα (Train the Trainer CEDR Program), από τον διεθνώς αναγνωρισμένο βρετανικό Φορέα Centre of Effective Dispute Resolution (CEDR Trainer 2013) και σήμερα διαθέτει πολυετή διδακτική εμπειρία, έχοντας συμβάλει στην εκπαίδευση και μετεκπαίδευση εκατοντάδων διαμεσολαβητών στην Ελλάδα και την Κύπρο. Από το 2013 συνεργάζεται με το Ινστιτούτο Κατάρτισης Διαμεσολαβητών Λάρισας και, παράλληλα, από το 2019 με το Ινστιτούτο Κατάρτισης Διαμεσολαβητών Καβάλας. Επί σειρά ετών συνεργάζεται ως Εκπαιδεύτρια Διαμεσολαβητών και στα πιστοποιημένα προγράμματα του Πανεπιστήμιου Frederick για την κατάρτιση Διαμεσολαβητών στη Λευκωσία και τη Λεμεσό. Σχεδιάζει, επιμελείται και υλοποιεί προγράμματα Βασικής Κατάρτισης Διαμεσολαβητών (ν.4640/2019), Μετεκπαίδευσης Διαμεσολαβητών προχωρημένου επιπέδου (Advanced Mediation) καθώς και προγράμματα εξειδίκευσης σε ειδικότερους τομείς όπως: Διαμεσολάβηση στις Οικογενειακές Διαφορές (Family Mediation), Διαμεσολάβηση στις Εργασιακές Διαφορές (Workplace Mediation), Εκπαίδευση Νομικών Παραστατών στη Διαμεσολάβηση (Mediation Advocacy), Διαπραγματεύσεις, Διαχείριση Συγκρούσεων κ.α. Έχει συνεργαστεί με διεθνούς και εγνωσμένου κύρους Διαμεσολαβητές και Εκπαιδευτές Διαμεσολαβητών (DDrPatricia Velikay, DrAndy Grossman, James South, Susanne Shuller κ.α.) και έχει συμμετάσχει ως Κριτής σε διεθνείς διαγωνισμούς Διαμεσολάβησης.
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
