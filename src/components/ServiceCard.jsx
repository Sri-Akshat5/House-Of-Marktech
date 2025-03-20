import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyImage = lazy(() => import("./LazyImage"));

const ServiceCard = ({ title, description, imgSrc }) => {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-2xl p-6 text-center transition-all transform "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Suspense
        fallback={
          <div className="h-40 w-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-lg"></div>
        }
      >
        <LazyImage src={imgSrc} alt={title} className="rounded-lg mx-auto w-full h-40 object-cover" />
      </Suspense>
      
     
      

    </motion.div>
  );
};

export default ServiceCard;
