import Container from "react-bootstrap/Container";
import {Col, ProgressBar, Row} from "react-bootstrap";
import './Skill.css';

const Skill = () => {
    const skills = [
        {
            "id": 1,
            "frontEndSkill": "HTML",
            "frontEndValue": 100,
            "backendSkill": "Java",
            "backendValue": 95
        },
        {
            "id": 2,
            "frontEndSkill": "CSS",
            "frontEndValue": 95,
            "backendSkill": "NodeJS",
            "backendValue": 80
        },
        {
            "id": 3,
            "frontEndSkill": "Java Script",
            "frontEndValue": 80,
            "backendSkill": "Golang",
            "backendValue": 80
        },
        {
            "id": 4,
            "frontEndSkill": "ReactJS",
            "frontEndValue": 80,
            "backendSkill": "Cloud",
            "backendValue": 75
        },
        {
            "id": 5,
            "frontEndSkill": "Angular",
            "frontEndValue": 80,
            "backendSkill": "Message Broker",
            "backendValue": 80
        },
        {
            "id": 6,
            "frontEndSkill": "Bootstrap CSS",
            "frontEndValue": 90,
            "backendSkill": "Database",
            "backendValue": 85
        }
    ];
    return (<Container className={"bg-white p-4"}>
            <Row className={"p-left-right-40 mb-3"}>
                <Col>
                    <p className={"title"}>Professional Skills</p>
                </Col>
            </Row>
            {
                skills.map((skill) =>
                    <Row className={"p-left-right-40"} key={skill.id}>
                        <Col>
                            <p>{skill.frontEndSkill}</p>
                            <ProgressBar className={"mb-3"} now={skill.frontEndValue} variant={"success"} label={`${skill.frontEndValue}`}/>
                        </Col>
                        <Col>
                            <p>{skill.backendSkill}</p>
                            <ProgressBar now={skill.backendValue} variant={"info"} label={`${skill.backendValue}`}/>
                        </Col>
                    </Row>
                )
            }
        </Container>
    )
}

export default Skill;