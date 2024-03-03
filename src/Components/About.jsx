import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../DataSet/ImageSet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AboutUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const updateScrollTriggerSettings = () => {
      if (window.matchMedia("(max-width: 600px)").matches) {
        // console.log("Mobile View Enabled")
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-us",
            start: "top 60%",
            end: "top 0%",
            scrub: true,
            markers: false,
          },
          delay: 3,
        });
        // Animation for about-section-1
        t1.fromTo(
          ".about-section-1",
          {
            y: 400,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "slow(0.7,0.7,0.7,false)",
          }
        ).fromTo(
          ".about-content-img",
          {
            scale: 0.8,
            opacity: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
          }
        );

        // Animation for about-section-2
        t1.fromTo(
          ".about-section-2",
          {
            y: 600,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "slow(0.7,0.7,0.7,false)",
          }
        ).fromTo(
          ".about-content-img2",
          {
            scale: 0.8,
            opacity: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
          }
        );
      } else {
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-us",
            start: "top 70%",
            end: "top -30%",
            scrub: true,
            markers: false,
          },
          delay: 3,
        });
        // Animation for about-section-1
        t1.fromTo(
          ".about-section-1",
          {
            y: 400,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "slow(0.7,0.7,0.7,false)",
          }
        ).fromTo(
          ".about-content-img",
          {
            scale: 0.8,
            opacity: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
          }
        );

        // Animation for about-section-2
        t1.fromTo(
          ".about-section-2",
          {
            y: 600,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "slow(0.7,0.7,0.7,false)",
          }
        ).fromTo(
          ".about-content-img2",
          {
            scale: 0.8,
            opacity: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
          }
        );
      }
    };

    // Call the function initially
    updateScrollTriggerSettings();

    // Add event listener to update ScrollTrigger settings when window is resized
    window.addEventListener("resize", updateScrollTriggerSettings);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateScrollTriggerSettings);
    };
  }, []);
  return (
    <section
      className="about-us"
      id="about-us"
      style={{ paddingBlock: "80px" }}
    >
      <Container>
        <Row style={{ marginBottom: "100px" }} className="about-section-1">
          <Col
            xl={{ span: 3, order: 1 }}
            md={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
          >
            <div className="about-content-img">
              <div>
                <img
                  className="img-one"
                  src={Images.Image1}
                  alt="user"
                ></img>
              </div>
            </div>
            <div className="about-content text-one">
              <h3 >Special  <span style={{color:"#ac010a"}}>Mafia's</span> Skills Test for you</h3>
              <h5 style={{ lineHeight: 1.5 }}>
                "CryptoOGs: The Bitcoin Revolution"
                In the early 21st century, Satoshi Nakamoto and a squad of
                crypto OGs birthed Bitcoin. Armed
              </h5>
            </div>
          </Col>
          <Col
            xl={{ span: 6, order: 2 }}
            md={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
          >
            <Row>
              <Col 
              xl={{ span: 12, order: 1 }}
              md={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}>
              <div className="about-content text-two">
              <h3>Challenge A <span style={{color:"#ac010a"}}>Battle</span> To Yourself</h3>
              <h5 style={{ lineHeight: 1.5 }}>
                "CryptoOGs: The Bitcoin Revolution"
                In the early 21st century, Satoshi Nakamoto and a squad of
                crypto OGs birthed Bitcoin. 
              </h5>
            </div>
              </Col>
              <Col
              xl={{ span: 12, order: 2 }}
            md={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}>
                
            <div className="about-content-img">
              <div>
                <img
                  className="img-two"
                  src={Images.Image4}
                  alt="user"
                ></img>
              </div>
            </div>
              </Col>
            </Row>
          </Col>
          <Col
            xl={{ span: 3, order: 2 }}
            md={{ span: 12, order: 3 }}
            xs={{ span: 12, order: 3 }}
          >
           <div className="about-content-img">
              <div>
                <img
                  className="img-three"
                  src={Images.Image2}
                  alt="user"
                ></img>
              </div>
            </div>
            <div className="about-content text-three">
              <h3>Every <span style={{color:"#ac010a"}}>Mystrey</span> Is A New Adventure!</h3>
              <h5 style={{ lineHeight: 1.5 }}>
                "CryptoOGs: The Bitcoin Revolution"
                In the early 21st century, Satoshi Nakamoto and a squad of
                crypto OGs birthed Bitcoin. 
              </h5>
            </div>
          </Col>
        </Row>
        <Row className="about-section-2">
          <Col
            xl={{ span: 7, order: 1 }}
            md={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="about-content">
              <h3>Guess...<br/>Who is the <span className="red-text">Mafia</span>?</h3>
              <h5  style={{ lineHeight: 1.5 }}>
                The Identity Theft Resource Center says
                that digital wallets rely on proven security measures such as
                two-factor authentication and PINs that can only be used once.
                Wallets also use encryption technology to scramble the financial
                and password information of users.
              </h5>
              <Row className="d-flex flex-content">
              <Col>
              <ul style={{fontSize: "18px"}}>
                <li>Buy crypto with card</li>
                <li>
                  Store your assets on Super Wallet Chain with Super wallet
                </li>
                <li>Built-in exchanges</li>
                <li>Easy Interface</li>
                <li>Private and secure</li>
              </ul>
              </Col>
              <Col><ul className="right-list">
                <li>- Guess</li>
                <li style={{color: "#ac010a", fontWeight: 600}}>- Convince</li>
                <li>- Defend</li>
                <li>- Win</li>
              </ul></Col>
              </Row>
            </div>
          </Col>
          <Col
            xl={{ span: 5, order: 2 }}
            md={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
          >
            <div className="about-content-img2">
              <div>
                <img
                  src={Images.About2}
                  alt="user"
                ></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
