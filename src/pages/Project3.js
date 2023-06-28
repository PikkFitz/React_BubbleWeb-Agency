import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Buttons from '../components/Buttons';
import Project from '../components/Project';

const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2} />  {/* 2 = Numéro du projet (dans le tableau projectsData, non l'ID) --> props envoyée à Project.js */}
                <Buttons left={"/projet-2"} right={"/projet-4"} />  {/* On passe les props left et right */}
            </div>
        </main>
    );
};

export default Project3;