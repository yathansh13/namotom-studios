"use client";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { useState, useEffect } from "react";

import img1 from "../../../../public/background.png";
import img2 from "../../../../public/backgroun2.svg";
import img3 from "../../../../public/bg-overlay.png";
import "./moments.css";

export default function Moments() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window width after component is mounted
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styling = {
    backgroundImage: `url(${img3.src}), url(${img1.src}) `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain, cover",
    backgroundPosition: "bottom, top",
    width: "100vw",
    display: "flex",
    justifyContent: "flex-start",
  };
  const mobStyle = {
    backgroundImage: `url(${img2.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",

    width: "100vw",
    display: "flex",
    justifyContent: "flex-start",
  };

  return (
    <div>
      <Navbar />
      <div className="main-body2">
        <div className="h-screen" style={isMobile ? mobStyle : styling}></div>
        <div className="rest-div">
          <p>Hello</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
