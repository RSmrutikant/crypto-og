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
            xl={{ span: 5, order: 1 }}
            md={{ span: 12, order: "last" }}
            xs={{ span: 12, order: "last" }}
          >
            <div className="about-content-img">
              <div>
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    border: "2px solid #fff",
                    borderRadius: "20px",
                    backgroundColor: "#ddd",
                  }}
                  src={Images.Image1}
                  alt="user"
                ></img>
              </div>
            </div>
          </Col>
          <Col
            xl={{ span: 7, order: 2 }}
            md={{ span: 12, order: "first" }}
            xs={{ span: 12, order: "first" }}
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "justify",
            }}
          >
            <div className="about-content">
              <h3>About Us</h3>
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
        <Row className="about-section-2">
          <Col
            xl={{ span: 7, order: 1 }}
            md={{ span: 12, order: "first" }}
            xs={{ span: 12, order: "first" }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="about-content">
              <h3>Why we?</h3>
              <h5  style={{ lineHeight: 1.5 }}>
                &nbsp;&nbsp;&nbsp;&nbsp; The Identity Theft Resource Center says
                that digital wallets rely on proven security measures such as
                two-factor authentication and PINs that can only be used once.
                Wallets also use encryption technology to scramble the financial
                and password information of users.
              </h5>
              <ul style={{fontSize: "18px"}}>
                <li>Buy crypto with card</li>
                <li>
                  Store your assets on Super Wallet Chain with Super wallet
                </li>
                <li>Built-in exchanges</li>
                <li>Easy Interface</li>
                <li>Private and secure</li>
              </ul>
            </div>
          </Col>
          <Col
            xl={{ span: 5, order: 2 }}
            md={{ span: 12, order: "last" }}
            xs={{ span: 12, order: "last" }}
          >
            <div className="about-content-img2">
              <div>
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    border: "2px solid #fff",
                    borderRadius: "20px",
                    backgroundColor: "#ddd",
                  }}
                  src={Images.Image2}
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
