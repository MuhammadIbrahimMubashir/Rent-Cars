"use client"

import Image from "next/image";
import a4 from "../images/a4.png";
import a5 from "../images/a5.png";
import cla200 from "../images/cla200.png";
import React, { useEffect } from 'react';
import Link from "next/link"
import mb from "../images/mb.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Luxury() {
 useEffect(() => {
        AOS.init({
          once: false,
        });
      }, []);
  return (
    <div className="px-4">
      <title>Luxury-QuickRent Car</title>
      <header className="text-gray-600 body-font bg-white">
        <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={mb}
              alt="no"
              className="w-20 h-18 rounded-full"
            >
            </Image>
            <span className="ml-3 text-xl font-serif">QuickRent Cars</span>
          </p>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center font-serif gap-5">
            <Link href="/" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[68] hover:text-white rounded-[10]">Home</Link>
            <Link href="/#cars" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[55] hover:text-white rounded-[10]">Cars</Link>
            <Link href="/#about-us" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[98] hover:text-white rounded-[10]">About Us</Link>
            <Link href="/#reviews" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[120] hover:text-white rounded-[10]">Our Reviews</Link>
            <Link href="/contactus" target="_blank" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[108] hover:text-white rounded-[10]">Contact Us</Link>
          </nav>
        </div>
      </header>
      <div className="text-center">
        <h1 data-aos="fade-up" className="text-4xl text-slate-800 font-serif mt-11">
          Luxury Cars On Rent
        </h1>
        <p data-aos="fade-up" className="text-xl text-slate-800 font-serif mt-2 max-w-3xl mx-auto">
        Renting a luxury car can be a dream come true for many people who want 
        to experience the highest levels of class and style at an affordable price.
        </p>
      </div>

      {/* Cars Section */}
      <div className="grid gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {/* AUDI A4 */}
        <div data-aos="fade-right" className="bg-slate-400 rounded-lg flex flex-col items-center p-4">
          <Image src={a4} alt="Suzuki Alto" className="h-40 w-auto object-cover" />
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md mt-4 w-full">
            <h2 className="text-lg font-bold">Audi A4</h2>
            <div className="my-4">
              <p className="flex items-center">
                <span className="mr-2">🚗</span> 4 Seats
              </p>
              <p className="flex items-center">
                <span className="mr-2">⚙️</span> Automatic
              </p>
            </div>
            <div className="my-2">
              <p className="font-serif">With Driver: 10hrs/day   Self Drive: 24hrs</p>
              <p className="text-sm text-gray-500">Overtime: PKR 1000/hr</p>
            </div>
            <div className="my-4 text-sm text-gray-500">
              <p>Refill fuel at the end of the day or pay PKR 60/KM</p>
              <p>Excluding fuel & overtime charges</p>
            </div>
            <div className="mt-4">
              <p className="text-red-500 line-through">28,000 PKR/day</p>
              <p className="text-xl font-bold text-green-500">25,000 PKR/day</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              <button className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
                With Driver
              </button>
              <button className="w-full px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700">
                Self Drive
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free Cancellation</p>
          </div>
        </div>

        {/* AUDI A5 */}
        <div data-aos="fade-up" className="bg-slate-400 rounded-lg flex flex-col items-center p-4">
          <Image src={a5} alt="Suzuki Cultus" className="h-40 w-auto object-cover" />
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md mt-4 w-full">
            <h2 className="text-lg font-bold">Audi A5</h2>
            <div className="my-4">
              <p className="flex items-center">
                <span className="mr-2">🚗</span> 4 Seats
              </p>
              <p className="flex items-center">
                <span className="mr-2">⚙️</span> Automatic
              </p>
            </div>
            <div className="my-2">
              <p className="font-serif">With Driver: 10hrs/day Self Drive: 24hrs</p>
              <p className="text-sm text-gray-500">Overtime: PKR 1000/hr</p>
            </div>
            <div className="my-4 text-sm text-gray-500">
              <p>Refill fuel at the end of the day or pay PKR 60/KM</p>
              <p>Excluding fuel & overtime charges</p>
            </div>
            <div className="mt-4">
              <p className="text-red-500 line-through">45,000 PKR/day</p>
              <p className="text-xl font-bold text-green-500">40,000 PKR/day</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              <button className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
                With Driver
              </button>
              <button className="w-full px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700">
                Self Drive
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free Cancellation</p>
          </div>
        </div>

        {/* MERCEDES Cla200 */}
        <div data-aos="fade-left" className="bg-slate-400 rounded-lg flex flex-col items-center p-4">
          <Image src={cla200} alt="Daihatsu Mira" className="h-40 w-auto object-cover" />
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md mt-4 w-full">
            <h2 className="text-lg font-bold">MERCEDES Cla200</h2>
            <div className="my-4">
              <p className="flex items-center">
                <span className="mr-2">🚗</span> 5 Seats
              </p>
              <p className="flex items-center">
                <span className="mr-2">⚙️</span> Automatic
              </p>
            </div>
            <div className="my-2">
              <p className="font-serif">With Driver: 10hrs/day Self Drive: 24hrs</p>
              <p className="text-sm text-gray-500">Overtime: PKR 1000/hr</p>
            </div>
            <div className="my-4 text-sm text-gray-500">
              <p>Refill fuel at the end of the day or pay PKR 60/KM</p>
              <p>Excluding fuel & overtime charges</p>
            </div>
            <div className="mt-4">
              <p className="text-red-500 line-through">33,500 PKR/day</p>
              <p className="text-xl font-bold text-green-500">30,000 PKR/day</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              <button className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
                With Driver
              </button>
              <button className="w-full px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700">
                Self Drive
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free Cancellation</p>
          </div>
        </div>
      </div>

      {/* Why QuickRent Section */}
      <div className="text-center mt-16">
        <h1 data-aos="fade-up" className="text-3xl text-slate-800 font-serif">
          Why Rent Luxury Cars With QuickRent Car?
        </h1>
        <h1 data-aos="fade-up" className="text-slate-700 font-serif mt-5 mx-auto max-w-2xl">
          QuickRent Car Rental Service is widely regarded as one of the best Car
          Rental Service Providers serving not only Karachi but other major
          cities of Pakistan as well.
          <br />
          <br />
          The QuickRent Car team has extensive experience in renting cars in
          Karachi, allowing us to optimise your travel needs and make it simple
          for you to find the ideal vehicle for your journey.
          <br />
          <br />
          <p className="font-extrabold">
            Few Reasons to choose QuickRent Car over other car rental services:
          </p>
          <br />
          <p className="font-bold">1. There Are No Hidden Charges</p>
          Insurance is already included in the price of QuickRent Car Cars, so
          what you see online is exactly what you will be charged in addition to
          VAT and fuel.
          <br />
          <br />
          <p className="font-bold">2. Flexible Pricing Packages</p>
          QuickRent Car car rental offers flexible pricing packages.
          <br />
          <br />
          <p className="font-bold">3. 24 Hours Assistance</p>
          QuickRent Car provides assistance 24 hours a day, seven days a week.
        </h1>
      </div>
    </div>
  );
}
