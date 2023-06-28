import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from "react-copy-to-clipboard"; /* Penser à installer la bibliothèque CopyToClipboard avec la commande : npm i react-copy-to-clipboard */
import Buttons from '../components/Buttons';
import { motion } from "framer-motion"; // Fait parti de la bibliothèque framer-motion (installée dans App.js)


const Contact = () => {

    const pageTransition = {  // Autre méthode pour les transitions :
        in: {  // Effet quand "à l'écran"
            opacity: 1,
            x: 0
        },
        out: {  // Transition d'arrivée et de départ
            opacity: 0,
            x: 250,
        }
    };

    return (
        <main>
            <Mouse />
            <motion.div
                className="contact"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{duration: 0.5}}
            >
            <Navigation />
            <Logo />
            <ContactForm />
            <div className="contact-infos">
                <div className="address">
                    <div className="content">
                        <h4>adresse</h4>
                        <p>19 rue de l'église</p>
                        <p>80000 Amiens</p>
                    </div>
                </div>
                <div className="phone">
                    <div className="content">
                        <h4>téléphone</h4>
                        <CopyToClipboard text="0621882443" className="hover">
                            {/* Penser à installer la bibliothèque CopyToClipboard et mettre dans text="" la partie à copier automatiquement au clic*/}
                            <p
                                style={{ cursor: "pointer" }}  // Le curseur de la souris se transforme en pointer au survole
                                className='clipboard'
                                onClick={() => alert("Téléphone copié !")}  // Message (alert) quand texte copié au clic
                            >
                                06 21 88 24 43
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                    <div className="content">
                        <h4>email</h4>
                        <CopyToClipboard text="contact@bubbleweb.fr" className="hover">
                            {/* Penser à installer la bibliothèque CopyToClipboard et mettre dans text="" la partie à copier automatiquement au clic*/}
                            <p
                                style={{ cursor: "pointer" }}  // Le curseur de la souris se transforme en pointer au survole
                                className='clipboard'
                                onClick={() => alert("Email copié !")}  // Message (alert) quand texte copié au clic
                            >
                                contact@bubbleweb.fr
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>
                <SocialNetwork />
                <div className="credits">
                    <p>BubbleWeb<sup><i class="fa-regular fa-copyright fa-2xs"></i></sup> 2023</p>
                </div>
            </div>
            <Buttons left={"/projet-4"} /> {/* props */}
        </motion.div>
        </main >
    );
};

export default Contact;