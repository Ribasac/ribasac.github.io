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
                            I help businesses and individuals bring their
                            digital visions to life. I believe that great
                            digital products are born from collaboration and a
                            deep understanding of the problem at hand. I work
                            closely with my clients, listening to their ideas
                            and challenges, to develop tailored solutions that
                            meet their specific needs. My background in web
                            development and machine learning allows me to create
                            robust, scalable systems that not only perform
                            exceptionally well but also provide a seamless and
                            engaging user experience. I'm passionate about the
                            entire process, from brainstorming initial concepts
                            to deploying the final product. I also enjoy
                            collaborating on freelance projects, where I can
                            bring my expertise to a diverse range of challenges
                            and craft digital products that are both beautiful,
                            effective, and perfectly aligned with my client's
                            goals.
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
