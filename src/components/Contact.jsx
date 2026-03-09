import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const submissionData = {
      ...formData,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-main-title">
          Let's work <br /> together!
        </h2>

        <div className="contact-grid-v3">
          {/* Left Side: Contact Info */}
          <div className="contact-info-list">
            <div className="contact-item-v3">
              <div className="contact-icon-circle">
                <FaEnvelope />
              </div>
              <div className="contact-item-text">
                <span className="contact-label">EMAIL</span>
                <a
                  href="mailto:joshigauris1309@gmail.com"
                  className="contact-value"
                >
                  joshigauris1309@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item-v3">
              <div className="contact-icon-circle">
                <FaLinkedin />
              </div>
              <div className="contact-item-text">
                <span className="contact-label">LINKEDIN</span>
                <a
                  href="https://linkedin.com/in/gauri-joshi1309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  Gauri Joshi
                </a>
              </div>
            </div>

            <div className="contact-item-v3">
              <div className="contact-icon-circle">
                <FaPhoneAlt />
              </div>
              <div className="contact-item-text">
                <span className="contact-label">PHONE</span>
                <p className="contact-value">+91 7709427134</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-container-v3">
            <form className="contact-form-v3" onSubmit={handleSubmit}>
              <div className="form-row-v3">
                <div className="form-group-v3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group-v3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group-v3">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-submit-v3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <p
                  className={`form-result-v3 ${result.includes("Successfully") ? "success" : "error"}`}
                >
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <footer className="footer-minimal-v3">
        <p className="copyright-v3">
          &copy; 2026 Gauri Joshi. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
