import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

const AISummary = () => {
  return (
    <motion.div
      className=" w-[100%]"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-bg_blue w-[100%] rounded-2xl mt-7 p-5 lg:block lg:p-10">
        <h3 className="flex gap-3 items-center text-xl xl:text-2xl text-ghost_white">
          <BsStars color="white" size={22} />
          AI Summary
        </h3>
        <p className="mt-3 bg-[#141a3ec3] rounded-2xl p-4 xl:p-5 text-ghost_white text-sm">
          The video takes viewers on a journey through the vast scales of the
          universe, exploring the tiniest particles to the largest cosmic
          structures. It explains complex scientific concepts in a simple and
          engaging way, showing how everything in the cosmos is interconnected.
          Through stunning visuals and insightful narration, viewers gain a
          deeper appreciation of the wonders of space and the incredible journey
          of discovery that science enables.
        </p>
      </div>
    </motion.div>
  );
};

export default AISummary;
