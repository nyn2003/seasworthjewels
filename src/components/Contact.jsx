import React from "react";

const Contact = () => {
  return (
    <div
      className="bg-white text-gray-900 pt-28 pb-20 px-4 sm:px-6 lg:px-10"
      style={{
        fontFamily:
          "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto text-base sm:text-lg text-gray-500 mb-6">
        <span className="cursor-pointer hover:text-gray-800 transition-colors">
          Home
        </span>
        <span className="mx-2">{">"}</span>
        <span className="text-gray-800">Contact</span>
      </div>

      {/* Page Title & Subtitle */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-light tracking-[0.25em] mb-5 uppercase">
          Contact
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
          Click on your nearest store location below to set the route on Google
          Map.
        </p>
      </div>

      {/* Map Section */}
      <div className="max-w-5xl mx-auto mb-14 shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="aspect-[16/9] w-full">
          <iframe
            title="Store Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29664.955852927598!2d72.7859426895659!3d21.17024018028392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f139b1e1b59%3A0xdeb41a136e2e2fb5!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 md:gap-6 text-center mb-14">
        {/* Our Store */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mb-4 bg-white shadow-sm text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M4 10L12 4l8 6v8H4z" />
              <path d="M9 18v-4h6v4" />
            </svg>
          </div>
          <h3 className="text-sm sm:text-base font-semibold tracking-[0.2em] mb-3 text-gray-800">
            OUR STORE
          </h3>
          <p className="text-base text-gray-600 leading-relaxed">
            1st Floor, Dev House, Wadelwadi Road,
            <br />
            Katargam, Surat-395004
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mb-4 bg-white shadow-sm text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M5 4h3l2 4-2 1c.7 1.6 2 3 3.6 3.6l1-2 4 2v3c0 .6-.4 1-1 1A11 11 0 0 1 4 6c0-.6.4-1 1-1z" />
            </svg>
          </div>
          <h3 className="text-sm sm:text-base font-semibold tracking-[0.2em] mb-3 text-gray-800">
            CONTACT INFO
          </h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Office: (+91) 99977 34466
            <br />
            Telephone: (+91) 99989 02878
            <br />
            E-mail: tulipsjwels@gmail.com
          </p>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mb-4 bg-white shadow-sm text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="13" r="7" />
              <path d="M12 13V9m0 4h3" />
              <path d="M9 3L7 5m8-2l2 2" />
            </svg>
          </div>
          <h3 className="text-sm sm:text-base font-semibold tracking-[0.2em] mb-3 text-gray-800">
            BUSINESS HOURS
          </h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Monday - Saturday
            <br />
            09:00 am - 08:00 pm
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto border-t border-gray-200 mb-12" />

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-light mb-4">
          Have an question? Contact us!
        </h2>
      </div>

      <div className="max-w-3xl mx-auto bg-white border border-gray-200 shadow-sm px-6 sm:px-8 py-8">
        <form className="space-y-6 text-base">
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 px-3 py-2 w-full text-sm focus:outline-none focus:border-gray-500 placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 px-3 py-2 w-full text-sm focus:outline-none focus:border-gray-500 placeholder:text-gray-400"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 px-3 py-2 w-full text-sm focus:outline-none focus:border-gray-500 placeholder:text-gray-400"
          />

          {/* Comment */}
          <textarea
            rows="5"
            placeholder="Write Your Comment..."
            className="border border-gray-300 px-3 py-2 w-full text-sm resize-none focus:outline-none focus:border-gray-500 placeholder:text-gray-400"
          ></textarea>

          {/* Terms */}
          <label className="flex items-center gap-2 text-xs text-gray-600 select-none">
            <input
              type="checkbox"
              className="w-3.5 h-3.5 border-gray-300 rounded-sm"
            />
            <span>Terms &amp; Conditions</span>
          </label>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="mt-2 w-full bg-black text-white text-xs tracking-[0.25em] py-3 uppercase hover:bg-gray-900 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
