import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          About ResumeAI
        </h1>
        <p className="text-lg md:text-xl text-gray-500">
          AI-powered resume building designed for modern developers and
          professionals.
        </p>
      </section>

      {/* Divider */}
      <div className="divider my-12"></div>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-secondary">Our Mission</h2>
          <p className="text-white-600 leading-relaxed">
            Our mission is simple — help individuals create professional,
            industry-ready resumes using artificial intelligence. We remove
            formatting stress, content confusion, and repetitive effort, so
            you can focus on your career growth.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-secondary">
            Why ResumeAI?
          </h2>
          <p className="text-white-600 leading-relaxed">
            Traditional resume builders are static and outdated. ResumeAI
            adapts to your experience, skills, and industry trends using
            intelligent prompt-based generation powered by modern language
            models.
          </p>
        </div>
      </section>

      <div className="divider my-12"></div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-secondary mb-8">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-primary">
              AI Resume Generation
            </h3>
            <p className="text-white-600 mt-2">
              Generate structured, ATS-friendly resumes instantly from a simple
              description.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-primary">
              Custom JSON Output
            </h3>
            <p className="text-white-600 mt-2">
              Clean, consistent JSON output designed for developers and backend
              integration.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-primary">
              One-Click PDF Export
            </h3>
            <p className="text-white-600 mt-2">
              Convert resumes into professional PDFs ready for job applications.
            </p>
          </div>
        </div>
      </section>

      <div className="divider my-12"></div>

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-semibold text-secondary">
          Our Vision
        </h2>
        <p className="text-white-600 leading-relaxed">
          We aim to become a trusted AI career companion — helping users not
          only build resumes, but also prepare for interviews, track skills,
          and grow professionally in a competitive market.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ResumeAI · Built with AI & Passion
      </footer>
    </div>
  );
};

export default About;
