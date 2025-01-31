import React, { useEffect, useState } from "react";
import NavBar from "../Reusable/NavBar";
import Container from "../Reusable/Container";
import Hero from "./Reusable/Hero";
import About from "./Reusable/About";
import Me from "./Reusable/Me";
import Work from "./Reusable/Work";
import WorkSection from "./Reusable/WorkSection";
import banner1 from "./Assets/Tennis.jpg";
import banner2 from "./Assets/forbes.jpg";
import banner3 from "./Assets/CalFit.jpg";
import Services from "./Reusable/Services";
import Footer from "../Reusable/Footer";
import PageProgress from "../Reusable/PageProgress";
import GoTop from "../Reusable/GoTop";
import NavMenu from "../Reusable/NavMenu";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Loader from "../Reusable/Loader";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div key="loader">
                    <Loader setLoading={setLoading} />
                </motion.div>
            )}
            <motion.div id="HomePage">
                <NavBar />
                {/* <NavMenu></NavMenu> */}
                <Hero></Hero>
                <About></About>
                <Me></Me>
                <Services></Services>
                <Work></Work>
                <WorkSection
                    Banner={banner3}
                    first="CalFit"
                    second="Fitness"
                    details="GenAI Fitness App"
                ></WorkSection>
                <WorkSection
                    Banner={banner2}
                    first="Forbes"
                    second="Chartered Accountant"
                    details="Chartered Accountant Firm"
                ></WorkSection>
                <WorkSection
                    Banner={banner1}
                    first="Middle"
                    second="Stump"
                    details="Sports Showroom"
                ></WorkSection>
                <GoTop></GoTop>
                {/* <PageProgress></PageProgress> */}
                <Footer></Footer>
            </motion.div>
        </AnimatePresence>
    );
}
