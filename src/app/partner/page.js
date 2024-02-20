"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img1 from "../../../public/background.png";
import img2 from "../../../public/backgroun2.svg";
import img7 from "../../../public/bg-overlay.png";
import "./partner.css";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import employeeData from "../../../public/employees.json";
import img3 from "../../../public/employees/1.svg";
import img4 from "../../../public/employees/2.svg";
import img5 from "../../../public/employees/3.svg";

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
    backgroundImage: `url(${img7.src}), url(${img1.src}) `,
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
      <div className="main-body">
        <div className="h-screen" style={isMobile ? mobStyle : styling}>
          <div className="header-text">
            <p className="texxx t20">Fueling Vibes,</p>
            <p className="texxx t21"> Crafting Stories</p>
            <p className="t22">
              Join Us in Crafting Engaging Narratives that Resonate
            </p>
          </div>
        </div>
        <div className="body-content">
          <div className="our-story">
            <p className="s-body">
              It's no easy feat to be an independent media house. Crafting
              quality content requires substantial resources, and at Namotom
              Studios, we understand the value of genuine partnerships. We are
              constantly seeking like-minded brands that share our core values
              and beliefs for collaborative endeavors.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row kahaani-content">
          <div className="kahaani-photo">
            <Image src={img3} alt="employee" width={280} height={280} />
          </div>
          <div className="kahaani-text">
            <p className="kahaani-head">Why Collaborate With Us</p>
            <p className="kahaani-body">
              In our journey, we've discovered the power of shared visions.
              Collaborating with Namotom Studios goes beyond mere partnership –
              it's a collective journey in co-creating narratives that not only
              tell stories but leave an indelible mark on your audience. Our
              young and energetic team brings a fresh perspective to every
              project, injecting vitality and vigor into every frame.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse kahaani-content ">
          <div className="kahaani-photo">
            <Image src={img4} alt="employee" width={280} height={280} />
          </div>
          <div className="kahaani-text">
            <p className="kahaani-head">What We Value in Collaborations</p>
            <p className="kahaani-body">
              At Namotom Studios, we seek partners who resonate with our
              commitment to authenticity, creativity, and meaningful
              storytelling. Our youthful energy is reflected in our dedication
              to breaking norms, embracing innovation, and crafting narratives
              that resonate with the pulsating beat of our generation. We
              believe that shared values are the foundation for crafting
              compelling stories that resonate with diverse audiences.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row kahaani-content">
          <div className="kahaani-photo">
            <Image src={img5} alt="employee" width={280} height={280} />
          </div>
          <div className="kahaani-text">
            <p className="kahaani-head">How to Partner with Us</p>
            <p className="kahaani-body">
              If you're a brand that exudes the same youthful energy and values,
              we invite you to step into our world. Let's explore the boundless
              possibilities of crafting vibrant and engaging content together.
              Your story is unique, and our dynamic team is here to ensure it's
              not just told but celebrated in a way that captivates and
              inspires.
            </p>
          </div>
        </div>
        <div className="ending-text">
          <p className="kahaani-body2">
            Ready to embark on a collaborative journey fueled by energy and
            creativity? Whether you have specific inquiries or proposals, we're
            here to listen. Connect with us today by writing to
            inquiries@namotomstudios.co.in , and together, let's amplify your
            brand story to new heights.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
