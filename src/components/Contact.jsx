import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      platform: "Email",
      link: "mailto:vanshjii021@gmail.com",
      icon: <FaEnvelope className="text-2xl" />,
      username: "vanshjii021@gmail.com"
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/iamvtyagi/",
      icon: <FaLinkedin className="text-2xl" />,
      username: "iamvtyagi"
    },
    {
      platform: "GitHub",
      link: "https://github.com/iamvtyagi/",
      icon: <FaGithub className="text-2xl" />,
      username: "iamvtyagi"
    },
    {
      platform: "Twitter",
      link: "https://x.com/Iamvtyagii1",
      icon: <FaTwitter className="text-2xl" />,
      username: "@iamvtyagii1"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="mb-3 text-purple-400">
                {contact.icon}
              </span>
              <h3 className="text-lg font-semibold mb-2">{contact.platform}</h3>
              <p className="text-gray-400 text-center">{contact.username}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
