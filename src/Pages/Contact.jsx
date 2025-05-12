import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start py-12 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 text-center">
        Contact Me
      </h1>

      <p className="text-gray-300 text-center max-w-2xl mb-10">
        Have a project in mind or just want to say hi? Feel free to drop a message — I’ll get back to you as soon as possible!
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info + Map */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-white space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>gairerahul334@outlook.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+91 8427384685</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>Krishna Nagar, Ludhiana, Punjab, 141001</span>
              </li>
            </ul>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.4941491815175!2d75.82127057466899!3d30.90080902749183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83c6fd328bdf%3A0xfe5c403a888f6da0!2sKrishna%20Nagar%2C%20Ludhiana%2C%20Punjab%20141001!5e0!3m2!1sen!2sin!4v1747068947827!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-white">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full mt-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full mt-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
