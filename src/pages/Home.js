import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Programmes from "../components/Programmes";
import AboutSection from "../components/AboutSection";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Programmes />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Home;