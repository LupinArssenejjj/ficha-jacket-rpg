import React, { useState } from 'react';
import { MISSION_RANKS, PROGRESSION_RULES, CHARACTER_INFO } from '../constants';
import { ChevronDown, ChevronUp, AlertTriangle, Shield, Skull } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MissionLog: React.FC = () => {
  const [expandedRank, setExpandedRank] = useState<string | null>(CHARACTER_INFO.rank);

  const toggleRank = (rank: string) => {
    setExpandedRank(expandedRank === rank ? null : rank);
  };

  return (
    <div className="flex flex-col h-full bg-black/90 border border-neon-cyan/20 rounded shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="p-4 border-b border-neon-cyan/20 bg-neon-cyan/5 backdrop-blur z-10">
        <h2 className="font-retro text-xs text-neon-cyan flex items-center gap-2">
           <Shield size={14} /> REGISTRO DE MISSÕES
        </h2>
        <p className="font-mono text-[10px] text-gray-400 mt-1">
          RANK ATUAL: <span className="text-neon-yellow text-xs animate-pulse">{CHARACTER_INFO.rank}</span>
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 z-10 scrollbar-hide">
        {MISSION_RANKS.map((item, index) => {
          const isCurrent = item.rank === CHARACTER_INFO.rank;
          const isCompleted = false; // Logic could be added if we tracked past ranks
          const percent = typeof item.required === 'number' 
            ? Math.min(100, (item.completed / item.required) * 100) 
            : item.completed > 0 ? 100 : 0;

          return (
            <div 
                key={item.rank} 
                className={`border transition-all duration-300 ${
                    isCurrent ? 'border-neon-cyan bg-neon-cyan/5' : 'border-white/10 bg-gray-900/50 hover:border-white/30'
                }`}
            >
              <button 
                onClick={() => toggleRank(item.rank)}
                className="w-full flex items-center justify-between p-3"
              >
                <div className="flex items-center gap-3">
                    <div 
                        className="w-8 h-8 flex items-center justify-center font-retro text-xs border"
                        style={{ 
                            borderColor: item.color, 
                            color: item.color,
                            boxShadow: isCurrent ? `0 0 10px ${item.color}` : 'none'
                        }}
                    >
                        {item.rank}
                    </div>
                    <div className="text-left">
                        <div className="font-retro text-[10px] text-gray-300">{item.title}</div>
                        <div className="font-mono text-[9px] text-gray-500 uppercase">{item.risk}</div>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    {/* Mini Progress Bar for Collapsed View */}
                    {typeof item.required === 'number' && (
                        <div className="flex flex-col items-end">
                             <span className="font-mono text-[9px] text-gray-400">
                                {item.completed}/{item.required}
                             </span>
                             <div className="w-16 h-1 bg-gray-800 mt-0.5">
                                <div 
                                    className="h-full transition-all duration-500" 
                                    style={{ width: `${percent}%`, backgroundColor: item.color }} 
                                />
                             </div>
                        </div>
                    )}
                    {expandedRank === item.rank ? <ChevronUp size={14} className="text-gray-500"/> : <ChevronDown size={14} className="text-gray-500"/>}
                </div>
              </button>

              <AnimatePresence>
                {expandedRank === item.rank && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-3 pt-0 border-t border-white/5">
                            <p className="font-mono text-xs text-gray-300 leading-relaxed mb-3 text-justify">
                                {item.description}
                            </p>
                            
                            <div className="bg-black/40 p-2 rounded border border-white/5 flex items-start gap-2 mb-3">
                                <AlertTriangle size={12} className="text-neon-yellow mt-0.5 shrink-0" />
                                <span className="font-mono text-[10px] text-neon-yellow">
                                    {item.narratorType}
                                </span>
                            </div>

                            {/* Detailed Progress */}
                            {typeof item.required === 'number' ? (
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-gray-400 mb-1">
                                        <span>PROGRESSO DE MISSÕES</span>
                                        <span style={{ color: item.color }}>{percent.toFixed(0)}%</span>
                                    </div>
                                    <div className="h-4 bg-gray-800 border border-gray-700 relative overflow-hidden">
                                        {/* Scanline pattern on bar */}
                                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_2px,rgba(0,0,0,0.8)_2px)] bg-[size:4px_100%] z-20 pointer-events-none opacity-50"></div>
                                        <div 
                                            className="h-full transition-all duration-700 relative z-10"
                                            style={{ 
                                                width: `${percent}%`, 
                                                backgroundColor: item.color,
                                                boxShadow: `0 0 10px ${item.color}`
                                            }} 
                                        />
                                    </div>
                                    <p className="font-mono text-[9px] text-gray-500 mt-1 text-center">
                                        {item.completed} de {item.required} missões concluídas
                                    </p>
                                </div>
                            ) : (
                                <div className="text-center py-2 border border-dashed border-gray-700">
                                    <span className="font-mono text-[10px] text-gray-400">
                                        REQUISITO ESPECIAL: {item.required}
                                    </span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Rules Section */}
        <div className="mt-8 mb-4 border-t border-neon-red/30 pt-4">
            <h3 className="font-retro text-xs text-neon-red mb-4 flex items-center gap-2">
                <Skull size={14} /> REGRAS DE PROGRESSÃO
            </h3>
            <ul className="space-y-2">
                {PROGRESSION_RULES.map((rule, i) => (
                    <li key={i} className="flex gap-2 items-start font-mono text-[10px] text-gray-400">
                        <span className="text-neon-red shrink-0">{'>'}</span>
                        <span>{rule}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionLog;
