import React from "react";
import { Container } from "react-bootstrap";

const Tokenomics = () => {
  return (
    <section className="tokenomic" id="tokenomics">
      <Container>
        <h1 className="tokenomics-heading">Tokenomics (COG)</h1>
        <h5 className="tokenomics-heading2">21 Million Supply (In homeage to Bitcoin's capped supply)</h5>
        <div className="token-container">
          <div>
            <div className="progress">
              <span
                className="title timer"
                data-from="0"
                data-to="60"
                data-speed="1800"
              >
                60
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div>Public Sale & Liquidity Pool</div>
          </div>
          <div>
            <div className="progress">
              <span
                className="title timer"
                data-from="0"
                data-to="20"
                data-speed="1500"
              >
                20
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div> Developement</div>
          </div>

          <div>
            <div className="progress">
              <span
                className="title timer"
                data-from="0"
                data-to="10"
                data-speed="1500"
              >
                10
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div>Team & Advisors</div>
          </div>

          <div>
            <div className="progress">
              <span
                className="title timer"
                data-from="0"
                data-to="85"
                data-speed="1800"
              >
                10
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div>Community Incetives & Airdrops</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tokenomics;
