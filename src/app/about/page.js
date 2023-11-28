"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import img from "../../../public/backgroun1.png";
import img2 from "../../../public/background.png";
import "./about.css";

export default function Home() {
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
    backgroundImage: `url(${isMobile ? img2.src : img.src})`,
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
      <div className="main-body">
        <div className="h-screen" style={styling}>
          <div className="header-text">
            <p className="texx t6">What? Why?</p>
            <p className="texx t7"> Who? & How?</p>
          </div>
        </div>
        <div className="body-content">
          <div className="our-story">
            <p className="s-head">Our Story</p>
            <p className="s-body">
              There are many topics that are missing from the current public
              discussion, topics that are considered taboo and topics that the
              people are uninformed upon. We want to present these topics to the
              mainstream, wrapped up in comedy, in an effort to ignite
              discussion. Our focus is to normalize and discuss these topics and
              let people know it’s okay to talk about them.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
