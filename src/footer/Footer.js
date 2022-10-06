import Container from "react-bootstrap/Container";
import "./Footer.css"
import LinkedinIcon from "../images/linkedin-icon.svg"
import GithubIcon from "../images/github-icon.svg"
import {Anchor, Image} from "react-bootstrap";

const Footer = () => (
    <Container className={"text-center"}>
        <p className={"footer-name h3 mt-1"}>Satria Winarah</p>
        <Anchor href={"https://www.linkedin.com/in/satria-winarah/"}>
            <Image src={LinkedinIcon} alt={"LinkedIn"} width={16} height={16}/>
        </Anchor>
        &nbsp;&nbsp;&nbsp;
        <Anchor href={"https://github.com/satriawinarah"}>
            <Image src={GithubIcon} alt={"Github"} width={16} height={16}/>
        </Anchor>
        <br/><br/>
    </Container>
)

export default Footer;