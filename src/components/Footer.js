import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                       <img src={logo} alt="لوگو" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/waris-ruzi-2ab63090/" target="_blank" > <img src={navIcon1} /> </a>
                            <a href="https://www.behance.net/warisruzi" target="_blank"> <img src={navIcon2} /> </a>
                            <a href="https://www.instagram.com/waris_ruzi" target="_blank"> <img src={navIcon3} /> </a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved Waris Ruzi</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}