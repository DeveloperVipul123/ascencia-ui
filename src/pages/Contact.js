import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <Header />

      <section className="contact-page">
        <div className="container">

          <h1>Contact Us</h1>
          <p className="contact-intro">
            For any question related to our campus, our programs or any other
            subject concerning Ascencia Malta, please fill in the form below.
            Our teams will get back to you as soon as possible.
          </p>

          <div className="contact-grid">

            {/* ================= FORM ================= */}
            <div className="contact-form">
              <form>

                <div className="form-row">
                  <input type="text" placeholder="First Name*" required />
                  <input type="text" placeholder="Last Name*" required />
                </div>

                <div className="form-row">
                  <input type="email" placeholder="E-mail*" required />
                  <input type="tel" placeholder="Phone*" required />
                </div>

                <input
                  type="text"
                  placeholder="Subject of your message*"
                  required
                />

                <textarea
                  rows="5"
                  placeholder="Your message*"
                  required
                ></textarea>

                <div className="checkbox">
                  <input type="checkbox" required />
                  <label>
                    I agree that Ascencia Malta collects and uses the personal
                    data entered in this form in accordance with the data
                    protection policy.
                  </label>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>

            {/* ================= MAP ================= */}
            <div className="contact-map">
              <iframe
                title="Ascencia Malta Location"
                src="https://www.google.com/maps?q=23,Vincenzo+Dimech+Street,Floriana,Malta&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* ================= CONTACT DETAILS ================= */}
          <div className="contact-details">
            <h3>Ascencia Malta Ltd</h3>
            <p>23, Vincenzo Dimech Street, Floriana, Malta</p>
            <p>Erasmus + mobility: erasmus@ascenciamalta.mt</p>

            <p className="license">
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

export default Contact;