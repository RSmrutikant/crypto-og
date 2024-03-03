import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const LastCards = () => {
  return (
    <div className="section-7-events">
    <Container>
      <h1 className="event-title">What Sets CryptoOGs Apart</h1>
      <p className="event-subtitle">Through the blend of community engagement, philanthropy, and innovative features, CryptoOGs aims to stand out as a meme project with a purpose, honoring the trailblazers of the crypto space.</p>
      <Row>
        <Col xs={12} md={6} xl={6} className="event-card">
          <a href="#?" className="d-flex flex-column h-100">
            <div className="event-content-wrapper">
              <a href="#?" className="head-link">
              Community-Driven:
              </a>
              <p className="date-time">
              CryptoOGs prioritizes community involvement through decentralized governance, allowing token holders to actively participate in decision-making processes.
              </p>
              {/* <div className="event-btn-wrapper">
                <p className="tags">WEBINAR | PAYROLL</p>
                <a href="#?" className="external-arrow">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div> */}
            </div>
          </a>
        </Col>
        <Col xs={12} md={6} xl={6} className="event-card">
          <a href="#?" className="d-flex flex-column h-100">
            <div className="event-content-wrapper">
              <a href="#?" className="head-link">
              Charitable Initiatives:
              </a>
              <p className="date-time">
              The project goes beyond profits, allocating funds to a scholarship fund and charitable causes to contribute positively to society.
              </p>
              {/* <div className="event-btn-wrapper align-self-end">
                <p className="tags">WEBINAR | PAYROLL</p>
                <a href="#?" className="external-arrow">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div> */}
            </div>
          </a>
        </Col>
        <Col xs={12} md={6} xl={6} className="event-card">
          <a href="#?" className="d-flex flex-column h-100">
            <div className="event-content-wrapper">
              <a href="#?" className="head-link">
              Innovative NFT Integration:
              </a>
              <p className="date-time">
              Limited edition NFT drops featuring exclusive OG crypto art, blending the world of digital collectibles with the celebration of blockchain pioneers.
              </p>
              {/* <div className="event-btn-wrapper">
                <p className="tags">WEBINAR | PAYROLL</p>
                <a href="#?" className="external-arrow">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div> */}
            </div>
          </a>
        </Col>
        <Col xs={12} md={6} xl={6} className="event-card">
          <a href="#?" className="d-flex flex-column h-100">
            <div className="event-content-wrapper">
              <a href="#?" className="head-link">
              Educational Focus:
              </a>
              <p className="date-time">
              Establishing the CryptoOGs Scholarship Fund and partnering with educational initiatives to promote blockchain education and awareness.
              </p>
              {/* <div className="event-btn-wrapper">
                <p className="tags">WEBINAR | PAYROLL</p>
                <a href="#?" className="external-arrow">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div> */}
            </div>
          </a>
        </Col>
        <Col xs={12} md={6} xl={6} className="event-card">
          <a href="#?" className="d-flex flex-column h-100">
            <div className="event-content-wrapper">
              <a href="#?" className="head-link">
              Token Capped Supply:
              </a>
              <p className="date-time">
              Mirroring Bitcoin's capped supply of 21 million, CryptoOGs pays homage to the original cryptocurrency and reinforces scarcity.
              </p>
              {/* <div className="event-btn-wrapper">
                <p className="tags">WEBINAR | PAYROLL</p>
                <a href="#?" className="external-arrow">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div> */}
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default LastCards