// EventCard.js
"use client";

import React from "react";
import Image from "next/image";
import Modal from "../Modal/Modal"; // Import your Modal component
import { useState } from "react";
import "./EventCard.css";

export default function EventCard(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Truncate the details to a certain length

  return (
    <div className="event-card2">
      <Image src={props.img} alt="event" width={500} height={250} />
      <div className="event-info">
        <p className="et event-name">{props.name}</p>
      </div>
      <div className="landing-button">
        <a href={props.linkto} target={props.target}>
          <button className="htext bg-yellow-900 hover:bg-orange-700 text-white font-bold py-3 px-9 rounded">
            {props.buttontext}
          </button>
        </a>
      </div>

      {/* Render the modal if showModal is true */}
      {showModal && <Modal details={props.details} onClose={closeModal} />}
    </div>
  );
}
