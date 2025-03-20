import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-gray-100 text-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Have questions? We'd love to hear from you!
      </motion.p>

      <motion.form
        className="mt-6 w-full max-w-md mx-auto bg-white p-8 shadow-lg rounded-xl"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
