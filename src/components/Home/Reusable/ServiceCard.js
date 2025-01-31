import React from "react";
import Container from "../../Reusable/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";

export default function ServiceCard(props) {
    return (
        <div
            className="WorkSection ServiceCard row"
            data-scroll
            data-scroll-speed="14"
            // style={{ backgroundImage: `url(${props.Banner})` }}
            data-scroll-direction="horizontal"
            data-scroll-target=".Services"
            data-scroll-delay={props.delay}
        >
            <video className="ServiceBG" playsinline autoPlay muted loop>
                <source src={props.Banner} type="video/mp4" />
            </video>
            <div className="goTo">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </div>
            <h1 className="white" data-scroll data-scroll-speed="0">
                {props.first}
            </h1>
            <br />
            <h1 className="Curv white" data-scroll data-scroll-speed="0">
                {props.second}
            </h1>
            <div className="HeroBottom" data-scroll data-scroll-speed="0">
                {props.details}
            </div>
        </div>
    );
}
