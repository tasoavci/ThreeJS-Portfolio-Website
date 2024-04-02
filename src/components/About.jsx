import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "./../constants";
import { fadeIn, textVariant } from "./../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
      </motion.div>
      <motion.p
        className="text-[17px] mt-4 text-secondary max-w-3xl leading-[30px] text-center mx-auto"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm a skilled full-stack software developer with extensive experience in
        TypeScript and JavaScript, specializing in frameworks such as React,
        Node.js, and Three.js. With a strong background in API integrations and
        database connections, I'm adept at creating seamless end-to-end
        solutions. I excel at collaborating closely with clients to understand
        their needs and translate them into efficient, scalable, and
        user-friendly applications. As a quick learner, I'm always eager to
        explore new technologies and adapt to evolving industry trends. Let's
        collaborate to transform your ideas into impactful solutions that drive
        success!
      </motion.p>
      <div className="flex flex-wrap mt-20 gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
