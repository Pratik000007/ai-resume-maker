import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-16">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
        <p className="text-lg text-gray-500">
          Have questions, feedback, or want to collaborate?  
          We’d love to hear from you.
        </p>
      </section>

      <div className="divider my-12"></div>

      {/* Contact Layout */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="card bg-base-200 shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
            ></textarea>

            <button className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-xl" />
            <span>support@resumeai.dev</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary text-xl" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <span>India</span>
          </div>

          <div className="divider"></div>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-primary transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaLinkedin />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ResumeAI · Let’s Build Your Career
      </footer>
    </div>
  );
};

export default Contact;
