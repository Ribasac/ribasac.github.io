import React from "react";
import Logo from "../../Assets/logo.png";

export default function NavBar() {
    return (
        <div
            className="NavContainer"
            data-scroll-sticky
            data-scroll-target="#Main"
        >
            <img className="Brand" src={Logo}></img>
            <div className="rightNav row">
                <a href="bottom" className="BookButton" data-scroll-to>
                    Book A Meeting
                </a>
                <div className="NavIcon"></div>
            </div>
        </div>
    );
}
