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
      <Col xs={{ span: 12, order: 2 }} md={12} xl={{ span: 6, order: 1 }}>
          <div className="section-1-left">
            <div className="content-wrapper">
              <h1 className="section-1-headings">
                Transformation starts with your people.
              </h1>
              <div className="line"></div>
              <p className="section-1-text">
                We believe that every individual has a unique story to tell and
                we are passionate about capturing it. Our team of experienced
                photographers will We believe in the transformative potential of
                every individual and team member. Our goal is to create a
                workplace where individuals can grow professionally We believe
                that every individual has a unique story to tell and we are
                passionate about capturing it through our work.
              </p>
              <h3 className="section-1-subhead">
                Powering confident decisions, for life.
              </h3>
              <div className="section-1-button">
                <a class="button-fancy -white" href="#?">
                  <span class="arrow"></span>
                  <span class="texts">Explore opportunities</span>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={12} xl={{ span: 6, order: 2 }}>
          <video autoPlay muted playsInline="playsinline" loop={true} style={{width: "-webkit-fill-available"}}>
            <source src={Images.BannerVid} type="video/mp4" />
        </video>
        {/* <div className="section-1-heading">Crypto OG's</div> */}
        </Col>
      </Row>
    </section>
  );
};