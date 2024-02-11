import React, {useEffect} from 'react';
import {Container, Row, Col } from "react-bootstrap";
import Images from '../DataSet/ImageSet';
import { gsap } from 'gsap';


const Feature = () => {

    useEffect(() => {
        const observerCallback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // console.log('Target element is in view!');
              observer.unobserve(entry.target);
              gsap.fromTo(entry.target, {
                y: 500,
                opacity: 0
              }, {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "linear"
              });
            } else {
              // console.log('Target element is out of view!');
            }
          });
        };
    
        const targetElement = document.querySelector('.feature-card-wrapper');
        const observer = new IntersectionObserver(observerCallback);
        observer.observe(targetElement);
    
        // Cleanup function
        return () => {
          observer.disconnect();
        };
      }, []);     
    
  return (
    <div className='section-2 feature-section' id="feature">
        <Container className='feature-card-wrapper' style={{position: "relative", zIndex: 1}}>
            <Row>
            <Col xs={12} md={6} xl={12} style={{display: "flex", justifyContent:"center"}}>
            <img className='feature-setting-img' src={Images.SettingsFeature} alt="setting-fet" />
            </Col>
            <h1 className='feature-heading'>Features</h1>
                <Col xs={12} md={6} xl={4} className="d-flex">
                <div className='feature-card'>
                    <img src={Images.featureStar} alt="card-icon" />
                    <h1>Multi-sig support</h1>
                    <p>This allows multiple users to sign a transaction before it can be executed, providing an additional layer of security.</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="d-flex">
                <div className='feature-card'>
                    <img src={Images.featureStar} alt="card-icon"/>
                    <h1>Card Heading</h1>
                    <p>The impact on data accuracy and reporting in financial planning at Rapid7<br/> - Explore real-world examples of how integrated HCM and Adaptive Planning streamlines HR processes</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="d-flex">
                <div className='feature-card'>
                    <img src={Images.featureStar} alt="card-icon"/>
                    <h1>Hardware wallet integration</h1>
                    <p>This allows users to store their private keys on a separate, offline device, making it much more difficult for hackers to steal them.</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="d-flex">
                <div className='feature-card'>
                    <img src={Images.featureStar} alt="card-icon"/>
                    <h1>Built-in exchanges</h1>
                    <p>This allows users to buy, sell and trade cryptocurrencies directly from their wallet, without the need to transfer funds to an exchange.</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="d-flex">
                <div className='feature-card'>
                    <img src={Images.featureStar} alt="card-icon"/>
                    <h1>User-friendly interface</h1>
                    <p>Our super crypto wallet is designed to use and navigate, even for those who are not technically skilled.</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="d-flex">
                <div className='feature-card'>
                    <img src={Images.featureStar} alt="card-icon"/>
                    <h1>Secure and fastest inbuilt Browser-Access</h1>
                    <p>Powerful Secure and fastest inbuilt Browser-Access Defi DApps through our Extension, manage multichain NFTS, get best swap rate.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Feature