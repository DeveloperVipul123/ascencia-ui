import React from "react";
import "../styles/programmes.css";

const Programmes = () => {
  return (
    <section className="programmes">
      <div className="container">
        <h2>Our Programmes</h2>

        <div className="programme-grid">
          <div className="programme-card">
            <h3>Business Management</h3>
            <p>BSc (Hons) in Business Management.</p>
            <button>Learn More</button>
          </div>

          <div className="programme-card">
            <h3>MBA</h3>
            <p>Master of Business Administration.</p>
            <button>Learn More</button>
          </div>

          <div className="programme-card">
            <h3>Computer Science</h3>
            <p>BSc (Hons) in Computer Science.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programmes;