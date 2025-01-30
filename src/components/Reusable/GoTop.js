import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function GoTop() {
    const divRef = useRef(null);
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        if (!scroll || !divRef.current) return;
        scroll.on("scroll", (args) => {
            const vh = window.innerHeight;
            const maxScroll = args.limit.y;
            const scrollY = args.scroll.y;
            const rect = divRef.current.getBoundingClientRect();

            if (scrollY >= maxScroll - 320) {
                divRef.current.style.bottom = "12rem";
            } else if (scrollY <= vh) {
                divRef.current.style.right = "-96px";
            } else {
                divRef.current.style.right = "32px";
                divRef.current.style.bottom = "40px";
            }
        });
    });

    return (
        <a
            href="top"
            data-scroll-to
            className="GoTop"
            ref={divRef}
            style={{
                transition: "1s , scale 0.5s",
            }}
        >
            <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </a>
    );
}
