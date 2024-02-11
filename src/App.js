import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Components/Theme";
import Nav from "./Components/Nav";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Banner } from "./Components/Banner";
import { AboutUs } from "./Components/About";
import Curvedtext from "./Components/Curvedtext";
import Feature from "./Components/Feature";
import RoadMap from "./Components/RoadMap";
import Tokenomics from "./Components/Tokenomics";
import { SlideShow } from "./Components/SlideShow";
import Footer from "./Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Nav />
        <Banner />
        <AboutUs />
        <Curvedtext />
        <Feature />
        <RoadMap />
        <Tokenomics />
        <SlideShow />
        <Footer />
        {console.log(isDarkTheme)}
        <button onClick={toggleTheme} className="toggle-Btn">
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              <FontAwesomeIcon icon={faSun} style={{ color: "grey" }} />
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              <FontAwesomeIcon icon={faMoon} style={{ color: "grey" }} />
            </span>
          )}
        </button>
      </>
    </ThemeProvider>
  );
};
export default App;
