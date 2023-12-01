"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img from "../../../public/background.png";
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return `/employees/${randomIndex}.svg`;
};

export default function Home() {
 

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

  return (
    <div>
      <Navbar />
      <div style={styling}>
        <div className="main-div flex items-center">
          <div className="left-div">
            <ContactForm />
          </div>

          {/* Right side: Random image */}
          <div className="flex-shrink-0">
            <img
              src={getRandomImage()}
              alt="Random Employee"
              className="w-72 h-72"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
