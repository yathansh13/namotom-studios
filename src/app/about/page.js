"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import img from "../../../public/backgroun1.png";
import img2 from "../../../public/backgroun2.svg";
import "./about.css";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
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

        <div className="flex flex-col sm:flex-row kahaani-content">
          <div className="kahaani-photo">
            <Image src={img3} alt="employee" width={280} height={280} />
          </div>
          <div className="kahaani-text">
            <p className="kahaani-head">How It started</p>
            <p className="kahaani-body">
              Namotom Studios was started to solve a pressing issue: how to
              normalize discussion of sensitive topics in day-to-day lives. Even
              before meeting in college, founders Abhishek and Nikhil enjoyed
              watching edgy content that would entertain them, make them think
              and form opinions. At the time, the majority of Indian content
              creators avoided working on these topics, causing the Indian
              digital landscape to be flooded with content that catered to
              popular trends. Abhishek and Nikhil knew they could create better
              content that entertained people, raised awareness and made people
              comfortable to start discussions on that topic.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse kahaani-content ">
          <div className="kahaani-photo">
            <Image src={img4} alt="employee" width={280} height={280} />
          </div>
          <div className="kahaani-text">
            <p className="kahaani-head">Chapter one</p>
            <p className="kahaani-body">
              So, in 2020, Abhishek and Nikhil started bringing Namotom Studios
              to life. They began their journey by creating content on current,
              social and, at times, goofy topics for their college theatre
              society. People enjoyed this unique blend that Abhishek and Nikhil
              had to offer. Namotom Studios was making content that went beyond
              the ordinary. Producing content is a long and complex process, but
              the goal has always been simple: create content that makes people
              laugh and start thought-provoking discussions. What began as a
              creative endeavor in 2020 evolved into something much more
              significant.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row kahaani-content">
          <div className="kahaani-photo">
            <Image src={img5} alt="employee" width={280} height={280} />
          </div>
          <div className="kahaani-text">
            <p className="kahaani-head">The road ahead</p>
            <p className="kahaani-body">
              As of 2023, both Abhishek and Nikhil have graduated from college.
              But that doesn’t mean the end for Namotom Studios.
              <br />
              <br /> We at Namotom Studios believe: the content produced here
              can be used to, educate and integrate the discussion of sensitive
              topics in the Indian diaspora.
              <br />
              <br /> With that, we continue to move forward to achieve our goal
              of catering for a modern audience that demands and requires edgy
              content on various topics hoping to make a difference in the
              creative industry.
            </p>
          </div>
        </div>

        <div className="team">
          <p className="team-head"> Our Team</p>
          <div className="teamGrid">
            {employeeData.map((employee, index) => (
              <EmployeeCard
                key={index}
                linkedin={employee.linkedinUrl}
                name={employee.name}
                title={employee.jobTitle}
                details={employee.description}
                img={employee.imageUrl}
                alt={`Image of ${employee.name}`} // Add alt prop with meaningful text
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
