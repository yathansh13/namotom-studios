"use client";

import "../about/about.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./work.css";
import img from "../../../public/backgroun1.png";
import img2 from "../../../public/backgroun2.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard/EventCard";
import eventData from "../../../public/projects.json";

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

    width: "100vw",
    display: "flex",
    justifyContent: "flex-start",
  };

  return (
    <div>
      <Navbar />
      <div className="main-body2">
        <div className="h-screen" style={styling}>
          <div className="header-text">
            <p className="texx t6">Lights! Camera!</p>
            <p className="texx t8"> ACTION!</p>
          </div>
        </div>

        <div className="projects">
          <p className="projects-head">Our Live Projects</p>
          <div className="projects-grid">
            {eventData.status.live.map((project, index) => (
              <EventCard
                key={index}
                name={project.name}
                details={project.description}
                img={project.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="projects">
          <p className="projects-head">Our Upcoming Projects</p>
          <div className="projects-grid">
            {eventData.status.upcoming.map((project, index) => (
              <EventCard
                key={index}
                name={project.name}
                details={project.description}
                img={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
