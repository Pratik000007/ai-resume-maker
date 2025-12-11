export const fillDefaults = (resume) => {
  return {
    personalInformation: {
      fullName: resume?.personalInformation?.fullName || "John Doe",
      email: resume?.personalInformation?.email || "john@example.com",
      phoneNumber: resume?.personalInformation?.phoneNumber || "9999999999",
      location: resume?.personalInformation?.location || "India",
      linkedin: resume?.personalInformation?.linkedin || "https://linkedin.com/in/johndoe",
      gitHub: resume?.personalInformation?.gitHub || "https://github.com/johndoe",
      portfolio: resume?.personalInformation?.portfolio || "",
    },
    summary: resume?.summary || "Motivated software engineer with strong problem-solving skills.",
    skills: resume?.skills?.length ? resume.skills : [{ title: "Java", level: "Intermediate" }],
    experience: resume?.experience?.length
      ? resume.experience
      : [
          {
            jobTitle: "Software Developer Intern",
            company: "ABC Tech",
            location: "Remote",
            duration: "2023 - 2024",
            responsibility: "Developed REST APIs and frontend features",
          },
        ],
    education: resume?.education?.length
      ? resume.education
      : [
          {
            degree: "BE Information Technology",
            university: "KDK College of Engineering",
            location: "Nagpur",
            graduationYear: "2024",
          },
        ],
    certifications: resume?.certifications?.length
      ? resume.certifications
      : [{ title: "Java Full Stack", issuingOrganization: "XYZ", year: "2023" }],
    projects: resume?.projects?.length
      ? resume.projects
      : [
          {
            title: "Employee Management System",
            description: "CRUD based enterprise application",
            technologiesUsed: "Spring Boot, MySQL",
            githubLink: "",
          },
        ],
    languages: resume?.languages?.length ? resume.languages : [{ name: "English" }],
    interests: resume?.interests?.length ? resume.interests : [{ name: "Coding" }],
    achievements: resume?.achievements?.length ? resume.achievements : [],
  };
};
