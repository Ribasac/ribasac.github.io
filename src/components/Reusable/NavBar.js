import React, { useState } from "react";
import Logo from "../../Assets/logo.png";

export default function NavBar({ navState, setNav }) {
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
                {!navState ? (
                    <div className="NavIcon" onClick={() => setNav(true)}></div>
                ) : (
                    <div className="NavClose" onClick={() => setNav(false)}>
                        <div className="close1"></div>
                        <div className="close2"></div>
                    </div>
                )}
            </div>
        </div>
    );
}
