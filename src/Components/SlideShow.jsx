import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../DataSet/ImageSet";

export const SlideShow = () => {
  return (
    <section
      className="slide-show"
      id="slideshow"
    >
      <Container>
      <h1 className="show-heading">Explore, Invest & Generate</h1>
      <h1 className="show-heading-2">DIgital Mafia Is Now In Town</h1>
        <Row>
        </Row>
        <Row className="last-section">
          <Col
            xl={{ span: 3, order: 1 }}
            md={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
          >
            <div className="content-img">
              <div className="last-one-img">
                <img
                  className="img-one"
                  src={Images.LastOne}
                  alt="user"
                ></img>
              </div>
            </div>
            <div className="show-content text-one">
              <h5 style={{ lineHeight: 1.5 }}>
              CryptoOGs Token celebrates Bitcoin's founders and the power of decentralized currency. With a capped supply like Bitcoin, it honors crypto pioneers and promotes community governance. By integrating NFTs and supporting blockchain education, CryptoOGs drives decentralized finance forward.
              </h5>
              <a href="#" className="explore-link">Explore Us <span>⟀</span></a>
            </div>
          </Col>
          <Col
            xl={{ span: 6, order: 2 }}
            md={{ span: 12, order: 3 }}
            xs={{ span: 12, order: 3 }}
          >
            <div className="content-img">
              <div>
                <img
                  className="img-two"
                  src={Images.LastTwo}
                  alt="user"
                ></img>
              </div>
            </div>
          </Col>
          <Col
            xl={{ span: 3, order: 2 }}
            md={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
          >
            <div className="show-content col-three">
              <h2 className="third-col-num">
                71K<span classname="plus" style={{color: "#ac010a"}}>+</span><br/>
                <span className="text">Active User</span>
              </h2>
              <h2 className="third-col-num">
                27K<span classname="plus" style={{color: "#ac010a"}}>+</span><br/>
                <span className="text">Mafia's</span>
              </h2>
              <h2 className="third-col-num">
                44K<span classname="plus" style={{color: "#ac010a"}}>+</span><br/>
                <span className="text">Gangster's</span>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
