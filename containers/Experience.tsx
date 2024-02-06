import React from "react";
import { experience } from "../portfolio";
import { Col, Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    experience && (
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Experience</h4>
              </div>
            </div>
            <Row className="row-grid align-items-start">
              {experience.map((data, i) => {
                return (
                  <Col key={i} lg={6}>
                    <ExperienceCard key={i} {...data} />
                  </Col>)
              })}
            </Row>
          </Container>
        </section>
    )
  );
};

export default Experience;
