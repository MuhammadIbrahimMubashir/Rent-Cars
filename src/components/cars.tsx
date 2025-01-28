"use client";

import Image from "next/image";
import budget from "../app/images/budget.png";
import standard from "../app/images/standard.png";
import luxury from "../app/images/luxury.png";
import suv from "../app/images/suv.png";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cars() {
  useEffect(() => {
      AOS.init({
        once: false,
      });
    }, []);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div data-aos="fade-up" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/budget" target="_blank">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={budget}
                  />
                </div>
                <div>
                  <h3 className="text-center text-slate-700 text-lg font-serif mb-1">
                    Budget
                  </h3>
                </div>
              </Link>
            </div>
            <div data-aos="fade-up" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/standard" target="_blank">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={standard}
                  />
                </div>
                <div>
                  <h3 className="text-center text-slate-700 text-lg font-serif mb-1">
                    Standard
                  </h3>
                </div>
              </Link>
            </div>
            <div data-aos="fade-up" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/luxury" target="_blank">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={luxury}
                  />
                </div>
                <div>
                  <h3 className="text-center text-slate-700 text-lg font-serif mb-1">
                    Luxury
                  </h3>
                </div>
              </Link>
            </div>
            <div data-aos="fade-up" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/suv" target="_blank">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={suv}
                  />
                </div>
                <div>
                  <h3 className="text-center text-slate-700 text-lg font-serif mb-1">
                    SUV
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
