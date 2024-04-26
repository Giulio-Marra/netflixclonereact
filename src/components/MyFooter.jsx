import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <div>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ color: "#8b8c8b", fontSize: "1.5rem" }}
            className="iconSocial"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#8b8c8b", fontSize: "1.5rem" }}
            className="iconSocial"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#8b8c8b", fontSize: "1.5rem" }}
            className="iconSocial"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#8b8c8b", fontSize: "1.5rem" }}
            className="iconSocial"
          />
        </div>
        <Row>
          <Col md={3} className="d-flex flex-column">
            <a
              href="#audio-subtitles"
              className="list-group-item text-secondary"
            >
              Audio and subtitles
            </a>
            <a href="#media-center" className="list-group-item text-secondary">
              Media Center
            </a>
            <a href="#privacy" className="list-group-item text-secondary">
              Privacy
            </a>
            <a href="#contact-us" className="list-group-item text-secondary">
              Contact Us
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column">
            <a
              href="#audio-description"
              className="list-group-item text-secondary"
            >
              Audio Description
            </a>
            <a
              href="#investor-relations"
              className="list-group-item text-secondary"
            >
              Investor Relations
            </a>
            <a href="#legal-notices" className="list-group-item text-secondary">
              Legal Notices
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column">
            <a href="#help-center" className="list-group-item text-secondary">
              Help Center
            </a>
            <a href="#jobs" className="list-group-item text-secondary">
              Jobs
            </a>
            <a
              href="#cookie-preferences"
              className="list-group-item text-secondary"
            >
              Cookie Preferences
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column">
            <a href="#gift-cards" className="list-group-item text-secondary">
              Gift Cards
            </a>
            <a href="#terms-of-use" className="list-group-item text-secondary">
              Terms of Use
            </a>
            <a
              href="#corporate-info"
              className="list-group-item text-secondary"
            >
              Corporate Information
            </a>
          </Col>
        </Row>
        <button className="btn border rounded-0 m-2 ms-0 text-secondary">
          Service Code
        </button>
        <p>
          © 1997-2019 Netflix, inc. {String.fromCharCode(123)}iqRtS23674627
          {String.fromCharCode(125)}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
