
import React from 'react';
import { motion } from 'framer-motion';
import { notices } from '../constants';
import { CalendarIcon, ChevronRightIcon } from './icons';

const Notices: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      id="notices"
      className="py-20 bg-sky-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Notices & Announcements</h2>
          <p className="mt-2 text-slate-600">Stay updated with the latest news from our school.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <ul className="divide-y divide-slate-200">
            {notices.map((notice) => (
              <li key={notice.id}>
                <a href={notice.link} className="group flex items-center justify-between p-4 -mx-4 hover:bg-sky-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <CalendarIcon className="h-6 w-6 text-sky-500" />
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-sky-700">{notice.title}</p>
                      <p className="text-sm text-slate-500">{notice.date}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-slate-400 group-hover:text-sky-600 transform transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-8">
          <a href="#all-notices" className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors shadow-sm">
            View All Notices
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Notices;
