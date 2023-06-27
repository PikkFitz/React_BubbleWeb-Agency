import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {

    // console.log(props);

    return (
        <div className="scroll-bottom">
            {props.left && (  // Si props.left existe
                <NavLink to={props.left} className="left hover">
                    <span>&#10092;</span> {/* Fleche de gauche */}
                </NavLink>
            )}
            {props.right && (  // Si props.right existe
            <NavLink to={props.right} className="right hover">
                <span>&#10093;</span> {/* Fleche de droite */}
            </NavLink>
            )}
        </div>
    );
};

export default Buttons;