"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from 'next/dynamic' for client-side rendering
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import img from "../../public/backgroun1.png";
import img2 from "../../public/backgroun2.svg";
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
    backgroundImage: `url(${isMobile ? img2.src : img.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
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
            <p className="htext t1">
              Are You Tired
              <br /> Of Watching The Same Old Clichés?
            </p>
            <p className=" htext t2">
              You know the one where an unlikely group of
              <p className=" htext t2">
                misfits come together to solve a mystery at the same time
              </p>
              <p className="htext t2">
                they help each other navigate the ups and downs of life in a
                seemingly idyllic small town?
              </p>
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
            <a className="htext bg-yellow-900 hover:bg-orange-700 text-white font-bold py-4  px-10 rounded-full">
              Check out our work
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
