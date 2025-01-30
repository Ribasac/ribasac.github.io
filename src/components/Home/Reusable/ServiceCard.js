import React from "react";
import Container from "../../Reusable/Container";

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
            <div
                className="WorkHeader shadowH"
                data-scroll
                data-scroll-speed="0"
            >
                {props.first}
            </div>
            <div className="HeroSub shadowH" data-scroll data-scroll-speed="0">
                {props.second}
            </div>
        </div>
    );
}
