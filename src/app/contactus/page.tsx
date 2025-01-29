import Link from "next/link"
import mb from "../images/mb.png";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-slate-100 h-screen">
      <title>Contact Us</title>
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
            <Link href="/#cars" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[55px] hover:text-white rounded-[10px]">Cars</Link>
            <Link href="/#about-us" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[98px] hover:text-white rounded-[10px]">About Us</Link>
            <Link href="/#reviews" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[120px] hover:text-white rounded-[10px]">Our Reviews</Link>
            <Link href="" className="flex justify-center items-center hover:bg-slate-600 hover:h-8 hover:w-[108px] hover:text-white rounded-[10px]">Contact Us</Link>
          </nav>
        </div>
      </header>
      <section className="text-gray-600 body-font relative font-serif">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-[440]">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  NAME
                </h2>
                <p className="mt-1">QuickRent Car</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  quickrentcar@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-xl p-3">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              For bookings and inquiries, please feel free to contact us. We are
              available to assist you.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <Link href="/">
              <button className="text-white bg-slate-600 border-0 py-2 px-6 focus:outline-none hover:bg-slate-700 rounded text-lg xl:w-[425] lg:w-[425] md:w-[340] sm:w-[200]">
                Send
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
