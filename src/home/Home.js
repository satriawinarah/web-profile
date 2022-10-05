import './Home.css'
import Header from "../header/Header";
import AboutMe from "../about-me/AboutMe";
import Container from "react-bootstrap/Container";
import Skill from "../skill/Skill";
import OverAllSkill from "../overall-skill/OverAllSkill";
import WorkExperience from "../work-experience/WorkExperience";

const Home = () => (
    <Container className={"shadow-lg custom-container"} style={{padding: '0px'}}>
        <Header/>
        <AboutMe/>
        <Skill/>
        <OverAllSkill/>
        <WorkExperience/>
    </Container>
)

export default Home;