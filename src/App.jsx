import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Port from "./components/Portfolio/Port";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import GithubMain from "./components/GithubMain";
import { ChakraProvider } from "@chakra-ui/react";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Port />
      <GithubMain />
      <People />
      <Footer />
    </div>
  );
};

export default App;
