import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>

      {/* Hero Content */}
      <motion.div
        className="relative text-center z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome to <span className="text-blue-400">House Of Marktechs</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mt-4 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Experience the best services with us. Elevate your brand, grow your business!
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
