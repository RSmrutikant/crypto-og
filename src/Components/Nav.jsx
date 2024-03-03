import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import Images from "../DataSet/ImageSet";

const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000000e6;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  width: 1000vw;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 1s ease 0.3s;
  z-index: 8;
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  width: 30vw;
  max-width: 100%;
  text-align: right;
  padding: 2rem 4rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease 0.3s;

  @media (max-width: 600px) {
    width: 300px;
    padding: 2rem 2rem;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 600px;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: normal;
    letter-spacing: 0.3rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    svg {
      width: 20px;

      &:hover {
        tranform: translateX(30px);
      }
    }

    @media (max-width: 576px) {
      font-size: 1rem;
      text-align: right;
    }

    &:hover {
      color: #343078;
    }
  }
`;
const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#f5f5f5")};
    border-radius: 10px;
    transition: all 0.3s linear 0.5s;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenuWrapper open={open}>
      <StyledMenu open={open}>
        <a href="#about-us" onClick={() => setOpen(!open)}>
          About us{""}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
              data-name="8-Arrow Down"
            />
          </svg>
        </a>
        <a href="#feature" onClick={() => setOpen(!open)}>
          Features{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
              data-name="8-Arrow Down"
            />
          </svg>
        </a>
        <a href="#insightBlog" onClick={() => setOpen(!open)}>
          Who we Are{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
              data-name="8-Arrow Down"
            />
          </svg>
        </a>
        <a href="#roadmap" onClick={() => setOpen(!open)}>
          RoadMap{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
              data-name="8-Arrow Down"
            />
          </svg>
        </a>
        <a href="#tokenomics" onClick={() => setOpen(!open)}>
          Tokenomics{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
              data-name="8-Arrow Down"
            />
          </svg>
        </a>
        <a href="#slideshow" onClick={() => setOpen(!open)}>
          Explore More{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
              data-name="8-Arrow Down"
            />
          </svg>
        </a>
      </StyledMenu>
    </StyledMenuWrapper>
  );
};
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};


const Nav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const progressBarScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  };

  useEffect(() => {
    gsap.fromTo(
      ".og-navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "slow(0.7,0.7,0.7,false)" }
    );
    window.addEventListener('scroll', progressBarScroll);
    return () => {
    window.removeEventListener('scroll', progressBarScroll);
    };
  }, []);
  
  window.onscroll = function () {
    progressBarScroll();
  };

  // Call the hook with the ref and the function you want to execute when a click occurs outside
  useOnClickOutside(node, () => {
    setOpen(false);
  });

  return (
    <>
      <div
        className="og-navbar"
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#000",
          position: "fixed",
          display: "flex",
          justifyContent: "right",
          zIndex: 6,
        }}
      >
        <div style={{height: "80px", marginRight: "auto"}}>
          <img src={Images.Logo} alt="brand-logo" style={{height: "100%"}}/>
          | CRYPTO OG's
        </div>
        <div ref={node} style={{ width: "fit-content", padding: "20px" }}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="progress-container">
    <div className="progress-bar" id="progressBar" style={{ height: '2px', backgroundColor: '#ac010a', zIndex: '5' }}></div>
  </div>
      </div>

    </>
  );
};

export default Nav;
