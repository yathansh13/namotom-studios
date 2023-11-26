"use client";

import Image from "next/image";
import "../components/Navbar/Navbar";
import Navbar from "../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}
