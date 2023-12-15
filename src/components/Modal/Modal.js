// Modal.js
"use client";

import React from "react";
import "./Modal.css";

export default function Modal({ details, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p className="modal-title">Event Details:</p>
        <p className="modal-details">{details}</p>
        <button
          className="modal-close-btn bg-yellow-900 hover:bg-yellow-500"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
