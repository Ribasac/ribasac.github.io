import React from "react";
import Container from "../../Reusable/Container";

export default function WorkSection(props) {
    return (
        <Container className={"Section WorkSection " + props.className}>
            <div
                className="WorkBG"
                data-scroll
                data-scroll-speed="-4"
                style={{ backgroundImage: `url(${props.Banner})` }}
            ></div>
            <div className="WorkHeader" data-scroll data-scroll-speed="0">
                {props.first}
            </div>
            <div className="HeroSub" data-scroll data-scroll-speed="0">
                {props.second}
            </div>
            <div className="HeroBottom" data-scroll data-scroll-speed="0">
                {props.details}
            </div>
        </Container>
    );
}
