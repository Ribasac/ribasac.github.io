import React, { useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Container(props) {
    const { scroll } = useLocomotiveScroll();
    return (
        <div className={"Container " + props.className} data-scroll-section>
            {props.children}
        </div>
    );
}
