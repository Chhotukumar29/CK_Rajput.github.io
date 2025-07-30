import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
// import { AI_1st, second, third, fourth, fifth, sixth } from "@/assets";

const Projects = () => {
  const projects = [
    {
      title: "LLM Q&A Chatbot",
      period: "Aug 2023 – Sept 2023",
      technologies: [
        "Python",
        "NLP",
        "LangChain",
        "LLM",
        "Gen AI",
        "RAG",
        "Streamlit",
      ],
      description:
        "Innovated and devised a LangChain Q&A Chatbot using Streamlit, OpenAI GPT-3.5-turbo, RAG, enhancing user interaction and information retrieval with advanced NLP techniques.",
      image: "./assets/AI_1st.jpg",
      category: "AI/ML",
    },
    {
      title: "Finance Application",
      period: "June 2023 – July 2023",
      technologies: ["Python", "FastAPI", "React.js", "Git", "Linux"],
      description:
        "Overhauled a finance app using Python, FastAPI, and React.js to enhancing user experience, streamline data entry and boosting performance by 30% through form and backend optimization.",
      image: "./assets/2nd.jpeg",
      category: "Full Stack",
    },
    {
      title: "Real-time Object Detection System",
      period: "Feb 2025 – Present",
      technologies: ["Python", "FastAPI", "YOLO", "Docker", "RTSP"],
      description:
        "Boosted real-time headcount object detection using Python, FastAPI, and YOLO, integrated with CCTV through RTSP for seamless object detection and real-time analytics deployed with Docker.",
      image: "./assets/3rd.jpg",
      category: "Computer Vision",
    },
    {
      title: "AI-powered Face Verification System",
      period: "Feb 2025 – Present",
      technologies: ["Python", "Computer Vision", "Face Recognition", "AWS"],
      description:
        "Engineered an AI-powered Face Verification System for NIA, ensuring compliance with Indian data protection laws, real-time face recognition, suspect tracking, and integration with law enforcement databases.",
      image: "./assets/4th.png",
      category: "Computer Vision",
    },
    {
      title: "AutoQuery Pro",
      period: "Feb 2025 – Present",
      technologies: ["AI Agents", "LangChain", "LLMs", "FastAPI", "NLP"],
      description:
        "Optimized AutoQuery Pro is an AI-powered, multi-agent tool enabling non-technical users to query SQL/NoSQL databases using NLP, manufactured with AI Agents, LangChain, LLMs, and FastAPI.",
      image: "./assets/5th.png",
      category: "AI/ML",
    },
    {
      title: "Water Quality Prediction Model",
      period: "March 2023 – Feb 2025",
      technologies: ["Python", "SciKit-Learn", "AWS EC2", "Machine Learning"],
      description:
        "Developed and executed a machine learning model to predict water quality and potability, leveraging EC, TOC, THMs, Hardness, and Turbidity parameters, using SciKit-Learn for analysis and prediction.",
      image: "./assets/6th.jpeg",
      category: "Data Science",
    },
  ];

  const categories = [
    "All",
    "AI/ML",
    "Computer Vision",
    "Data Science",
    "Full Stack",
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "rgb(252, 245, 199)" }}
    >
      {/* Header */}
      <header className="p-6 border-b border-gray-300/20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-4">
            Projects
          </h1>
          <p className="font-body text-xl text-gray-600 font-light tracking-wider max-w-3xl mx-auto">
            A showcase of my work in AI/ML, computer vision, data science, and
            full-stack development. Each project demonstrates my expertise in
            solving complex problems with innovative technology solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white/30 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white/50 transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <Calendar size={16} />
                  <span>{project.period}</span>
                </div>

                <h3 className="font-heading text-xl text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="font-body text-gray-700 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200/50 px-2 py-1 rounded text-xs text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-200/50 px-2 py-1 rounded text-xs text-gray-600">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/Chhotukumar29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href="https://github.com/Chhotukumar29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-white/50 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
