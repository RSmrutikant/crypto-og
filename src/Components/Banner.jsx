import React, {useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Images from '../DataSet/ImageSet';
import { gsap } from 'gsap';

export const Banner = () => {
    useEffect(() => {
        gsap.fromTo('.section-1-heading', { scale: 5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "slow(0.7,0.7,0.7,false)" });
      }, []);
  return (
    <section className="section-1 banner" id="banner">
      <Row>
      <Col xs={{ span: 12, order: 2 }} md={12} xl={{ span: 6, order: 1 }}>
          <div className="section-1-left">
            <div className="content-wrapper">
              <h1 className="section-1-headings">
              A Tribute to Bitcoin's Founders
              </h1>
              <div className="line"></div>
              <p className="section-1-text">
              CryptoOGs Token, inspired by Satoshi Nakamoto and the original Bitcoin pioneers, celebrates the transformative power of decentralized currency. With a capped supply mirroring Bitcoin's scarcity, this meme project honors the visionaries who paved the way for global adoption. Through community governance and innovative NFT integration, CryptoOGs embodies the spirit of progress and inclusivity in the crypto world.
              </p>
              <h3 className="section-1-subhead">
              Join us as we ride the tide of decentralization, shaping the future of finance.
              </h3>
              <div className="section-1-button">
                <a class="button-fancy -white" href="#about-us">
                  <span class="arrow"></span>
                  <span class="texts">unlease The Mafia</span>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={12} xl={{ span: 6, order: 2 }}>
          <video autoPlay muted playsInline="playsinline" loop={true} style={{width: "-webkit-fill-available"}}>
            <source src={Images.BannerVid} type="video/mp4" />
        </video>
        </Col>
      </Row>
    </section>
  );
};