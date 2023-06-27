import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-content">
                <h2>Erreur 404</h2>
                <NavLink to="/"> {/* = lien vers l'accueil */}
                    <h3>Retour à l'accueil <i className="fa-solid fa-house"></i></h3> 
                    {/* Nécessite un lien pour les fontAwesome, voir dans public/index.html */}
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;