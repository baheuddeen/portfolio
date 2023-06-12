import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resizeImage from "../../Assets/Projects/resizeImage.png";
import storefront from "../../Assets/Projects/storefront.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resizeImage}
              isBlog={false}
              title="Resize Images"
              description="resize your images using Sharp library. Also impelemnts the integration with
              Google OAuth 2.0 Access APIs to keep tracing your previous images.
              "
              ghLink="https://github.com/baheuddeen/Image-Processing"
              demoLink="https://mbahy.eastus.cloudapp.azure.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storefront}
              isBlog={false}
              title="Storefront BackEnd"
              description="RESTfull APIs for a storefront book. Postgres SQL database is used, Impelemnt of JWT for Auth.
              and good use of middleware.
              "
              ghLink="https://github.com/baheuddeen/Store-API"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
