import React, { useEffect, useRef } from "react";
import Container from "../../Reusable/Container";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Me() {
    const scalingDivRef = useRef(null);
    const { scroll } = useLocomotiveScroll(); // Get locomotive instance from context

    useEffect(() => {
        if (!scroll) return;

        scroll.on("scroll", (obj) => {
            const scrollY = obj.scroll.y;
            const scaleFactor = 0.6 + scrollY * 0.0003;
            // Adjust for smoothness
            const newScale = Math.min(scaleFactor, 1); // Limit scale size

            if (scalingDivRef.current) {
                scalingDivRef.current.style.transform = `scale(${newScale})`;
            }
        });

        return () => {
            scroll.off("scroll");
        };
    }, [scroll]);

    return (
        <Container className="Section Me column">
            <div
                className="MeContainer column"
                data-scroll
                ref={scalingDivRef}
                style={{
                    transition: "transform 0.1s ease-out",
                }}
            >
                <div className="MeAbout row">
                    <h1>
                        A<br />b<br />o<br />u<br />t
                    </h1>
                    <div className="column MeRight">
                        <h2>
                            Over the years, I have worked on web development and
                            machine learning projects, designing and building
                            scalable solutions that prioritize performance,
                            efficiency, and a seamless user experience. I have
                            also delivered freelance products that seamlessly
                            blend functionality, aesthetics, and modern
                            technology to create impactful digital solutions.
                        </h2>
                        <div className="row MeBottom">
                            <p>
                                Web Development
                                <br />
                                ML Development
                            </p>
                            <p>
                                Say Hello
                                <br />
                                <a href="#">ribasacksd@gmail.com</a>
                            </p>
                            <p>
                                <br />
                                <a href="#">Explore LinkedIn &gt;</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
