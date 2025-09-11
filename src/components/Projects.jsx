import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Kawach",
    description:
      "Secure document-sharing app using MERN stack, Cloudinary, QR Code Encryption",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary", "QR Code"],
    github: "https://github.com/iamvtyagi/kawach.git",
    live: "https://kawach-git-main-sujal862s-projects.vercel.app/",
  },
  {
    title: "Uber Clone",
    description:
      "Ride-hailing app using React, Node.js, MongoDB, Google Maps API",
    tech: ["React", "Node.js", "MongoDB", "Google Maps"],
    github: "https://github.com/iamvtyagi/Uber.git",
    live: "https://uber-1-n8he.onrender.com/",
  },
  {
    title: "SEON",
    description:
      "A real-time collaborative development environment with integrated AI assistance, live code execution, and team collaboration features.",
    tech: ["React", "Node.js", "WebSockets", "AI Integration"],
    github: "https://github.com/iamvtyagi/SEON_.git",
    live: "https://seon-pi.vercel.app/",
  },
  {
    title: "FlashLearn",
    description:
      "FlashLearn is an AI-powered learning platform that transforms PDFs and YouTube videos into interactive quizzes, making exam preparation faster and more engaging.",
    tech: ["React", "AI", "Firebase", "Tailwind CSS"],
    github: "https://github.com/iamvtyagi/flashLearn.git",
    live: "https://github.com/iamvtyagi/flashLearn.git",
  },
  {
    title: "Peer Connect",
    description:
      "Real-time video & chat app using WebRTC, Socket.io, Express.js",
    tech: ["WebRTC", "Socket.io", "Express.js"],
    github: "https://github.com/iamvtyagi/peer-connect.git",
    live: "https://omegle-af9h.onrender.com/",
  },
  {
    title: "Weather App",
    description: "Weather forecasting app using OpenWeather API, React.js",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/iamvtyagi/weather-apk-project.git",
    live: "https://iamvtyagi.github.io/weather-apk-project/",
  },
  {
    title: "Sidcup Family Golf",
    description: "Golf booking website using HTML, CSS, JavaScript, GSAP",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/iamvtyagi/Sidcup-Family-Golf.git",
    live: "https://sidcup-family-golf-pipb.vercel.app/",
  },
  {
    title: "Sundown Studio",
    description: "Animated website using Locomotive Scroll, GSAP, Swiper.js",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/iamvtyagi/Sundown-Studio.git",
    live: "https://sundown-studio-beta.vercel.app",
  },
  {
    title: "Khatabook",
    description: "Khatabook app using Node.js, Express.js, Tailwind CSS",
    tech: ["Node.js", "Express.js", "Tailwind CSS"],
    github: "https://github.com/iamvtyagi/Khatabook.git",
    live: "https://khatabook-nast.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
