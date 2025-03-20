import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99/mo",
      features: ["1 Website", "Basic Support", "10GB Storage"],
      color: "border-blue-500 text-blue-500",
    },
    {
      name: "Pro",
      price: "$19.99/mo",
      features: ["5 Websites", "Priority Support", "50GB Storage"],
      color: "border-green-500 text-green-500",
    },
    {
      name: "Enterprise",
      price: "$49.99/mo",
      features: ["Unlimited Websites", "24/7 Support", "Unlimited Storage"],
      color: "border-purple-500 text-purple-500",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-200 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Pricing Plans</h2>
      <p className="text-gray-600 mt-2">Choose a plan that fits your needs.</p>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`bg-white shadow-xl border-2 ${plan.color} p-8 rounded-lg w-80 transform transition-transform hover:scale-105`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
            <p className="text-3xl font-bold mt-2">{plan.price}</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:opacity-90 transition">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
