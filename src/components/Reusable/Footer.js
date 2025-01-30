import React from "react";
import Container from "./Container";
import Logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
    faPinterestP,
    faLinkedinIn,
    faBehance,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <Container className="Section Footer column">
            <div className="FooterTop row">
                <div className="column FooterLeft">
                    <h1>Let's Talk</h1>
                    <h1>About</h1>
                    <h1>Your</h1>
                    <h1 className="Curv">Project</h1>
                </div>
                <div className="row FooterRight">
                    <a
                        className="ContactCard"
                        href="mailto:ribasacksd@gmail.com"
                    >
                        <div className="ContactInfoCard">
                            ribasacksd@gmail.com
                        </div>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a className="ContactCard" href="tel:+918848219624">
                        <div className="ContactInfoCard">+91 8848219624</div>
                        <FontAwesomeIcon icon={faMobile} />
                    </a>
                    <a
                        className="ContactCard"
                        href="http://wa.me/+918848219624"
                    >
                        <div className="ContactInfoCard">+91 8848219624</div>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </div>
            <div className="column FooterBottom">
                <div className="row BottomRow borderBottom">
                    <div className="row">
                        <h2>Ribas</h2>
                        <h2 className="Curv">Chukkan</h2>
                    </div>
                    <ul className="SocialFooter row">
                        <li>
                            <FontAwesomeIcon icon={faPinterestP} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBehance} />
                        </li>
                    </ul>
                </div>
                <div className="row BottomRow">
                    <p>KERALA, INDIA</p>
                    <div>
                        <span>Blog</span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
