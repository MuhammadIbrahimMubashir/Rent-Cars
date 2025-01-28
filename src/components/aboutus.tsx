"use client"

import React, { useEffect, useState } from 'react';
import { createClient } from 'next-sanity';

// Sanity client setup
const client = createClient({
  projectId: "7fyfz13o", // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-01-01', // Use the latest Sanity API version
  useCdn: true, // Enable CDN for faster response
});

// Define the type for the About Us data
interface AboutUsData {
  description: string;
}

export default function AboutUsC() {
  const [aboutUs, setAboutUs] = useState<AboutUsData | null>(null);

  // Function to fetch data and set state
  async function fetchAboutUs() {
    const query = `*[_type == "aboutUs"][0] { description }`; // Fetch only description
    const data = await client.fetch<AboutUsData>(query); // Fetch typed data
    setAboutUs(data);
  }

  useEffect(() => {
    fetchAboutUs();
  }, []);

  // Render the data
  return (
    <div>
      <h1>About Us</h1>
      {aboutUs ? <p>{aboutUs.description}</p> : <p>Loading...</p>}
    </div>
  );
}
