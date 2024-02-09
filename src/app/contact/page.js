"use client";

import Navbar from "../../components/Navbar/Navbar";
import FooterBlack from "../../components/FooterBlack/FooterBlack";
import img from "../../../public/background.png";
import React from "react";
import "./contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useState } from "react";

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
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styling}>
        <div className="main-div">
          <h1>Contact Us</h1>
          <ContactForm />
        </div>

        {/* Right side: Random image */}
      </div>
      <FooterBlack />
    </div>
  );
}
