import { FeaturesSection, LandingText } from "../../components";
import LandingForm from "../../components/ui/LandingForm";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const LandingPage = () => {
  return (
    <div className="position mt-20 ">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <LandingText />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <LandingForm />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <FeaturesSection />
      </motion.div>
    </div>
  );
};

export default LandingPage;
