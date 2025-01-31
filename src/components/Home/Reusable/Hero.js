import React from "react";
import Container from "../../Reusable/Container";

export default function Hero() {
    return (
        <Container className="Section Hero">
            <div className="HeroBG" data-scroll data-scroll-speed="-4"></div>
            <div
                className="HeroHeader"
                data-scroll
                data-scroll-speed="0"
                id="hero"
            >
                RIBAS.
            </div>
            <div className="HeroSub" data-scroll data-scroll-speed="0">
                Chukkan
            </div>
            <div className="HeroBottom" data-scroll data-scroll-speed="0">
                Developer & <br /> ML Enthusiast
            </div>
        </Container>
    );
}
