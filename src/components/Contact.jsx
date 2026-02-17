import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
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
      access_key: "YOUR_ACCESS_KEY_HERE", // User needs to replace this
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
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Clear success message after 5 seconds
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <footer className="contact-section">
      <div className="contact-container">
        <h2 className="contact-header">
          Let's work
          <br />
          <span>together!</span>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaEnvelope />
              </div>
              <div className="contact-item-info">
                <h4>Email</h4>
                <a href="mailto:joshigauris1309@gmail.com">
                  joshigauris1309@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaLinkedin />
              </div>
              <div className="contact-item-info">
                <h4>LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/gauri-joshi1309/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gauri Joshi
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaPhone />
              </div>
              <div className="contact-item-info">
                <h4>Phone</h4>
                <span>+91 7709427134</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {result && (
              <p
                className={`form-result ${result.includes("Successfully") ? "success" : "error"}`}
              >
                {result}
              </p>
            )}
          </form>
        </div>

        <div className="contact-footer">
          &copy; 2025 Gauri Joshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
