"use client";

import Image from "next/image";
import "../components/Navbar/Navbar";
import Navbar from "../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import "./home.css";
import img from "../../public/background.png";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  const styling = {
    backgroundImage: `url(${img.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "100vh",
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
            <p className="htext t2">
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
              <Image src="./imo.svg" height={300} width={300} />
            </a>
            <a href="#">
              <Image src="./grillnchill.svg" height={300} width={300} />
            </a>
            <a href="#">
              <Image src="./nh91.svg" height={300} width={300} />
            </a>
            <a href="#">
              <Image src="./pinchuk.svg" height={300} width={300} />
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
