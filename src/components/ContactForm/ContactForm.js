import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID
    const serviceId = "service_xgqzzga";
    // Your EmailJS template ID
    const templateId = "template_w16dujw";

    const userId = "LmIbFNq-I2uYhPIjN";

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
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
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
      <button type="submit">Send Email</button>
    </form>
  );
};

export default ContactForm;
