import React, { useEffect } from 'react';

const DynamicText = () => {

    useEffect(() => {
        const target = document.getElementById("text-target");

        let array = ["simple", "clear", "smart", "strong"];   // Liste de mots (/!\ Mots de 6 lettres max pour cet exemple)
        let wordIndex = 0;  // Position du mot dans le tableau
        let letterIndex = 0;  // Position de la lettre dans le mot 

        const createLetter = () => {
            const letter = document.createElement("span");  // Créé un élément span pour chaque lettre
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation = "anim 5s ease forwards";  // anim --> voir style/components/_dynamicText.scss
            letter.textContent = array[wordIndex][letterIndex];  // [position du mot][position de la lettre] 

            setTimeout(() => {
                letter.remove();
            }, 2000);  // 2000 --> Temps du Timeout (2000ms --> Temps avant que la lettre disparaisse)
        };

        const loop = () => {
            setTimeout(() => {
                if (wordIndex >= array.length) // Si on a parcouru tout le tableau (tous les mots)
                {
                    wordIndex = 0;
                    letterIndex = 0;
                    loop();
                }
                else if (letterIndex < array[wordIndex].length) // Tant que nous n'avons pas parcouru toutes les lettres du mot
                {
                    createLetter();  // On créé une lettre
                    letterIndex++;  // On passe à la lettre suivante
                    loop();  // On rappelle la fonction car elle est éxecutée qu'une seule fois
                }
                else  // Si on a parcouru toutes les lettres du mot
                {
                    letterIndex = 0;  // On remet letterIndex à 0
                    wordIndex++;  // On passe au mot suivant
                    setTimeout(loop, 2000);  // On relance la fonction loop () dans 2s;
                }
            }, 80);  // Intervalle de temps entre les lettres
        };
        loop();

    }, []);

    return (
        <span className="dynamic-text">
            <span>Simply</span>
            <span id="text-target">

            </span>
        </span>
    );
};

export default DynamicText;