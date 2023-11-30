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
  const truncatedDetails =
    props.details.length > 50
      ? `${props.details.substring(0, 50)}...`
      : props.details;

  return (
    <div className="event-card">
      <Image src={props.img} alt="event" width={500} height={250} />
      <div className="event-info">
        <p className="et event-name">{props.name}</p>
        <p className="et event-details">{truncatedDetails}</p>
      </div>
      <div className="landing-button">
        <button
          className="htext bg-yellow-900 hover:bg-orange-700 text-white font-bold py-3 px-9 rounded"
          onClick={openModal}
        >
          Learn more
        </button>
      </div>

      {/* Render the modal if showModal is true */}
      {showModal && <Modal details={props.details} onClose={closeModal} />}
    </div>
  );
}
