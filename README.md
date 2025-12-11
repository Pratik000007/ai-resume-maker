🚀 AI Resume Maker

A full-stack AI-powered Resume Generator built using:

Spring Boot (Backend)

Ollama + Phi-3 Mini (LLM)

React + Vite + TailwindCSS (Frontend)

This application generates a structured JSON resume using AI and displays it in the frontend with a professionally styled resume PDF export.

🏗️ Project Structure
ai-resume-maker/
│
├── resume-ai-backend/      # Spring Boot backend + Ollama Service
│   ├── src/
│   ├── pom.xml
│   └── README.md
│
└── resume-frontend/        # React frontend
    ├── src/
    ├── package.json
    └── README.md

🔮 Features
✅ Backend

AI Resume generation using Ollama (phi3-mini)

Clean JSON structure output

REST API using Spring Boot

Handles missing fields by generating defaults

Supports Web, Postman, and any client app

✅ Frontend

Beautiful resume template (PDF export)

Auto-fills missing fields with defaults

Dynamic form builder

Clean, professional UI

Uses React + Tailwind + Vite

⚙️ Installation & Setup
1️⃣ Install Ollama (required for backend)

Download from:
https://ollama.com/download

After installation, pull the model:
ollama pull phi3:mini


Check model list:

ollama list

2️⃣ Run the Backend (Spring Boot)
Go inside backend folder:
cd resume-ai-backend

Start server:
mvn spring-boot:run


Backend runs at:
👉 http://localhost:8080

API Endpoint:

POST → /api/v1/resume/generate

Body:

{
  "fullName": "Pratik Mendhe",
  "experience": "Java backend developer..."
}

3️⃣ Run the Frontend (React)
Go inside frontend:
cd resume-frontend

Install dependencies:
npm install

Start the web app:
npm run dev


Frontend runs at:
👉 http://localhost:5173

📡 API Flow

Frontend → Backend → Ollama → AI JSON Output → Resume Form → PDF Download

📄 Example AI Response
{
  "summary": "Dynamic and tech-savvy backend developer...",
  "skills": [
    { "title": "Java", "level": "Intermediate" }
  ],
  "experience": [
    {
      "jobTitle": "Backend Developer",
      "company": "ABC Tech"
    }
  ]
}


Frontend fills empty fields using default values.

📥 Auto-Fill Default Fields (Frontend Logic)

If the backend does not provide values:

✔️ Name
✔️ Email
✔️ Skills
✔️ Experience
✔️ Education
✔️ Projects
✔️ Languages

All fields get automatically filled with clean defaults.

🖨️ Export as PDF

The Resume page includes:

✔️ Proper spacing
✔️ Better color palette (dark blue + gray + white)
✔️ Well-formatted sections
✔️ Perfect for job applications

🖼️ Screenshots (Add yours here later)
📌 Add 2–3 screenshots like:

- Home page
- Generate Resume form
- Generated Resume
- PDF preview

🛠️ Tech Stack
Backend

Java 17+

Spring Boot 3

Spring AI (Ollama)

Maven

Frontend

React 18

Vite

TailwindCSS

HTML2Canvas + jsPDF for PDF export

🤝 Contributing

Pull requests are welcome!

⭐ Support

If you like this project:
👉 Star this repository! ⭐

If you want, I can also create:

✅ Badges (Made with Java, React, etc.)
✅ Backend & Frontend README separately
✅ GitHub Actions CI/CD workflow
✅ License file
