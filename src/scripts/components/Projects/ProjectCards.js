import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Col,
  Badge,
  CardFooter
} from "reactstrap";

export const ProjectCards = props => {
  const { item, handleClick } = { ...props };
  return (
    <Col xs="6" md="4">
      <Card>
        {
          // <CardImg
          //   top
          //   width="100%"
          //   src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          //   alt="Card image cap"
          // />
        }
        <CardBody>
          <CardTitle className="text-truncate">{item.name}</CardTitle>
          <CardSubtitle>{item.description}</CardSubtitle>
          <div className="wrapper-badge">
            {item.topics.map((topic, index) => {
              return (
                <Badge color="info" key={index}>
                  {topic}
                </Badge>
              );
            })}
          </div>
        </CardBody>
        <CardFooter>
          <Button
            className="button-repo"
            onClick={e => {
              handleClick(e, item.html_url);
            }}
          >
            Open Repo
          </Button>
        </CardFooter>
      </Card>
    </Col>
  );
};
