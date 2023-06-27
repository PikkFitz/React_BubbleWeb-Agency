import React, { useEffect } from 'react';


const Mouse = () => {

    useEffect(() => {
        const cursor = document.querySelector(".cursor");  // On sélectionne le curseur de la souris
        // console.log(cursor);

        window.addEventListener('mousemove', (e) => {  // On surveille chaque mouvement du curseur 
            // console.log(e);

            cursor.style.top = e.y + "px";
            // On modifie la propriété CSS "top" de l'élément "cursor" pour qu'il suive la position verticale (y) actuelle de la souris (en pixels px)
            cursor.style.left = e.x + "px";
            // On modifie la propriété CSS "left" de l'élément "cursor" pour qu'il suive la position horizontale (x) actuelle de la souris (en pixels px)
        });

        document.querySelectorAll(".hover").forEach((link) => {  // On récupère tous les éléments ayan la class "hover" (et on les nomme "link")
            // console.log(link);

            link.addEventListener("mouseover", () => {  // Quand on survole un élément
                cursor.classList.add("hovered");
            })
            link.addEventListener("mouseleave", () => {  // Quand on quitte un élément
                cursor.style.transistion = "0.3s ease-out"; // Effet de transistion
                cursor.classList.remove("hovered");  // On enlève la class hovered (survole)
            })

        });  
    }, [])


    return (
        <span className="cursor"></span>
    );
};

export default Mouse;