"use client";

import React, { useEffect } from "react";
import { CarouselPlugin } from "../components/carso";
import { CarouselSpacing } from "@/components/threecarso";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "./component/page";
import mb from "../app/images/mb.png";
import t from "../app/images/t.png";
import h from "../app/images/h.png";
import s from "../app/images/s.png";
import d from "../app/images/d.png";
import a from "../app/images/a.png";
import m from "../app/images/m.png";
import Cars from "@/components/cars";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div className="bg-slate-100 h-full">
      <title>QuickRent Cars</title>

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
            <Link href="/" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[68px] hover:text-white rounded-[10px]">Home</Link>
            <Link href="#cars" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[55px] hover:text-white rounded-[10px]">Cars</Link>
            <Link href="#about-us" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[98px] hover:text-white rounded-[10px]">About Us</Link>
            <Link href="#reviews" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[120px] hover:text-white rounded-[10px]">Our Reviews</Link>
            <Link href="/contactus" target="_blank" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[108px] hover:text-white rounded-[10px]">Contact Us</Link>
          </nav>
        </div>
      </header>

      <div>
        <CarouselPlugin />
      </div>
      <div data-aos="fade-up">
        <SearchForm />
      </div>
      <div className="text-center p-5 mt-[90]">
        <h2
          data-aos="fade-up"
          className="mb-5 text-3xl text-center text-slate-800 font-serif"
        >
          Connecting you to the biggest brands in car rental
        </h2>
        <div className="flex justify-center gap-5 flex-wrap">
          <Image
            src={m}
            alt="Sixt"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={a}
            alt="Easirent"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={t}
            alt="Thrifty"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={h}
            alt="Sixt"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={d}
            alt="Easirent"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={s}
            alt="Thrifty"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
        </div>
      </div>
      <section id="cars" className="text-slate-700 body-font">
        <div>
          <h1
            data-aos="fade-up"
            className="mt-32 text-3xl text-center text-slate-800 font-serif"
          >
            What type of car are you looking for?
          </h1>
        </div>
        <Cars/>
      </section>

      <section id="about-us">
        <div>
          <h1
            data-aos="fade-up"
            className="text-center mt-40 text-3xl text-slate-800 font-serif"
          >
            About Us
          </h1>
          <h1
            data-aos="fade-up"
            className="xl:ml-40 xl:mr-40 lg:ml-40 lg:mr-40 text-slate-700 font-serif mt-5"
          >
            Welcome to QuickRent Cars– your trusted car rental solution!
            <br />
            <br />
            - We specialize in providing reliable, affordable, and high-quality
            car rental services to meet your travel needs. Whether it’s a
            business meeting, family outing, road trip, or special occasion, we
            have the perfect vehicle for you.
            <br />
            <br />
            - Our fleet offers a wide range of options, from budget-friendly
            compact cars to luxurious SUVs and sedans. Every vehicle is
            well-maintained, thoroughly inspected, and ready to give you a
            smooth and safe driving experience.
            <br />
            <br />
            - Why Choose Us?
            <br />
            <br />
            ● Affordable pricing with no hidden charges
            <br />
            ● Flexible rental plans: hourly, daily, weekly, or monthly
            <br />
            ● 24/7 customer support to assist you anytime
            <br />
            ● Easy booking process through our user-friendly website
            <br />
            <br />
            - At QuickRent Cars, we believe in making your journey hassle-free
            and enjoyable. Whether you’re exploring the city or heading out of
            town, we’re here to ensure your comfort and convenience.
            <br />
            <br />- Rent with us today and experience the freedom to drive on
            your terms!
            <br/> 
          </h1>
        </div>
        
      </section>
      <section id="reviews">
        <div>
          <h1
            data-aos="fade-up"
            className="text-center mt-48 text-3xl text-slate-800 font-serif"
          >
            Our Reviews
          </h1>
          <div
            data-aos="fade-up"
            className="bg-slate-600 w-screen h-96 flex justify-center items-center"
          >
            <CarouselSpacing />
          </div>
        </div>
      </section>
    </div>
  );
}
