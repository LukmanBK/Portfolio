import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Intro from "../components/Intro/Intro";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="accueil">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
