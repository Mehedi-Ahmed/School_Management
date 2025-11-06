
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-sky-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">About Our School</h2>
          <p className="mt-2 text-slate-600">A Tradition of Excellence Since 1990</p>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-slate-700 space-y-6 text-justify">
          <p>
            Established in 1990 by visionary founder Prof. Dr. M. A. Rahman, Modern Ideal School began its journey with a commitment to providing quality education and fostering holistic development. Our mission is to nurture young minds, equipping them with the knowledge, skills, and values necessary to excel in an ever-changing world.
          </p>
          <p>
            Our vision is to be a leading educational institution in Bangladesh, recognized for our academic excellence, innovative teaching methods, and commitment to character building. We strive to create a safe, supportive, and stimulating environment where every student can reach their full potential and become a responsible, compassionate, and contributing member of society.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
