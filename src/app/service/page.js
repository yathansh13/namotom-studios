"use client";

import "../service/service.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import "./work.css";
import img1 from "../../../public/background.png";
import img2 from "../../../public/backgroun2.svg";
import img3 from "../../../public/bg-overlay.png";
import "./service.css";
import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import eventData from "../../../public/servicesdata.json";

export default function Service() {
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
        <div className="h-screen" style={isMobile ? mobStyle : styling}>
          <div className="header-text">
            <p className="texx t61">
              Your Gateway to Dynamic & Unforgettable Digital Experiences!
            </p>
            <p className="texx t81">
              {" "}
              Elevate your brand, event or project with our compelling
              storytelling and cutting-edge visuals.
            </p>
            <p className="texx t101">
              {" "}
              Explore our diverse services and discover the difference!
            </p>
          </div>
        </div>
        <div className="projects">
          <p className="projects-head">Our Services</p>
          <div className="projects-grid">
            {eventData.map((project, index) => (
              <EventCard
                key={index}
                name={project.name}
                linkto={project.link}
                img={project.imageUrl}
                buttontext="Learn More"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="t120">
            Can't find the perfect match for your digital content needs in the
            above services? Fret not! We love a good challenge and are ready to
            tailor our skills to meet your unique requirements. Whether it's an
            unconventional project or a combination of services, share your
            vision with us, and let's create something extraordinary together.
          </p>
          <p className="t121">Let's Discuss Your Vision!</p>
          <p className="t122">
            Write to us on{" "}
            <a
              className="anchor-link"
              href="mailto:inquiries@namotomstudios.co.in"
            >
              inquiries@namotomstudios.co.in
            </a>{" "}
            or DM us on Instagram: @namotomstudios
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
