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
          <div class="progress-circle progress-60"><span>60</span></div>
            <div>Public Sale & Liquidity Pool</div>
          </div>
          <div>
          <div class="progress-circle progress-20"><span>20</span></div>
            <div> Developement</div>
          </div>
          <div>
          <div class="progress-circle progress-10"><span>10</span></div>
            <div>Team & Advisors</div>
          </div>
          <div>
          <div class="progress-circle progress-10"><span>10</span></div>
            <div>Community Incetives & Airdrops</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tokenomics;
