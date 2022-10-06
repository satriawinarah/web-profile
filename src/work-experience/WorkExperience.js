import {Row, Container, Col, Card} from "react-bootstrap";
import "./WorkExperience.css"
import GojekLogo from '../images/gojek-logo.jpeg'
import AllianzLogo from '../images/allianz-logo.jpeg'
import L7Logo from '../images/l7-logo.jpeg'
import FIFLogo from '../images/fif-logo.jpeg'

const WorkExperience = () => {
    const companies = [
        {
            "name": "Gojek",
            "period": "Jan 2022 - Present",
            "job": "Software Engineer",
            "logo": GojekLogo,
            "highlight1": "Commerce Enablement",
            "highlight2": "Liberty Feature Team - GoStore"
        },
        {
            "name": "Allianz Indonesia",
            "period": "Oct 2022 - Dec 2021",
            "job": "Fullstack Software Engineer",
            "logo": AllianzLogo,
            "highlight1": "Payment Solution",
            "highlight2": "Receivable and Payable"
        },
        {
            "name": "L7 Systems",
            "period": "Dec 2017 - Oct 2019",
            "job": "Fullstack Software Engineer",
            "logo": L7Logo,
            "highlight1": "Vendis App",
            "highlight2": "Vendis Dashboard"
        },
        {
            "name": "FIF Group",
            "period": "Feb 2016 - Dec 2017",
            "job": "Java Web Programmer",
            "logo": FIFLogo,
            "highlight1": "ITMS (IT Management System)",
            "highlight2": "Inhouse Project"
        }
    ];
    return (
        <Container className={"p-4 mb-3"}>
            <Row className={"p-left-right-40 mb-3"}>
                <Col>
                    <p className={"title"}>Work Experience</p>
                </Col>
            </Row>
            <Row className={"p-left-right-40"}>
                {
                    companies.map((company) =>
                        <Col className={"mb-4"}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Img variant={"top"} src={company.logo} className={"mb-2"}/>
                                    <Card.Title>{company.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{company.period}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted text-italic">{company.job}</Card.Subtitle>
                                    <Card.Text>
                                        {company.highlight1}
                                        <br/>
                                        {company.highlight2}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default WorkExperience;