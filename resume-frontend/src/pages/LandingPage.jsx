import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaFileAlt, FaBriefcase } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useInView } from "react-intersection-observer";

const features = [
  { icon: <FaRocket size={36} className="text-primary" />, title: "AI-Powered", desc: "Our AI analyzes your input and generates a tailored resume for you." },
  { icon: <FaFileAlt size={36} className="text-secondary" />, title: "Multiple Templates", desc: "Choose from a variety of professionally designed resume templates." },
  { icon: <FaBriefcase size={36} className="text-accent" />, title: "Job-Specific Resumes", desc: "Optimize your resume for specific job roles and industries." },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    message: "This AI resume maker saved me so much time! My resume looks professional and got me multiple interviews."
  },
  {
    name: "Jane Smith",
    role: "Marketing Specialist",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    message: "I love the templates and the ease of use. Highly recommend this tool to anyone looking for a job."
  }
];

const LandingPage = () => {
  // Initialize particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative bg-base-100">

      {/* Hero Section with Particles */}
      <section className="relative  overflow-hidden bg-base-200 py-32">
        
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
            particles: {
              color: { value: "#ffffff" },
              links: { enable: true, color: "#ffffff", distance: 150 },
              move: { enable: true, speed: 1 },
              number: { value: 50 },
              size: { value: { min: 1, max: 3 } },
            },
          }}
        />

        <div className="hero-content text-center relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-text">
            Create Your Perfect Resume with AI
          </h1>
          <p className="py-6 text-lg md:text-xl max-w-2xl">
            Build a professional resume in minutes. Just describe yourself, and our AI will do the rest!
          </p>
          <Link
            to={"/generate-resume"}
            className="btn btn-primary btn-lg text-lg transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Sticky CTA */}
        <Link
          to="/generate-resume"
          className="fixed bottom-6 right-6 btn btn-primary shadow-lg hidden md:inline-block z-50"
        >
          Create Resume
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, idx) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
              return (
                <div
                  key={idx}
                  ref={ref}
                  className={`card bg-base-200 shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl ${inView ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${idx * 0.2}s`, animationFillMode: "forwards" }}
                >
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
              return (
                <div
                  key={idx}
                  ref={ref}
                  className={`card bg-base-100 shadow-xl p-6 rounded-xl hover:scale-105 transition-transform ${inView ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${idx * 0.3}s`, animationFillMode: "forwards" }}
                >
                  <p className="mb-4">"{t.message}"</p>
                  <div className="flex items-center justify-center mt-4">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={t.avatar} alt={t.name} />
                      </div>
                    </div>
                    <div className="ml-4 text-left">
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Resume?</h2>
          <p className="mb-8 text-lg text-gray-700">
            Join thousands of users who have landed their dream jobs with our AI resume maker.
          </p>
          <Link to="/generate-resume" className="btn btn-primary btn-lg text-lg transition-transform transform hover:scale-105">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="footer-title">AI Resume Maker</h4>
            <p>Your go-to tool for creating professional resumes with AI.</p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <Link to="/about" className="link link-hover">About Us</Link>
            <Link to="/services" className="link link-hover">Features</Link>
            <Link to="/contact" className="link link-hover">Contact</Link>
          </div>
          <div>
            <h4 className="footer-title">Legal</h4>
            <Link to="#" className="link link-hover">Privacy Policy</Link>
            <Link to="#" className="link link-hover">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>
        {`
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
          .animate-text { animation: gradient 3s ease infinite; background-size: 200% auto; }
          @keyframes gradient {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
