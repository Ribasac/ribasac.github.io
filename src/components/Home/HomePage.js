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

export default function HomePage() {
    return (
        <div id="HomePage">
            <NavBar />
            <Hero></Hero>
            <About></About>
            <Me></Me>
            <Work></Work>
            <WorkSection
                Banner={banner1}
                first="Middle"
                second="Stump"
                details="Sports Showroom"
            ></WorkSection>
            <WorkSection
                Banner={banner2}
                first="Forbes"
                second="Chartered Accountant"
                details="Chartered Accountant Firm"
            ></WorkSection>
        </div>
    );
}
