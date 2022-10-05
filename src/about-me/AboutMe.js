import './AboutMe.css'
import {Container, Col, Row} from "react-bootstrap";

const AboutMe = () => (
    <Container className={"bg-white p-4"}>
        <Row className={"padding-left-40"}>
            <Col>
                <Row>
                    <Col className={"text-about-me"}>
                        About Me
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            I’m Sri Mawwanah Satria Winarah, but my friends call me Satria or 'Array',
                            maybe because I am a skilled Front-end and Back-end Developer.
                            Still, I am passionate about Cloud Computing.
                        </p>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row className={"info-detail-row"}>
                    <Col className={"text-birth-email"} md="4">Age</Col>
                    <Col>{new Date().getFullYear() - 1995}</Col>
                </Row>
                <Row>
                    <Col className={"text-birth-email"} md="4">Email</Col>
                    <Col>swinarah@gmail.com</Col>
                </Row>
            </Col>
        </Row>
    </Container>
)

export default AboutMe;