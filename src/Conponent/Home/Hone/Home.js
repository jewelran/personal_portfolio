import React from "react";
import Contact from "../Contact/Contact";
import Progress from "../Progress/Progress";
import Project from "../Project/Project";
import TopHeader from "../TopHeader/TopHeader";
import About from "./../About/About";

const Home = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <About></About>
      <Progress></Progress>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
