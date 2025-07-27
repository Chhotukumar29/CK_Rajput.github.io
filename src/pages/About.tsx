import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const About = () => {
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
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-4">
            CK RAJPUT
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-600 font-light tracking-wider">
            AIML Engineer & Data Scientist
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91-8890502275</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>Chhotuchiitodiya@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Noida, UP</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-6">
              About Me
            </h2>
            <div className="space-y-4 font-body text-gray-700 leading-relaxed">
              <p>
                I am a passionate AIML Engineer and Data Scientist with
                extensive experience in developing and deploying cutting-edge
                machine learning applications. Currently working at MapleCloud
                Technologies, I specialize in computer vision, natural language
                processing, and AI-powered enterprise solutions.
              </p>
              <p>
                My expertise spans across Python, FastAPI, machine learning
                frameworks like TensorFlow and PyTorch, and cloud platforms
                including AWS. I have successfully led teams and delivered
                impactful projects in object detection, face recognition
                systems, and automated analytics platforms.
              </p>
              <p>
                I am committed to leveraging AI and machine learning to solve
                real-world problems and drive innovation across various
                industries. My approach combines technical excellence with
                strategic thinking to deliver solutions that create meaningful
                business value.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            {/* Personal Image */}
            <div className="mb-8">
              <img
                src="/src/assets/about me.jpg"
                alt="CK Rajput - AIML Engineer"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-6">
              Current Role
            </h2>
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h3 className="font-heading text-xl text-gray-800 mb-2">
                AIML Engineer
              </h3>
              <p className="text-gray-600 mb-4">
                MapleCloud Technologies • Feb 2025 – Present
              </p>
              <ul className="space-y-3 font-body text-gray-700 text-sm leading-relaxed">
                <li>
                  • Developing real-time object detection systems using YOLO and
                  FastAPI
                </li>
                <li>
                  • Building AI-powered tools for SQL/NoSQL database querying
                  using NLP
                </li>
                <li>
                  • Engineering face verification systems for law enforcement
                  applications
                </li>
                <li>
                  • Creating automated chatbot solutions for enterprise support
                </li>
                <li>
                  • Implementing data lake architectures with Hadoop and Power
                  BI integration
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="font-heading text-2xl text-gray-800 mb-4">
                Core Competencies
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Machine Learning",
                  "Computer Vision",
                  "Natural Language Processing",
                  "Deep Learning",
                  "Python & FastAPI",
                  "Cloud Computing (AWS)",
                  "Data Analytics",
                  "Team Leadership",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/30 backdrop-blur-sm rounded-md px-3 py-2 text-center text-sm font-medium text-gray-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
