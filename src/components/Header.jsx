import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaEye } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-gray-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-purple-400">Vansh Tyagi</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              MERN Stack Developer & Open Source Enthusiast
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              I build exceptional web applications with modern technologies. 
              Passionate about creating innovative solutions and contributing to open source projects.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/12vansh_tyagi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full transition-colors"
              >
                <FaEye />
                <span>View Resume</span>
              </a>
              <a
                href="/12vansh_tyagi.pdf"
                download
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <FaFileDownload />
                <span>Download Resume</span>
              </a>
              <a
                href="https://github.com/iamvtyagi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/iamvtyagi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 max-w-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30"></div>
              <img className="relative w-full h-full object-fit rounded-full border-4 border-purple-500 shadow-2xl"
                src="/photuuuuuuuuuuuu.jpg"
                alt="Vansh Tyagi"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(17,24,39,0.2))]"></div>
      </div>
    </header>
  );
};

export default Header;
