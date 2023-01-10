import './Header.css'
import profileImage from './img.jpeg'

import {Row, Container, Col, Image} from "react-bootstrap";

const Header = () => (
    <Container>
        {/*header*/}
        <Row className="header">
            <Col sm={"3"}>
               <Image roundedCircle={true} src={profileImage} className={"profile-image"}>

               </Image>
            </Col>
            <Col lg="6">
                <Row className={"height-50"}>
                    <Col></Col>
                </Row>
                <Row className={"column-name"}>
                    <Col>Satria Winarah test 4</Col>
                </Row>
                <Row className={"column-profession"}>
                    <Col>Fullstack Engineer</Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Col>
        </Row>
    </Container>
)

export default Header;