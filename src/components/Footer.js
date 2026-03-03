import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-col">
          <h3>Ascencia Malta</h3>
          <p>
            Empowering students through innovative education and
            international opportunities.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Programs</p>
          <p>Contact</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>23, Vincenzo Dimech Street</p>
          <p>Floriana, Malta</p>
          <p>Email: info@ascenciamalta.mt</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ascencia Malta. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;