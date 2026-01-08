import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="bg-black">
      <section id="contact" className="mt-12 pb-12 md:py-20  text-white mx-4">
        <div className="container mx-auto max-w-7xl">
          {/* Main Card: Mobile ma padding thorai, Desktop ma dherai */}
          <div className="p-6 sm:p-8 md:p-12 backdrop-blur-sm bg-linear-to-b from-gray-900 to-black border border-white/10 shadow-2xl rounded-2xl">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-16 relative pb-4">
              Lets Have a Chat
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1 bg-blue-500 rounded"></span>
            </h2>

            {/* Grid Layout: Mobile ma 1 column, MD screen ma 2 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* LEFT SIDE: Contact Information */}
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
                  Contact Information
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Have a project in mind or just want to say hello? Feel free to
                  reach out. I am always open to discussing new ideas and
                  opportunities.
                </p>

                <div className="space-y-3 md:space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:adityalraj003@gmail.com"
                    className="flex items-center p-3 rounded-lg transition-all hover:bg-white/10 group border border-transparent hover:border-white/5"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 mr-4 text-blue-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm md:text-base break-all group-hover:text-blue-300 transition-colors">
                      biraj9731@gmail.com
                    </span>
                  </a>

                  {/* Phone */}
                  <div className="flex items-center p-3 rounded-lg transition-all hover:bg-white/10 group border border-transparent hover:border-white/5">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 mr-4 text-blue-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm md:text-base group-hover:text-blue-300 transition-colors">
                      +977 9766905680
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center p-3 rounded-lg transition-all hover:bg-white/10 group border border-transparent hover:border-white/5">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 mr-4 text-blue-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm md:text-base group-hover:text-blue-300 transition-colors">
                      Naya Naikap, Kathmandu
                    </span>
                  </div>
                </div>

                {/* Social Links Container */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-300 mb-4 font-medium">Find me on:</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.instagram.com/birajshrestha903/"
                      target="_blank"
                    >
                      <Image
                        src={`/icons8-instagram-96.png`}
                        alt="cv"
                        width={28}
                        height={20}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/biraj-shrestha-b5916b344/"
                      target="_blank"
                    >
                      <Image
                        src={`/icons8-linkedin-96.png`}
                        alt="cv"
                        width={28}
                        height={20}
                      />
                    </a>
                    <a href="https://github.com/BirajShrestha9" target="_blank">
                      <Image
                        src={`/icons8-github-100.png`}
                        alt="cv"
                        width={28}
                        height={20}
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Responsive Form */}
              <div className="order-1 lg:order-2 bg-black/40 p-5 md:p-8 rounded-2xl border border-white/10 shadow-inner">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all active:scale-95 shadow-lg shadow-blue-900/40"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
