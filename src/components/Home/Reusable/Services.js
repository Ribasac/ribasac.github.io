import React, { useEffect, useRef } from "react";
import Container from "../../Reusable/Container";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ServiceCard from "./ServiceCard";
import banner1 from "../Assets/web.mp4";
import banner2 from "../Assets/ml.mp4";
import banner3 from "../Assets/graphics.mp4";

export default function Services() {
    const sectionRef = useRef(null);
    const { scroll } = useLocomotiveScroll();
    // const quaterRef = useRef(null);
    // const topRef = useRef(null);
    // // const containerRef = useRef(null);
    const headRef = useRef(null);

    useEffect(() => {
        //     const section = sectionRef.current;
        //     const rect = section.getBoundingClientRect();
        //     const offsetTop = rect.top;
        //     const sectionHeight = section.offsetHeight;
        //     const sectionQuater = sectionHeight / 4;
        //     quaterRef.current = sectionQuater;
        //     topRef.current = offsetTop;
        //     console.log(sectionQuater);
        if (!scroll || !sectionRef.current) return;

        scroll.on("scroll", (args) => {
            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const scrollY = args.scroll.y;
            const offsetTop = rect.top + scrollY;
            const sectionHeight = section.offsetHeight;

            const scrollWidth = section.scrollWidth;

            // Calculate horizontal scroll
            let progress = (scrollY - offsetTop) / sectionHeight;

            progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1

            //     //         section.style.transform = `translateX(-${
            //     //             progress * (scrollWidth - window.innerWidth)
            //     //         }px)`;
            //     //         const container = containerRef.current;
            const head = headRef.current;
            //     //         // container.style.backgroundColor = `rgba(0,0,0,${Math.min(
            //     //         //     progress * 5,
            //     //         //     0.8
            //     //         // )})`;
            head.style.opacity = `${1 - Math.min(progress * 16, 1)}`;
        });
    }, [scroll]);

    return (
        <Container className="Section Services">
            {/* <div
                className="ServicesBG"
                data-scroll
                data-scroll-speed="-4"
                data-scroll-sticky
                data-scroll-target=".Services"
            ></div> */}
            <div
                className="ServicesStart column"
                data-scroll
                data-scroll-sticky
                data-scroll-target=".Services"
                ref={headRef}
            >
                {/* <div
                    className="ServicesHeader"
                    data-scroll
                    data-scroll-speed="0"
                >
                    What
                </div>
                <div className="ServicesSub" data-scroll data-scroll-speed="0">
                    I Do
                </div> */}
                <h1 className="Curv">What</h1>
                <h1>I Do</h1>
            </div>
            <div className="ServicesWrapper row" ref={sectionRef}>
                <div
                    className="ServiceCardContainer row"
                    // ref={containerRef}
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target=".Services"
                >
                    <ServiceCard
                        Banner={banner1}
                        first="Building"
                        second="Websites"
                        details="Need a website that doesn't look like it was built in 1999?"
                        delay="0.1"
                    ></ServiceCard>
                    <ServiceCard
                        Banner={banner2}
                        first="Machine"
                        second="Learning"
                        details="Want to harness the power of AI but don't know where to start?"
                        delay="0.09"
                    ></ServiceCard>
                    <ServiceCard
                        Banner={banner3}
                        first="Graphic"
                        second="Design"
                        details="Need eye-catching visuals that make your brand pop?"
                        delay="0.08"
                    ></ServiceCard>
                </div>
            </div>
        </Container>
    );
}
