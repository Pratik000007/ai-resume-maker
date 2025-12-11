import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const Resume = ({ data }) => {
  const resumeRef = useRef(null);

  const handleDownloadPdf = () => {
    toPng(resumeRef.current, { quality: 1.0 })
      .then((dataUrl) => {
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(dataUrl, "PNG", 10, 10, 190, 0);
        pdf.save(`${data.personalInformation.fullName}.pdf`);
      })
      .catch((err) => console.error("Error generating PDF", err));
  };

  const sectionStyle = "mb-6 p-4 rounded-lg shadow-sm bg-gray-50 border border-gray-200";

  return (
    <>
      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto shadow-xl rounded-lg p-8 space-y-6 bg-white text-gray-800"
      >
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">
            {data.personalInformation.fullName}
          </h1>
          <p className="text-lg text-gray-600">{data.personalInformation.location}</p>

          <div className="flex justify-center space-x-4 mt-2 text-gray-700">
            {data.personalInformation.email && (
              <a href={`mailto:${data.personalInformation.email}`} className="flex items-center text-blue-600 hover:underline">
                <FaEnvelope className="mr-2" /> {data.personalInformation.email}
              </a>
            )}
            {data.personalInformation.phoneNumber && (
              <p className="flex items-center">
                <FaPhone className="mr-2" /> {data.personalInformation.phoneNumber}
              </p>
            )}
          </div>

          <div className="flex justify-center space-x-4 mt-2 text-gray-700">
            {data.personalInformation.gitHub && (
              <a
                href={data.personalInformation.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-gray-900"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
            {data.personalInformation.linkedIn && (
              <a
                href={data.personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className={sectionStyle}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
          <p className="text-gray-700">{data.summary}</p>
        </div>

        {/* Skills */}
        <div className={sectionStyle}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {skill.title} - {skill.level}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className={sectionStyle}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Experience</h2>
          {data.experience.map((exp, idx) => (
            <div key={idx} className="mb-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{exp.jobTitle}</h3>
              <p className="text-gray-600">{exp.company} | {exp.location}</p>
              <p className="text-gray-500">{exp.duration}</p>
              <p className="text-gray-700 mt-1">{exp.responsibility}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={sectionStyle}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
          {data.education.map((edu, idx) => (
            <div key={idx} className="mb-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.university}, {edu.location}</p>
              <p className="text-gray-500">🎓 Graduation Year: {edu.graduationYear}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={sectionStyle}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Certifications</h2>
          {data.certifications.map((cert, idx) => (
            <div key={idx} className="mb-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
              <p className="text-gray-600">{cert.issuingOrganization} - {cert.year}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className={sectionStyle}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
          {data.projects.map((proj, idx) => (
            <div key={idx} className="mb-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{proj.title}</h3>
              <p className="text-gray-700 mt-1">{proj.description}</p>
              <p className="text-gray-600 mt-1">🛠 {Array.isArray(proj.technologiesUsed) ? proj.technologiesUsed.join(", ") : proj.technologiesUsed}</p>
              {proj.githubLink && (
                <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  🔗 GitHub Link
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Achievements */}
        {data.achievements && data.achievements.length > 0 && (
          <div className={sectionStyle}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Achievements</h2>
            {data.achievements.map((ach, idx) => (
              <div key={idx} className="mb-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">{ach.title}</h3>
                <p className="text-gray-600">{ach.year}</p>
                <p className="text-gray-700 mt-1">{ach.extraInformation}</p>
              </div>
            ))}
          </div>
        )}

        {/* Languages */}
        <div className={sectionStyle}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Languages</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {data.languages.map((lang, idx) => (
              <li key={idx}>{lang.name}</li>
            ))}
          </ul>
        </div>

        {/* Interests */}
        <div className={sectionStyle}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Interests</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {data.interests.map((int, idx) => (
              <li key={idx}>{int.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Print Button */}
      <div className="flex justify-center mt-4">
        <button onClick={handleDownloadPdf} className="btn btn-blue px-6 py-2 font-semibold">
          Download PDF
        </button>
      </div>
    </>
  );
};

export default Resume;
