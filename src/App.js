import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles } from "./Components/Theme";
import Nav from "./Components/Nav";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Banner } from "./Components/Banner";
import { AboutUs } from "./Components/About";
import Feature from "./Components/Feature";
import RoadMap from "./Components/RoadMap";
import Tokenomics from "./Components/Tokenomics";
import { SlideShow } from "./Components/SlideShow";
import Footer from "./Components/Footer";
import InsightBlog from "./Components/insight";
import LastCards from "./Components/LastCards";

const App = () => {
  const isDarkTheme = "dark";

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Nav />
        <Banner />
        <AboutUs />
        <Feature />
        <InsightBlog/>
        <RoadMap />
        <Tokenomics />
        <LastCards/>
        <SlideShow />
        <Footer />
      </>
    </ThemeProvider>
  );
};
export default App;
