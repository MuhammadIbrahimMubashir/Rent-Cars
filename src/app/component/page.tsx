"use client";
// components/SearchForm.js
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchForm() {
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffSameLocation] = useState(true);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({
      location,
      pickUpDate,
      pickUpTime,
      dropOffDate,
      dropOffSameLocation,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="search-form">
        {/* Where to Pick Up */}
        <div className="form-group">
          <label htmlFor="location">Where To Pick Up</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your City, Airport or Address"
            required
          />
        </div>

        {/* Pick-Up Date */}
        <div className="form-group">
          <label htmlFor="pickUpDate">Pick-Up Date</label>
          <input
            type="date"
            id="pickUpDate"
            value={pickUpDate}
            onChange={(e) => setPickUpDate(e.target.value)}
            required
          />
        </div>

        {/* Pick-Up Time */}
        <div className="form-group">
          <label htmlFor="pickUpTime">Pick-Up Time</label>
          <input
            type="time"
            id="pickUpTime"
            value={pickUpTime}
            onChange={(e) => setPickUpTime(e.target.value)}
            required
          />
        </div>

        {/* Drop-Off Date */}
        <div className="form-group">
          <label htmlFor="dropOffDate">Drop-Off Date</label>
          <input
            type="date"
            id="dropOffDate"
            value={dropOffDate}
            onChange={(e) => setDropOffDate(e.target.value)}
            required
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="search-button flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </form>
      <style jsx>{`
        .form-container {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .search-form {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap; /* Adjusts elements for small screens */
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          font-family: serif;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          min-width: 150px; /* Minimum size for inputs */
          color: #334155;
        }
        .form-group label {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          font-weight: bold;
        }
        .checkbox-group {
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
        .form-group input {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          font-family: serif;
        }
        .search-button {
          background-color: #334155;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 4px;
          font-family: serif;
        }
        .search-button:hover {
          background-color: #1e293b;
        }
        @media (max-width: 768px) {
          .search-form {
            flex-direction: column;
            align-items: stretch;
          }
          .form-group {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
