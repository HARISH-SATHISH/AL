"use client"
import VideoBackground from '@/app/components/VideoBg';
import React, { useState } from 'react';
import "../../../../app/globals.css"

const page = () => {

  const celestialObjectOptions = ['Star', 'Planet', 'Galaxy', 'Nebula', 'Cluster', 'Unknown'];

  const [formData, setFormData] = useState({
    celestialObject: celestialObjectOptions[0], // Default to the first option
    dateAndTime: '',
    deviceUsed: '',
    observationNotes: '',
    media: null,
  });

  // Handler for form input changes
  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    // Update state based on input type
    if (name === 'media') {
      setFormData({ ...formData, [name]: files});
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handler for form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add logic here to handle the form submission (e.g., send data to a backend server)
    console.log('Form Submitted:', formData);
  };

  return (
    <div className=" mx-[10%] mt-4">
      <VideoBackground />
      <form onSubmit={handleSubmit} className="p-3 border text-white border-gray-300 bg-transparent ">
        <h2 className="text-2xl font-semibold mb-4">Astronomy Observation Form</h2>

        {/* Celestial Object Dropdown */}
        <div className="mb-4">
          <label htmlFor="celestialObject" className="block text-sm font-medium">Celestial Object</label>
          <select
            id="celestialObject"
            name="celestialObject"
            value={formData.celestialObject}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300  focus:outline-none focus:ring focus:border-white bg-transparent"
            required
          >
            {celestialObjectOptions.map((option) => (
              <option key={option} value={option} className='bg-black'>{option}</option>
            ))}
          </select>
        </div>

        {/* Date and Time */}
        <div className="mb-4">
          <label htmlFor="dateAndTime" className="block text-sm font-medium">Date and Time</label>
          <input
            type="datetime-local"
            id="dateAndTime"
            name="dateAndTime"
            value={formData.dateAndTime}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300  focus:outline-none focus:ring focus:border-white bg-transparent" // Updated styling here
            required
          />
        </div>

        {/* Device Used (formerly Telescope Used) */}
        <div className="mb-4">
          <label htmlFor="deviceUsed" className="block text-sm font-medium">Device Used</label>
          <input
            type="text"
            id="deviceUsed"
            name="deviceUsed"
            value={formData.deviceUsed}
            onChange={handleChange}
            placeholder='deviceused'
            className="mt-1 p-2 w-full border border-gray-300  focus:outline-none focus:ring focus:border-white bg-transparent text-white"
            required
          />
        </div>

        {/* Observation Notes */}
        <div className="mb-6">
          <label htmlFor="observationNotes" className="block text-sm font-medium">Observation Notes</label>
          <textarea
            id="observationNotes"
            name="observationNotes"
            value={formData.observationNotes}
            onChange={handleChange}
            rows={4}
            placeholder='observationNotes'
            className="mt-1 p-2 w-full border border-gray-300  focus:outline-none focus:ring focus:border-white bg-transparent"
            required
          ></textarea>
        </div>

        {/* Media (Photo or Video) */}
        <div className="mb-6">
          <label htmlFor="media" className="block text-sm font-medium">Media (Photo or Video)</label>
          <input
            type="file"
            id="media"
            name="media"
            accept="image/*,video/*"
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300  focus:outline-none focus:ring focus:border-white"
            multiple
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-transparent text-white  hover:bg-white hover:text-black border border-white focus:outline-none focus:ring focus:border-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
