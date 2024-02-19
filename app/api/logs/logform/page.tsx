"use client"
import VideoBackground from '@/app/components/VideoBg';
import React, { useCallback, useEffect, useState } from 'react';
import "../../../../app/globals.css"
import { useSession } from 'next-auth/react';
import { useCreateLog } from '@/hooks/log';
 import { Logdata } from '@/gql/graphql';
import { graphQLClient } from '@/clients/api';
import { createLog } from '@/graphql/mutation/log';


const page = () => {

 

  const user=useSession()
  var mail=''
  if(user.data?.user?.email)
  {
    mail=user.data.user.email
  }

 

  const celestialObjectOptions = ['Star', 'Planet', 'Galaxy', 'Nebula', 'Cluster', 'Unknown'];

 
  const [formData, setFormData] = useState<Logdata>({
    obj: celestialObjectOptions[0], // Default to the first option
    dateAndTime: '',
    device: '',
    note: '',
    media: '',
    email:mail,
  });

  const {mutate}=useCreateLog()
 
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
    
    console.log('Form Submitted:', formData);
  };
  const initialFormData = {
    obj: celestialObjectOptions[0], // Default to the first option
    dateAndTime: '',
    device: '',
    note: '',
    media: '',
    authorId: 0,
    email: mail
};

const payload= {
  "dateAndTime": `${formData.dateAndTime}`,
  "device": `${formData.device}`,
  "email": `${formData.email}`,
  "media": `${formData.media}`,
  "note": `${formData.note}`,
  "obj": `${formData.obj}`
}
  const handleCreateTweet=()=>{graphQLClient.request(createLog,{createLogPayload2:payload})
window.alert("form sum")
setFormData(initialFormData)
}
 

  return (
    <div className=" mx-[10%] mt-4">
      <VideoBackground />
      <form onSubmit={handleSubmit} className="p-3 border text-white border-gray-300 bg-transparent ">
        <h2 className="text-2xl font-semibold mb-4">Astronomy Observation Form</h2>

        {/* Celestial Object Dropdown */}
        <div className="mb-4">
          <label htmlFor="obj" className="block text-sm font-medium">Celestial Object</label>
          <select
            id="obj"
            name="obj"
            value={formData.obj}
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
            id="device"
            name="device"
            value={formData.device}
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
            id="note"
            name="note"
            value={formData.note}
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
          <button onClick={handleCreateTweet}
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
