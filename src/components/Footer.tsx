import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-purple-400 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      
        
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Thulasigari Chaitanya</p>
        </div>
        
  
        <div className="flex space-x-6">
        
          <a
            href="https://www.linkedin.com/in/chaitanya-thulasigari-502a5b329"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/frequel45"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
