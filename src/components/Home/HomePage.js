import React from "react";
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

export default function HomePage() {
    return (
        <div id="HomePage">
            <NavBar />
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
        </div>
    );
}
