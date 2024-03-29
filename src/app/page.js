"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from 'next/dynamic' for client-side rendering
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import img1 from "../../public/background.png";
import img2 from "../../public/backgroun2.svg";
import img3 from "../../public/bg-overlay.png";
import "./home.css";

// Use dynamic for client-side rendering of the Image component
const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

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
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const styling = {
    backgroundImage: `url(${img3.src}), url(${img1.src}) `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain, cover",
    backgroundPosition: "bottom, top",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
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
      <div className="main-body">
        <div className="h-screen" style={isMobile ? mobStyle : styling}>
          <div className="header-text">
            <p className="htext t1">
              Are You Tired
              <br /> Of Watching The Same Old Clichés?
            </p>

            <div class="typewriter">
              <p className="htext2">
                <span>
                  You know the one where an unlikely group of misfits come
                </span>
                <span>
                  together to solve a mystery at the same time they help each
                  other
                </span>
                <span>
                  to navigate the ups and downs of life in a seemingly idyllic
                  small town?{" "}
                </span>
              </p>
            </div>
            <p className=" htext t2">
              You know the one where an unlikely group of misfits come together
              to solve a mystery at the same time they help each other navigate
              the ups and downs of life in a seemingly idyllic small town?
            </p>
            <p className="htext t3">
              Don’t worry. Even we got tired of it. So We Started...
            </p>
          </div>
        </div>
        <div className="body-content">
          <p className="htext t4">...Making Our Own Content!</p>
          <p className="htext t5">
            Yes, You read that right. <br /> We are independent creators and we
            make content on social, current and at times goofy topics for the
            Digital India!
          </p>
          <div className="project-grid">
            <a href="#">
              {/* Use DynamicImage component for client-side rendering */}
              {typeof window !== "undefined" && (
                <DynamicImage src="./imo.svg" height={300} width={300} />
              )}
            </a>
            <a href="#">
              {typeof window !== "undefined" && (
                <DynamicImage
                  src="./grillnchill.svg"
                  height={300}
                  width={300}
                />
              )}
            </a>
            <a href="#">
              {typeof window !== "undefined" && (
                <DynamicImage src="./nh91.svg" height={300} width={300} />
              )}
            </a>
            <a href="#">
              {typeof window !== "undefined" && (
                <DynamicImage src="./pinchuk.svg" height={300} width={300} />
              )}
            </a>
          </div>
          <div className="landing-button">
            <a
              href="/work"
              className="htext bg-yellow-900 hover:bg-orange-700 text-white font-bold py-4  px-10 rounded-full"
            >
              Check out our work
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
