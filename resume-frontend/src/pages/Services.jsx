import React from "react";
import {
  FaRobot,
  FaFilePdf,
  FaCode,
  FaChartLine,
  FaCogs,
  FaBolt,
} from "react-icons/fa";

const services = [
  {
    title: "AI Resume Intelligence",
    icon: <FaRobot size={26} />,
    description:
      "Generate resumes using AI that understands role-based hiring expectations and modern ATS behavior.",
    highlight: true,
  },
  {
    title: "Smart Resume Structuring",
    icon: <FaCogs size={26} />,
    description:
      "Automatically organizes experience, skills, and projects into clean, industry-standard layouts.",
      highlight: true,
  },
  {
    title: "Structured JSON Resume Output",
    icon: <FaCode size={26} />,
    description:
      "Developer-friendly JSON format for easy rendering, customization, and backend automation.",
      highlight: true,
    },
  {
    title: "Instant PDF Export",
    icon: <FaFilePdf size={26} />,
    description:
      "Download professional, recruiter-ready PDF resumes in one click.",
      highlight: true,
  },
  {
    title: "ATS Compatibility",
    icon: <FaChartLine size={26} />,
    description:
      "Optimized to pass Applicant Tracking Systems used by top tech and enterprise companies.",
      highlight: true,
  },
  {
    title: "Performance Optimized",
    icon: <FaBolt size={26} />,
    description:
      "Built with lightweight AI models for fast responses even on low-resource machines.",
      highlight: true,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-16">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          What ResumeAI Does Best
        </h1>
        <p className="text-lg text-gray-500">
          Tools designed to help you create resumes that get noticed — not ignored.
        </p>
      </section>

      <div className="divider my-12"></div>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 border transition-all duration-300
              ${
                service.highlight
                  ? "border-primary bg-primary/10"
                  : "border-base-300 hover:border-primary/50"
              }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-lg bg-primary text-primary-content">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold">
                {service.title}
              </h2>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      <div className="divider my-14"></div>

      {/* Target Audience */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Built For Modern Job Seekers
        </h2>
        <p className="text-gray-600">
          Ideal for students, freshers, developers, and professionals who want
          speed, structure, and credibility in their resumes.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10 text-center">
        <button className="btn btn-primary btn-wide text-lg">
          Create My Resume Now
        </button>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ResumeAI · Built for Results
      </footer>
    </div>
  );
};

export default Services;
