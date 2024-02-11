import React from "react";
import { Container } from "react-bootstrap";

const Tokenomics = () => {
  return (
    <section className="tokenomic" id="tokenomics">
      <Container>
        <h1 className="tokenomics-heading">Tokenomics</h1>
        <div className="token-container">
          <div>
            <div className="progress">
              <span
                className="title timer"
                data-from="0"
                data-to="85"
                data-speed="1800"
              >
                85
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div>CEX Listing</div>
          </div>
          <div>
            <div className="progress">
              <span
                className="title timer"
                data-from="0"
                data-to="70"
                data-speed="1500"
              >
                70
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div> Liquidity</div>
          </div>

          <div>
            <div className="progress">
              <span
                className="title timer"
                data-from="0"
                data-to="70"
                data-speed="1500"
              >
                70
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div>PreSale</div>
          </div>

          <div>
            <div className="progress">
              <span
                className="title timer"
                data-from="0"
                data-to="85"
                data-speed="1800"
              >
                85
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div>Developement</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tokenomics;
