import Container from "react-bootstrap/Container";
import {Col, ProgressBar, Row} from "react-bootstrap";
import './OverAllSkill.css';

const OverAllSkill = () => {
    const skills = [
        {
            "id": 1,
            "skillName": "Front End",
            "skillValue": 80,
            "color": "success"
        },
        {
            "id": 2,
            "skillName": "Back End",
            "skillValue": 85,
            "color": "info"
        },
        {
            "id": 3,
            "skillName": "Cloud",
            "skillValue": 75,
            "color": "warning"
        },
    ];
    return (<Container className={"bg-white p-4"}>
            <Row className={"p-left-right-40 mb-3"}>
                <Col>
                    <p className={"title"}>Overall Skills</p>
                </Col>
            </Row>
            {
                skills.map((skill) =>
                    <Row className={"p-left-right-40"} key={skill.id}>
                        <Col>
                            <p>{skill.skillName}</p>
                            <ProgressBar className={"mb-3"} now={skill.skillValue} variant={skill.color} label={`${skill.skillValue}`}/>
                        </Col>
                    </Row>
                )
            }
        </Container>
    )
}

export default OverAllSkill;