import React from "react";

import { motion } from "framer-motion";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function Loader({ setLoading }) {
    const vh = window.innerHeight / 100;
    const container = {
        show: {
            transition: {},
        },
        exit: {
            height: 0,
            transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 1,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 100 * vh },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.8,
            },
        },
        exit: {
            height: 0,
            transition: {
                ease: "easeInOut",
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.6,
            },
        },
    };
    return (
        <motion.div className="loader">
            <motion.div
                variants={container}
                onAnimationComplete={() => setLoading(false)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="loader-inner"
            >
                <motion.div
                    variants={item}
                    className="childLoad"
                    id="image-3"
                />
            </motion.div>
        </motion.div>
    );
}
