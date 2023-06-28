import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import Buttons from '../components/Buttons';
import { motion } from "framer-motion"; // Fait parti de la bibliothèque framer-motion (installée dans App.js)

const Home = () => {

    const variants = {  /* Pour Framer-Motion liée à la motion.div ci-dessous */
        initial: {  // Effet de transition d'arrivée
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
        },
        visible: {  // Effet quand "à l'écran"
            opacity: 1,
            x: 0,
        },
        exit: {  // Effet de transition de départ
            opacity: 0,
            x: -100,
        }
    };

    const onDragEnd = () => { /* Fonction vide pour gérer l'événement onDragEnd de Framer-motion */ };

    return (
        <div>
            <Mouse />
            <motion.div
                className="home"
                initial="initial"  // Voir la const variants ci-dessus
                animate="visible"  // Voir la const variants ci-dessus
                exit="exit"  // Voir la const variants ci-dessus
                variants={variants}
                transition={{duration: 0.5}}
            >
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1  // motion. ... --> Balise d'animation Framer-Motion (installée dans App.js)
                            drag
                            onDragEnd={onDragEnd}
                            dragConstraints={{
                                left: -250,
                                right: 950,
                                top: -200,
                                bottom: 250,
                            }}
                        >
                            BubbleWeb Agency
                        </motion.h1>
                        <motion.h2  // motion. ... --> Balise d'animation Framer-Motion (installée dans App.js)
                            drag
                            onDragEnd={onDragEnd}
                            dragConstraints={{
                                left: -250,
                                right: 950,
                                top: -200,
                                bottom: 250,
                            }}
                        >
                            <DynamicText />
                        </motion.h2>
                    </div>
                </div>
                <Buttons right={"/projet-1"} />  {/* On passe la props "right" */}
            </motion.div>
        </div >
    );
};

export default Home;