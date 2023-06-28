import React, { useEffect, useState } from 'react';
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion"; // Fait parti de la bibliothèque framer-motion (installée dans App.js)

const Project = ({ projectNumber }) => {

    // console.log(projectsData);

    const [currentProject] = useState(projectsData[projectNumber]);

    const [left, setLeft] = useState();  // Pour le ramdom-circle
    const [top, setTop] = useState();  // Pour le ramdom-circle
    const [size, setSize] = useState();  // Pour le ramdom-circle


    useEffect(() => {  // Pour le ramdom-circle
        setLeft(Math.floor(Math.random() * 200 + 700) + "px");
        // Position / au bord gauche de l'écran : 700 --> pour avoir un minmum de 700px (+ un nombre de px aléatoire entre 0 et 200px)
        setTop(Math.floor(Math.random() * 200 + 150) + "px");
        // Position / au bord haut de l'écran : 150 --> pour avoir un minmum de 150 (+ un nombre de px aléatoire entre 0 et 200px)
        setSize("scale(" + (Math.random() + 0.7) + ")");
        // Taille du cercle : 0.7 --> échelle de 0.7 au minimum (+ un nombre entre 0 et 1)
    }, [])

    // console.log(currentProject);

    const variants = {  /* Pour Framer-Motion liée à la motion.div ci-dessous */
        initial: {  // Effet de transition d'arrivée
            opacity: 0,
            transition: { duration: 0.5 },
            x: 200,
        },
        visible: {  // Effet quand "à l'écran"
            opacity: 1,
            x: 0,
        },
        exit: {  // Effet de transition de départ
            opacity: 0.4,
            transition: { duration: 0.35 },
            x: -800,
        }
    };

    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],  // Exemple de cubic-bezier
        duration: 0.6,
    };

    const imgAnim = {  // Pour randomiser l'arrivée des images de chaque projet (par le haut, le bas, la gauche ou la droite)
        initial: {  // Effet de transition d'arrivée
            opacity: 0,
            transition: { duration: 0.5 },
            x: Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1),  // Arrivée horizontale
            y: Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1),  // Arrivée verticale
            // Nombre aléatoire (Math.random() > 0.4 ? 1 : -1) : Si supérieur à 0.4 alors 1, sinon -1
            // Pour avoir un signe + ou - dans les transitions d'arrivée de l'image projet
        },
        visible: {  // Effet quand "à l'écran"
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    // console.log(imgAnim);

    return (
        <motion.div
            className="project-main"
            initial="initial"
            animate="visible"
            exit="exit"
            transition={transition}
            variants={variants}
        >
            <div className="project-content">
                <h1>{currentProject.title}</h1>
                <p>{currentProject.date}</p>
                <ul className='languages'>
                    {currentProject.languages.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <motion.div
                className="img-content"
                initial="initial"
                animate="visible"
                transition={{ duration: 1.2 }}
                variants={imgAnim}
            >
                <div className="img-container hover">  {/* Apparait seulement quand on survole l'image (hover) */}
                    <span>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.infos}</p>
                    </span>
                    <img src={currentProject.img} alt={currentProject.title} className='img' />
                </div>
                <div className="button-container">
                    <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover'
                    > {/* target="_blank" rel="noopener noreferer" --> Ouvrir dans un nouvel onglet */}
                        <span className="button">voir le site</span></a>
                </div>
            </motion.div>
            <span className="random-circle" style={{ left, top, transform: size }}>

            </span>
        </motion.div>
    );
};

export default Project;