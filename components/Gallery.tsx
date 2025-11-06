
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../constants';
import { XIcon } from './icons';

const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedImage = selectedId ? galleryImages.find(img => img.id === selectedId) : null;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Events & Photo Gallery</h2>
          <p className="mt-2 text-slate-600">Moments we cherish and celebrate.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`card-${image.id}`}
              onClick={() => setSelectedId(image.id)}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`card-${selectedImage.id}`}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
              >
                <img src={selectedImage.src} alt={selectedImage.alt} className="w-auto h-auto max-w-full max-h-[90vh] object-contain" />
                <button 
                  onClick={() => setSelectedId(null)} 
                  className="absolute top-2 right-2 bg-white/50 rounded-full p-2 text-slate-800 hover:bg-white transition-colors"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
