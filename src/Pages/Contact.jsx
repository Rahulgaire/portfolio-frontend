import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://portfolio-backend-zky9.onrender.com/api/contact",form);
      toast.success(data.message || "Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start py-12 px-4">
      <Toaster position="top-right" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 text-center">
        Contact Me
      </h1>
      <p className="text-gray-300 text-center max-w-2xl mb-10">
        Have a project in mind or just want to say hi? Drop a message —
        I’ll get back to you as soon as possible!
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Contact Info */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-white space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-500" />
              <a href="mailto:gairerahul334@outlook.com" className="hover:underline">
                gairerahul334@outlook.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-500" />
              <a href="tel:+917347349556" className="hover:underline">
                +91 73473495xx
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span>Krishna Nagar, Ludhiana, Punjab, 141001</span>
            </li>
          </ul>

          {/* Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.4941491815175!2d75.82127057466899!3d30.90080902749183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83c6fd328bdf%3A0xfe5c403a888f6da0!2sKrishna%20Nagar%2C%20Ludhiana%2C%20Punjab%20141001!5e0!3m2!1sen!2sin!4v1747068947827!5m2!1sen!2sin"
            width="100%"
            height="300"
            className="rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-semibold text-white">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className="w-full mt-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full mt-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
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