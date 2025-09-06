import { features } from "../../utils/FeaturesData";
import Card from "../common/Card";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {features.map(({ title, description, icon }) => (
        <motion.div
          key={title}
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card title={title} description={description} icon={icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesSection;
