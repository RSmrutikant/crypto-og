import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../DataSet/ImageSet";

export const SlideShow = () => {
    const [currentImage, setCurrentImage] = useState('');
  const imgList = [
    Images.Image1,
    Images.Image2,
    Images.Image3,
    Images.Image4,
    Images.Image5,
    Images.Image6,
    Images.Image7,
    Images.Image8,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomImageIndex = Math.floor(Math.random() * imgList.length);
      setCurrentImage(imgList[randomImageIndex]);
    }, 500);

    return () => clearInterval(intervalId);
  }, [imgList]);

  return (
    <section
      className="slide-show"
      id="slideshow"
      style={{ paddingBlock: "80px" }}
    >
      <Container>
        <Row>
          <Col
            xl={{ span: 6, order: 1 }}
            md={{ span: 12, order: "last" }}
            xs={{ span: 12, order: "last" }}
            className="animate-image-wrapper"
            style={{padding: "20px", border: "2px solid #ddd", borderRadius: "25px"}}
          >
            <div id='animate-image'  style={{backgroundImage: `url('${currentImage}')`}}></div>
          </Col>
          <Col
            xl={{ span: 6, order: 2 }}
            md={{ span: 12, order: "first" }}
            xs={{ span: 12, order: "first" }}
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "justify",
            }}
          >
            <div className="last-section-content">
              <h3>The Safest Coin Ever</h3>
              <h5 style={{ lineHeight: 1.5 }}>
                &nbsp; &nbsp; &nbsp; &nbsp; "CryptoOGs: The Bitcoin Revolution"
                In the early 21st century, Satoshi Nakamoto and a squad of
                crypto OGs birthed Bitcoin. Armed with cryptographic genius and
                a vision for financial freedom, they crafted the world's first
                decentralized currency. Their rebellion against traditional
                finance ignited a global movement, capturing the attention of
                governments, mega-corporations, and the masses. Today, Bitcoin
                stands tall as a symbol of defiance, adopted by the world. The
                OGs' legacy lives on, shaping a decentralized future. The
                Bitcoin revolution is more than a currency; it's a saga written
                by the CryptoOGs, inspiring a new era of financial sovereignty.
                Get ready - the crypto wave is unstoppable! <br />
                🚀 #CryptoOGs #BitcoinRevolution
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
