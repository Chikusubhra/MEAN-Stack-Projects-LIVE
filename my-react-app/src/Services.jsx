import React, { useState } from "react";
import AdvanceForm from "./AdvanceForm.jsx";
import { Route, Routes } from "react-router-dom";

const Services = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(checkIn);
    console.log(checkOut);
    console.log(roomType);
  };
  return (
    <div>
      <h1>Services</h1>

      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          name="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        Check-In Date:
        <input
          type="date"
          name="checkIn"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <br />
        Check-Out Date:
        <input
          type="date"
          name="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <br />
        Room Type:
        <select
          name="roomType"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="">Select Room Type</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
        <br />
        <button type="submit" name="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Services;
