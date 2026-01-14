import React from 'react';
import { CHARACTER_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-black/95 border-b border-neon-magenta/50 backdrop-blur-md p-4 shadow-[0_0_20px_rgba(255,0,255,0.2)]">
      <div className="flex items-center gap-4">
        {/* Avatar Container */}
        <div className="relative group">
          <div className="w-16 h-16 rounded border-2 border-neon-cyan overflow-hidden shadow-[0_0_15px_#00FFFF] relative z-10 bg-black">
            <img 
              src="https://picsum.photos/id/1005/200/200" 
              alt="J" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -inset-1 bg-neon-cyan/30 blur-sm -z-0 animate-pulse"></div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-retro text-neon-cyan text-sm sm:text-base tracking-widest text-glow-cyan mb-1">
                {CHARACTER_INFO.name}
              </h1>
              <span className="font-mono text-xs text-neon-magenta block tracking-wider">
                CODE: {CHARACTER_INFO.code}
              </span>
            </div>
            <div className="text-right">
              <div className="font-retro text-neon-yellow text-sm drop-shadow-[0_0_5px_rgba(234,255,0,0.8)] border border-neon-yellow px-2 py-1 bg-neon-yellow/10 transform skew-x-[-10deg]">
                RANK {CHARACTER_INFO.rank}
              </div>
            </div>
          </div>
          
          <div className="mt-2 flex items-center gap-3 text-[10px] font-mono text-gray-400">
             <span className="bg-gray-900 px-1 border border-gray-700">{CHARACTER_INFO.race}</span>
             <span className="bg-gray-900 px-1 border border-gray-700 truncate">{CHARACTER_INFO.class}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;