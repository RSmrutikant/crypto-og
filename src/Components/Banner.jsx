import React, {useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Images from '../DataSet/ImageSet';
import { gsap } from 'gsap';

export const Banner = () => {
    useEffect(() => {
        gsap.fromTo('.section-1-heading', { scale: 5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "slow(0.7,0.7,0.7,false)" });
      }, []);
  return (
    <section className="section-1 banner">
      <Row>
        <Col xs={12} md={12} xl={12}>
          <video autoPlay muted playsInline="playsinline" loop={true} style={{width: "-webkit-fill-available"}}>
            <source src={Images.BannerVid} type="video/mp4" />
        </video>
        <div className="section-1-heading">Crypto OG's</div>
        </Col>
      </Row>
    </section>
  );
};