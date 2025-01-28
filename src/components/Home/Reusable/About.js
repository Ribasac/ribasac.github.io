import React from "react";
import Container from "../../Reusable/Container";

export default function About() {
    return (
        <Container className="Section About">
            <div
                className="AboutRow AboutRow1"
                data-scroll
                data-scroll-speed="-1.2"
                data-scroll-direction="horizontal"
            >
                Shaping
            </div>
            <div
                className="AboutRow AboutRow2"
                data-scroll
                data-scroll-speed="-1.5"
                data-scroll-direction="horizontal"
            >
                Clever
            </div>
            <div
                className="AboutRow AboutRow3"
                data-scroll
                data-scroll-speed="0.2"
                data-scroll-direction="horizontal"
            >
                Solutions
            </div>
            <div
                className="AboutRow AboutRow4"
                data-scroll
                data-scroll-speed="2"
                data-scroll-direction="horizontal"
            >
                That Make a
            </div>
            <div
                className="AboutRow AboutRow5"
                data-scroll
                data-scroll-speed="-1.6"
                data-scroll-direction="horizontal"
            >
                Timeless Impact
            </div>
        </Container>
    );
}
