import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaHackerrank, FaGithub, FaLinkedin } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-400 text-4xl" />,
    title: "Hackathon Champion",
    description: "Won Convergex Hackathon with Kawach - Secure Document Sharing App",
  },
  {
    icon: <FaHackerrank className="text-green-400 text-4xl" />,
    title: "Hackathon Enthusiast",
    description: "Participated in 5+ Hackathons, gaining valuable experience in rapid development",
  },
  {
    icon: <FaCode className="text-blue-400 text-4xl" />,
    title: "Problem Solver",
    description: "Solved 400+ DSA Problems across LeetCode, GeeksforGeeks, Coding Ninjas",
  },
];

const profiles = [
  {
    name: "LeetCode",
    icon: <FaCode />,
    link: "https://leetcode.com/chikuinsight",
    color: "from-purple-600 to-indigo-600",
    hoverColor: "from-purple-700 to-indigo-700"
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/iamvtyagi",
    color: "from-gray-700 to-gray-900",
    hoverColor: "from-gray-800 to-black"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/iamvtyagi",
    color: "from-blue-600 to-blue-800",
    hoverColor: "from-blue-700 to-blue-900"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-white bg-gradient-to-r ${profile.color} px-6 py-3 rounded-full hover:bg-gradient-to-r hover:${profile.hoverColor} transition-all transform hover:scale-105`}
            >
              {profile.icon}
              <span>View My {profile.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
