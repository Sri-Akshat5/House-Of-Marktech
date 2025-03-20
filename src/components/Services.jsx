import { Code, Search, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive, and high-performance web applications.",
      icon: <Code className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "SEO Optimization",
      description: "Improve your website ranking with the latest SEO techniques.",
      icon: <Search className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand and reach a wider audience effectively.",
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
      <p className="text-gray-600 mt-2">We provide top-notch digital solutions to scale your business.</p>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg w-80 flex flex-col items-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
