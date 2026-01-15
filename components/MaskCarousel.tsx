import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MASKS } from '../constants';
import { MaskData } from '../types';
import { X } from 'lucide-react';

const MaskCarousel: React.FC = () => {
  const [selectedMask, setSelectedMask] = useState<MaskData | null>(null);

  return (
    <section className="py-8 relative min-h-[280px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />

      <h2 className="font-retro text-center text-[10px] text-neon-magenta mb-8 relative z-10 bg-black px-3 py-1 border border-neon-magenta transform -skew-x-12 inline-block mx-auto shadow-[0_0_10px_#FF00FF]">
        PERSONA SYSTEM: SELECT MASK
      </h2>

      <div className="flex justify-center items-center gap-4 sm:gap-8 z-10 w-full px-4 pb-4">
        {MASKS.map((mask, index) => (
          <div key={mask.id} className="relative group cursor-pointer" onClick={() => setSelectedMask(mask)}>
             {/* Floating Wrapper - Smooth continuous animation */}
             <motion.div
               animate={{
                 y: [0, -10, 0],
                 rotate: [0, 2, -2, 0]
               }}
               transition={{
                 duration: 6,
                 ease: "easeInOut",
                 repeat: Infinity,
                 delay: index * 0.8 // Staggered start
               }}
             >
                <motion.div
                  layoutId={`mask-container-${mask.id}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 transition-all duration-300 relative"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                    {/* Pixel Art Rendering */}
                    <motion.img 
                        layoutId={`mask-image-${mask.id}`}
                        src={mask.imageSrc} 
                        alt={mask.name} 
                        className="w-full h-full object-contain pixelated rendering-pixelated group-hover:brightness-125 transition-all"
                        style={{ 
                            imageRendering: 'pixelated',
                            // LOGICA DA SILHUETA AQUI:
                            filter: mask.isLocked ? 'brightness(0) drop-shadow(0 0 1px rgba(255,255,255,0.5))' : 'none',
                            opacity: mask.isLocked ? 0.7 : 1
                        }}
                    />
                    
                    {/* Glitch Overlay on Hover (Só aparece se não estiver bloqueada) */}
                    {!mask.isLocked && (
                        <div className="absolute inset-0 bg-neon-cyan/20 opacity-0 group-hover:opacity-100 mix-blend-overlay pointer-events-none transition-opacity duration-75" />
                    )}
                    
                </motion.div>
                <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-retro text-[8px] bg-black px-1" style={{ color: mask.isLocked ? '#555' : mask.color }}>
                        {mask.isLocked ? '???' : mask.animal}
                    </span>
                </div>
             </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMask && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMask(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`mask-container-${selectedMask.id}`}
              className="relative w-full max-w-md bg-black border-2 p-1 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              style={{ 
                  borderColor: selectedMask.isLocked ? '#333' : selectedMask.color, 
                  boxShadow: selectedMask.isLocked ? 'none' : `0 0 30px ${selectedMask.color}30` 
              }}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none"></div>
              
              <div className="relative p-6 flex flex-col items-center">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedMask(null); }}
                    className="absolute top-2 right-2 text-white/50 hover:text-neon-red transition-colors z-20"
                  >
                    <X size={24} />
                  </button>

                  <div className="w-full flex items-center gap-6 mb-6 border-b border-white/10 pb-4">
                    <div className="w-24 h-24 flex-shrink-0 relative">
                         <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent blur-xl"></div>
                         <motion.img 
                            layoutId={`mask-image-${selectedMask.id}`}
                            src={selectedMask.imageSrc} 
                            alt={selectedMask.name} 
                            className="w-full h-full object-contain pixelated relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                            style={{ 
                                imageRendering: 'pixelated',
                                // LOGICA DA SILHUETA NO MODAL TAMBÉM:
                                filter: selectedMask.isLocked ? 'brightness(0) drop-shadow(0 0 2px rgba(255,255,255,0.5))' : 'none'
                            }}
                        />
                    </div>
                    <div>
                        <h3 className="font-retro text-2xl" style={{ 
                            color: selectedMask.isLocked ? '#777' : selectedMask.color, 
                            textShadow: selectedMask.isLocked ? 'none' : `0 0 10px ${selectedMask.color}` 
                        }}>
                        {selectedMask.name}
                        </h3>
                        <p className="font-mono text-gray-400 text-xs mt-2 uppercase tracking-widest bg-white/5 inline-block px-2 py-1 rounded">
                        PROTOCOL: {selectedMask.isLocked ? 'LOCKED' : selectedMask.animal}
                        </p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-900/50 p-4 rounded border border-white/5 mb-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: selectedMask.isLocked ? '#333' : selectedMask.color }}></div>
                        <p className="font-mono text-gray-200 text-xs sm:text-sm leading-relaxed text-justify">
                            {selectedMask.description}
                        </p>
                  </div>

                  <div className="w-full flex justify-between items-center border-t border-white/10 pt-3">
                      <span className="font-retro text-[8px] text-gray-500">SYSTEM STATUS</span>
                      <span className="font-mono text-[10px] animate-pulse" style={{ color: selectedMask.isLocked ? '#555' : selectedMask.color }}>
                        {selectedMask.stats}
                      </span>
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MaskCarousel;
