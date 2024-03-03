import React, {useEffect} from 'react';
import {Container, Row, Col } from "react-bootstrap";
import { gsap } from 'gsap';


const Feature = () => {

    useEffect(() => {
        const observerCallback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target);
              gsap.fromTo(entry.target, {
                y: 300,
                opacity: 0
              }, {
                y: 0,
                opacity: 1,
                duration: 1,
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
            <h1 className='feature-heading'>Features</h1>
                <Col xs={12} md={6} xl={4} className="card-container">
                <h1 className='card-count'>01</h1>
                <div className='feature-card'>
                    <h1>Multi-sig support</h1>
                    <p>This allows multiple users to sign a transaction before it can be executed, providing an additional layer of security.</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="card-container">
                <h1 className='card-count'>02</h1>
                <div className='feature-card'>
                    <h1>Card Heading</h1>
                    <p>The impact on data accuracy and reporting in financial planning at Rapid7<br/> - Explore real-world examples of how integrated HCM and Adaptive Planning streamlines HR processes</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="card-container">
                <h1 className='card-count'>03</h1>
                <div className='feature-card'>
                    <h1>Hardware wallet integration</h1>
                    <p>This allows users to store their private keys on a separate, offline device, making it much more difficult for hackers to steal them.</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="card-container">
                <h1 className='card-count'>04</h1>
                <div className='feature-card'>
                    <h1>Built-in exchanges</h1>
                    <p>This allows users to buy, sell and trade cryptocurrencies directly from their wallet, without the need to transfer funds to an exchange.</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="card-container">
                <h1 className='card-count'>05</h1>
                <div className='feature-card'>
                    <h1>User-friendly interface</h1>
                    <p>Our super crypto wallet is designed to use and navigate, even for those who are not technically skilled.</p>
                </div>
                </Col>
                <Col xs={12} md={6} xl={4} className="card-container">
                <h1 className='card-count'>06</h1>
                <div className='feature-card'>
                    <h1>Secure and fastest inbuilt Browser-Access</h1>
                    <p>Powerful Secure and fastest inbuilt Browser-Access Defi DApps through our Extension, manage multichain NFTS, get best swap rate.</p>
                </div>
                </Col>
            </Row>
            <figure class="circle one"></figure>
            <figure class="circle two"></figure>
            <figure class="circle three"></figure>
            <figure class="circle four"></figure>
        </Container>
    </div>
  )
}

export default Feature