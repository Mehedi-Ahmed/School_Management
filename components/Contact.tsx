
import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, LocationMarkerIcon, FacebookIcon, YoutubeIcon, TwitterIcon } from './icons';

const Contact: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

  return (
    <motion.section
        id="contact"
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Contact Us</h2>
          <p className="mt-2 text-slate-600">We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-700">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <LocationMarkerIcon className="h-7 w-7 text-sky-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-slate-600">123 Education Road, Dhanmondi, Dhaka-1205, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PhoneIcon className="h-6 w-6 text-sky-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-600">+880 1700-000000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MailIcon className="h-6 w-6 text-sky-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-600">info@modernschool.edu.bd</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-500 hover:text-sky-600"><FacebookIcon className="h-7 w-7" /></a>
                <a href="#" className="text-slate-500 hover:text-sky-600"><TwitterIcon className="h-7 w-7" /></a>
                <a href="#" className="text-slate-500 hover:text-sky-600"><YoutubeIcon className="h-7 w-7" /></a>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-80 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.897354922883!2d90.3733853154331!3d23.75096089467253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ac97a48e77%3A0x2dea335a439c0e3d!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1658302035824!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
