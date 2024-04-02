import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Tahsin</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop, 3D visuals, user
            <br className="sm:block hidden" /> interfaces and web applications
          </p> */}
          <p className="sm:text-2xl text-xl mt-1">I specialize in</p>
          <TypeAnimation
            sequence={[
              "Web Applications",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "User Interfaces",
              1000,
              "Mobile Applications",
              1000,
              "API integrations",
              1000,
            ]}
            wrapper="span"
            speed={60}
            className="text-[#915eff] font-semibold"
            style={{
              fontSize: "2em",
              display: "inline-block",
            }}
            repeat={Infinity}
            preRenderFirstString={false}
          />
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute flex xs:bottom-0 bottom-20 w-full items-center justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              animate={{ y: [0, 24, 0] }}
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
