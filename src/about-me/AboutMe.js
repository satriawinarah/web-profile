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
                            Work is about how to live a better life and how to give value to humanity and global civilization.
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