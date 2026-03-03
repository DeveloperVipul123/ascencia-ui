import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/aboutpage.css";

const About = () => {

  useEffect(() => {
    /* ================= SCROLL ANIMATION ================= */
    const sections = document.querySelectorAll(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    /* ================= COUNTER ANIMATION ================= */
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    });

  }, []);

  return (
    <>
      <Header />

      <section className="about-page">
        <div className="container">

          {/* HERO */}
          <div className="about-hero">
            <h1>Ascencia Malta</h1>
            <h3>We are eager to give you the best education</h3>
            <p>
              Ascencia’s ambition is to realize your potential of ascension.
              Through an individualized follow-up of the students, our teams are
              at your service for your future.
            </p>
          </div>

          {/* SPLIT SECTION */}
          <div className="about-split">
            <div className="split-image">
      <img 
  src="https://www.ascencia-business-school.mt/wp-content/uploads/2022/11/bachelor-management-gestion-etudiants-ascencia.jpg.webp"
  alt="Ascencia Students"
/>
            </div>

            <div className="split-content">
              <h2>International Learning Environment</h2>
              <p>
                At Ascencia Malta, we provide a multicultural and dynamic
                environment that encourages collaboration, innovation,
                and global perspective.
              </p>
              <p>
                Our programs are designed to prepare students for international
                careers with strong academic foundations and practical exposure.
              </p>
            </div>
          </div>

          {/* STATS SECTION */}
          <div className="stats-section">

            <div className="stat-box">
              <h2 className="counter" data-target="1500">0</h2>
              <p>Students</p>
            </div>

            <div className="stat-box">
              <h2 className="counter" data-target="35">0</h2>
              <p>Countries Represented</p>
            </div>

            <div className="stat-box">
              <h2 className="counter" data-target="25">0</h2>
              <p>Academic Programs</p>
            </div>

            <div className="stat-box">
              <h2 className="counter" data-target="5000">0</h2>
              <p>Alumni Network</p>
            </div>

          </div>

          {/* PARTNER SECTION */}
          <div className="about-section">
            <h2>Partner Institutions</h2>
            <p>
              We are proudly partnered with leading institutions to provide
              international exposure and academic excellence.
            </p>

            <div className="partners-grid">
              <div className="partner-box">Amity University</div>
              <div className="partner-box">Jaipuria Institute of Management</div>
              <div className="partner-box">Poddar Institute</div>
              <div className="partner-box">Parul University</div>
            </div>
          </div>

          {/* JOIN SECTION */}
          <div className="join-section">
            <h2>Join Us!</h2>
            <p>
              The registration and admission procedure is simple and totally free.
              Our team is ready to assist you with any questions.
            </p>
            <button>Get In Touch</button>
          </div>

          {/* CONTACT SECTION */}
          <div className="about-section">
            <h2>Contact Details</h2>
            <p>
              Ascencia Malta Ltd <br />
              23, Vincenzo Dimech Street, Floriana, Malta
            </p>

            <p>
              Erasmus+ mobility: erasmus@ascenciamalta.mt
            </p>

            <p>
              Licensed by: The Malta Further and Higher Education Authority (MFHEA) <br />
              License number: 2021-018 <br />
              Category: Higher Education Institution
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;