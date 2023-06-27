import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");  // On sélectionne tous les "a" de la class "social-network"

        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`;  // Animation des icones réseaux sociaux (au survole)
            });

            link.addEventListener("mouseleave", () => {
                link.style.transform = "";  // Quand le curseur n'est plus sur les icones, on arrete la transformation 
                                            // Pour que les icones reprennent leur place initiale
            });
        });
    };


    return (
        <div className="social-network">
            <ul className="content">
                <a
                    href="https://www.facebook.com"
                    target="_blank"  // target="blank" --> pour ouvrir le lien dans un nouvel onglet
                    rel="noopener noreferrer"
                    className='hover'
                    onMouseOver={anim}  // Au survole de la souris, on lance la fontion "anim"
                >
                    <li>
                        <i className='fab fa-facebook-f'></i>
                    </li>
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"  // target="blank" --> pour ouvrir le lien dans un nouvel onglet
                    rel="noopener noreferrer"
                    className='hover'
                    onMouseOver={anim}  // Au survole de la souris, on lance la fontion "anim"
                >
                    <li>
                        <i className='fab fa-twitter'></i>
                    </li>
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"  // target="blank" --> pour ouvrir le lien dans un nouvel onglet
                    rel="noopener noreferrer"
                    className='hover'
                    onMouseOver={anim}  // Au survole de la souris, on lance la fontion "anim"
                >
                    <li>
                        <i className='fab fa-instagram'></i>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;