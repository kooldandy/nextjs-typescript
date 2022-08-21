import Heading from "@components/atoms/Heading";
import { HeadingEnum, INotFound } from "@interfaces/index";    
import Link from "next/link";
import React from "react";
import { Container, Row } from "react-bootstrap";

const NotFound = (props: INotFound) => {
    const{h1, h2, message, link, linkMessage } = props;
  return (
    <Container className="d-flex align-items-center justify-content-center h-100">
      <Row>
        <div className="col-md-12">
          <div className="error-template">
            <Heading type={HeadingEnum.H1}>{h1}</Heading>
            <Heading type={HeadingEnum.H2}>{h2}</Heading>
            <div className="error-details">
              {message}
            </div>
            <div className="mt-2">
              <Link href={link}>
                <span className="btn btn-primary btn-lg">{linkMessage}</span>
              </Link>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
