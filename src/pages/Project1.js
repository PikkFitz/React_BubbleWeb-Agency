import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Buttons from '../components/Buttons';

const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation/>
                <Logo/>

                <Buttons left={"/"} right={"/projet-2"} />  {/* On passe les props left et right */}
            </div>
        </main>
    );
};

export default Project1;