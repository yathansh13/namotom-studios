"use client";

import Navbar from "../../components/Navbar/Navbar";
import FooterBlack from "../../components/FooterBlack/FooterBlack";
import img from "../../../public/background.png";
import React, { useState, useEffect } from "react";
import "./contact.css";

import emailjs from "emailjs-com";

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return `/employees/${randomIndex}.svg`;
};

export default function Contact() {
  const styling = {
    backgroundImage: `url(${img.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "90vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);

    // Your EmailJS service ID
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_USER_ID;

    // Sending the email
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        userId
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Clearing the form after successful submission
        setName("");
        setEmail("");
        setMessage("");
        setError("");
        setLoading(false);
        // Mark as submitted
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("Failed to send email. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div style={styling}>
        {submitted ? (
          <div className="thank-you-div">
            <div className="flex-shrink-0">
              <img
                src={randomImage}
                alt="Random Employee"
                className="emp-image"
              />
            </div>
            <p className="thank-you-message">Thank you for your message!</p>
            <a className="back-button" href="/">
              Back to Home
            </a>
          </div>
        ) : (
          <div className="complete-div">
            <div className="full-div">
              <div className="main-div">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={name}
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                    value={message}
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  {loading ? (
                    <div className="loader"></div>
                  ) : (
                    <button
                      className="send-button"
                      type="submit"
                      disabled={loading}
                    >
                      Send
                    </button>
                  )}
                </form>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={randomImage}
                  alt="Random Employee"
                  className="emp-image"
                />
              </div>
            </div>
            {error && <p className="error-msg">{error}</p>}
          </div>
        )}
      </div>
      <FooterBlack />
    </div>
  );
}
