import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBehance,
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function NavMenu() {
    return (
        <div className="NavMenu Section row">
            <div className="NavMenuContainer column">
                <ul className="column">
                    <li>
                        <span className="Curv">01</span> About
                    </li>
                    <li>
                        <span className="Curv">02</span> Services
                    </li>
                    <li>
                        <span className="Curv">03</span> Work
                    </li>
                </ul>
            </div>
            <div className="NavMenuRight row">
                <ul className="row">
                    <li className="connectli Curv">Connect</li>
                    <li>
                        <FontAwesomeIcon icon={faBehance} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
