import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";

import {Link} from "react-router-dom"

const TourCard = ({ tourcard }) => {
  return (
    <Card>
      <CardImg top width="100%" src={tourcard.imgCard1} alt="img" />
      <CardBody>
        <Link to="tour" state={{place : tourcard}} >
        <Button outline color="secondary" className="float-right">
          Read more
        </Button>
        </Link>
        <CardTitle>{tourcard.title}</CardTitle>
        <CardSubtitle>{tourcard.address}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default TourCard;
