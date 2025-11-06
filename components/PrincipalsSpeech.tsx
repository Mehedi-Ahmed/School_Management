
import React from 'react';
import { motion } from 'framer-motion';

const PrincipalsSpeech: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      id="principal-speech"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Message from the Principal</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="flex-shrink-0">
            <img 
              src="https://picsum.photos/250/250?random=principal" 
              alt="Principal's Photo" 
              className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover shadow-lg border-4 border-sky-100"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-slate-800">Dr. Anisur Rahman</h3>
            <p className="text-sky-600 font-medium mb-4">Principal, Modern Ideal School</p>
            <blockquote className="text-lg text-slate-600 italic border-l-4 border-sky-300 pl-6">
              "It is with great pride that I welcome you to our school's digital home. Here, we believe that education is not just about imparting knowledge, but about building character. We are dedicated to creating a generation of learners who are not only academically proficient but also ethically strong and socially responsible. Join us in this noble journey of shaping the future."
            </blockquote>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PrincipalsSpeech;
