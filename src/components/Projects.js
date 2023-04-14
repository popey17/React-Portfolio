import ProjectCard from "./ProjectCard";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import TrackVisibility from "react-on-screen";

const Projects = () => {

    const projects =  [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]

    return ( 
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible })=>
                            <div className={isVisible? 'animate__animated animate__slideInUp':'project-description'}>
                                <h2>Projects</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem repellendus perspiciatis, odit voluptatum harum voluptas possimus sed quae nostrum nobis commodi, veritatis animi non voluptate placeat ullam necessitatibus, quaerat corrupti?</p>
                            </div>
                        }
                    </TrackVisibility>

                        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 jusify-content-center align-items-center" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index)=>{
                                                return (
                                                    <ProjectCard key={index} {...project}/>

                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index)=>{
                                                return (
                                                    <ProjectCard key={index} {...project}/>

                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects.map((project, index)=>{
                                                return (
                                                    <ProjectCard key={index} {...project}/>

                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
     );
}
 
export default Projects;