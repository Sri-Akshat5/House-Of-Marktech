import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Brand */}
        <a href="/" className="text-2xl font-bold text-blue-400">
          House of MarkTechs 🚀
        </a>

        {/* Social Media */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
            <a
              key={index}
              href="https://akshat-srivastava-navy.vercel.app/"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-0 text-sm">&copy; Design and Developed by Akshat Srivastava</p>
      </div>
    </footer>
  );
};

export default Footer;
