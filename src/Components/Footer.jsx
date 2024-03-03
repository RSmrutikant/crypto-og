import React from 'react'
import Images from '../DataSet/ImageSet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
    <section className="contact-area" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">
                        <a href="#"><img src={Images.Logo} alt="logo" /></a>
                        <p>Empowering CryptoOGs: A Beacon for Decentralization<br/><br/>CryptoOGs Token celebrates Bitcoin's founders and the power of decentralized currency. With a capped supply like Bitcoin, it honors crypto pioneers and promotes community governance. By integrating NFTs and supporting blockchain education, CryptoOGs drives decentralized finance forward.</p>
                        <div className="hr"></div>
                        <h6>1120 Lorem ipsum dolor sit amet, KC 179050, India.</h6>
                        <h6>+91 2345 6789 12<span>|</span>+91 1234 5634 45</h6>
                        <div className="contact-social">
                            <ul>
                                <li><a className="hover-target" href="#?"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                <li><a className="hover-target" href="#?"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a className="hover-target" href="#?"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a className="hover-target" href="#?"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a className="hover-target" href="#?"><FontAwesomeIcon icon={faTelegram} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p>Copyright &copy; 2024 Cypto Og's All Rights Reserved.</p>
    </footer>
    </div>
  )
}

export default Footer