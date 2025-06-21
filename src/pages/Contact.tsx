import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-4">
            Contact
          </h1>
          <p className="font-body text-xl text-gray-600 font-light tracking-wider max-w-3xl mx-auto">
            Let's connect! I'm always interested in discussing new
            opportunities, collaborations, or innovative AI/ML projects. Feel
            free to reach out via email, phone, or the contact form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91-8890502275</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">Chhotuchiitodiya@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Location</h3>
                  <p className="text-gray-600">Noida, UP, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading text-xl text-gray-800 mb-4">
                Connect with me
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 bg-white/40 backdrop-blur-sm rounded-lg">
              <h3 className="font-heading text-xl text-gray-800 mb-3">
                Availability
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                I'm currently working as an AIML Engineer at MapleCloud
                Technologies and am open to discussing:
              </p>
              <ul className="mt-3 space-y-2 font-body text-gray-700 text-sm">
                <li>• Freelance AI/ML consulting projects</li>
                <li>• Speaking opportunities at tech conferences</li>
                <li>• Collaboration on research projects</li>
                <li>• Mentoring opportunities in data science</li>
                <li>• Open source contributions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-8">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all"
                  placeholder="Project Collaboration Opportunity"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>

            <div className="mt-8 p-4 bg-gray-100/50 backdrop-blur-sm rounded-lg">
              <p className="text-gray-600 text-sm text-center">
                <strong>Response Time:</strong> I typically respond to messages
                within 24-48 hours. For urgent matters, please call or text me
                directly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
