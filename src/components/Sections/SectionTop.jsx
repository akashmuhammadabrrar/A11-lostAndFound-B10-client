import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";

const SectionTop = () => {
  return (
    <div>
      <div className="m-10">
        <motion.h2
          animate={{ x: 50 }}
          transition={{
            duration: 2,
            delay: 1,
            ease: easeOut,
            repeat: Infinity,
          }}
          className="text-3xl font-semibold lg:text-5xl md:text-4xl lg:font-semibold text-center">
          Latest Find And Lost Recently.{" "}
          <motion.span
            animate={{ color: ["#ff8833", "#C70039", "#4fc208"] }}
            transition={{ duration: 2, repeat: Infinity }}>
            This May Help You!
          </motion.span>
        </motion.h2>
        <p className="text-center text-xl mt-4">
          Helping with morality and take responsibility to get them lost stuff.
          And You will get a gratitude
        </p>
      </div>
      <div className="divider">Here</div>
    </div>
  );
};

export default SectionTop;
