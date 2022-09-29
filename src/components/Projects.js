import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard  } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
          title: "ھاۋارايى ئەپى",
          description: "SwfitUI & WeatherKit REST API ",
          imgUrl: projImg1,
        },
        {
          title: "ئۇنىۋېرسال ئەپ",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "تاكسى چاقىرىش ئەپى",
          description: "iOS & Android",
          imgUrl: projImg3,
        },
        {
          title: "ۋېلسىپىت ھەيدەش ئويۇنى",
          description: "Swift",
          imgUrl: projImg4,
        },
        {
          title: "ئۇيغۇرچە كىرگۈزگۈچ",
          description: "ئەقلى ئىقتىدارلىق كىرگۈزگۈچ",
          imgUrl: projImg5,
        },
        {
          title: "چىنىقىش ئەپى",
          description: " كۈندە چىنىقىشنى توختاتماڭ ",
          imgUrl: projImg6,
        },
      ];

      const webprojects = [
        {
          title: "ئۇيغۇر رېستۇران بېتى",
          description: "تاماق زاكاش قىلىش ۋە تەشۋىقات بېتى ",
          imgUrl: projImg7,
        },

        {
          title: "  سودام ئەپى تورى",
          description: "سودا ئېپىنى چۈشۈرۈش بېتى",
          imgUrl: projImg8,
        },

        {
          title: "ئەپلىرىم بېتى",
          description: "ئەپلرىىم تەشۋىقات بېتى",
          imgUrl: projImg9,
        },
      ];

      const uiprojects = [
        {
          title: " ئورالما قاپ لايىھەسى ",
          description: "تەييار يىمەلىك ئورالما قېپى",
          imgUrl: projImg10,
        },

        {
          title: "قورغان قوغداش ئويۇنى",
          description: "ئويۇن كۆرۈنمە يۈزى",
          imgUrl: projImg11,
        },

        {
          title: "پروگىراممىرلار يىغىلىشى",
          description: "پروگىراممىىرلار ۋە ئەسەرلىرى تونۇشتۇردىغان بەت",
          imgUrl: projImg12,
        },
      ];

    return (
        <section className="projects" id="projects">
            <Container>
              <Row>
                <Col size={12}>
                  <TrackVisibility>
                     {({ isVisible }) =>
                      <div className={isVisible  ? "animate__animated animate__bounce" : "" }>
                      <h2>ئەسەرلىرىم</h2>
                      <p>ھازىرغىچە يەككە تور ۋە شىركەت ئۈچۈن لايىھەلەپ بەرگەن ئەپ ۋە تور بىكەتلەر بولۇپ 30دىن ئاشىدۇ.
                        ھەر بىر تۈرگە كېتىدىغان پروگرامما تىلى ئوخشىمىغان 
                        ئاساستا ئىقتىدارىمۇ پەرقلىق.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ئەپلرىم</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> تور بىكەتلەر </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"> UI/UX </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((projects, index) => {
                                    return (
                                      <ProjectCard 
                                        key={index}
                                        {...projects}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                            {
                                webprojects.map((webprojects, index) => {
                                    return (
                                      <ProjectCard 
                                        key={index}
                                        {...webprojects}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third"> 
                       <Row>
                            {
                                uiprojects.map((uiprojects, index) => {
                                    return (
                                      <ProjectCard 
                                        key={index}
                                        {...uiprojects}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                  </div> }
                </TrackVisibility>
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}