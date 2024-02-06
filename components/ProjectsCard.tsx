import React from "react";
import { Card, CardBody, Col, Button, CardText } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, descBullets, tech }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3 className="pl-3">{name}</h3>
              <h6 className="pl-3">{tech}</h6>
              <ul>
                {descBullets.map((desc: any) => {
                  return <li key={desc}>{desc}</li>;
                })}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
