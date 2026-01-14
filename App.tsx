import React, { useState } from 'react';
import Header from './components/Header';
import Scanlines from './components/Scanlines';
import MaskCarousel from './components/MaskCarousel';
import MissionLog from './components/MissionLog';
import { Tab } from './types';
import { CHARACTER_INFO } from './constants';
import { Sword, User, List, FileText, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.PROFILE);

  return (
    <main className="min-h-screen relative pb-10 font-sans selection:bg-neon-magenta selection:text-white">
      <Scanlines />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-lg mx-auto bg-black/80 min-h-screen flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <Header />
        
        {/* Main interactive area */}
        <MaskCarousel />

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 mt-2 mx-0 bg-black/50 sticky top-[90px] z-20 backdrop-blur-sm">
            <button 
                onClick={() => setActiveTab(Tab.PROFILE)}
                className={`flex-1 py-4 text-[10px] sm:text-xs font-retro flex items-center justify-center gap-2 transition-all ${
                    activeTab === Tab.PROFILE 
                    ? 'text-neon-cyan border-b-2 border-neon-cyan bg-neon-cyan/5' 
                    : 'text-gray-600 hover:text-gray-400'
                }`}
            >
                <User size={12} /> DADOS
            </button>
            <button 
                onClick={() => setActiveTab(Tab.GEAR)}
                className={`flex-1 py-4 text-[10px] sm:text-xs font-retro flex items-center justify-center gap-2 transition-all ${
                    activeTab === Tab.GEAR 
                    ? 'text-neon-magenta border-b-2 border-neon-magenta bg-neon-magenta/5' 
                    : 'text-gray-600 hover:text-gray-400'
                }`}
            >
                <Sword size={12} /> ARSENAL
            </button>
            <button 
                onClick={() => setActiveTab(Tab.MISSIONS)}
                className={`flex-1 py-4 text-[10px] sm:text-xs font-retro flex items-center justify-center gap-2 transition-all ${
                    activeTab === Tab.MISSIONS 
                    ? 'text-neon-yellow border-b-2 border-neon-yellow bg-neon-yellow/5' 
                    : 'text-gray-600 hover:text-gray-400'
                }`}
            >
                <List size={12} /> MISSÕES
            </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 p-5">
            {activeTab === Tab.PROFILE && (
                <div className="space-y-6 animate-fadeIn pb-10">
                    {/* Basic Data Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                        <div className="bg-gray-900/50 p-2 border border-white/5">
                            <span className="text-[9px] text-gray-500 font-retro block mb-1">IDADE</span>
                            <span className="text-xs text-neon-cyan font-mono">{CHARACTER_INFO.age}</span>
                        </div>
                        <div className="bg-gray-900/50 p-2 border border-white/5">
                             <span className="text-[9px] text-gray-500 font-retro block mb-1">AFILIAÇÃO</span>
                             <span className="text-xs text-neon-cyan font-mono truncate">{CHARACTER_INFO.affiliation}</span>
                        </div>
                    </div>

                    <div className="bg-transparent border-l-2 border-neon-cyan pl-4">
                        <h3 className="text-neon-cyan font-retro text-[10px] mb-2 tracking-widest">PERSONALIDADE</h3>
                        <p className="font-mono text-gray-300 text-sm leading-relaxed text-justify">
                            {CHARACTER_INFO.personality}
                        </p>
                    </div>

                     <div className="bg-transparent border-l-2 border-white/20 pl-4">
                        <h3 className="text-white/60 font-retro text-[10px] mb-2 tracking-widest">APARÊNCIA</h3>
                        <p className="font-mono text-gray-400 text-sm leading-relaxed text-justify">
                            {CHARACTER_INFO.appearance}
                        </p>
                    </div>

                    <div className="bg-gray-900/30 p-4 border border-neon-cyan/20 rounded-sm relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-1">
                             <FileText size={40} className="text-neon-cyan/5" />
                         </div>
                        <h3 className="text-neon-cyan font-retro text-[10px] mb-3 tracking-widest">HISTÓRICO [CONFIDENCIAL]</h3>
                        <p className="font-mono text-gray-300 text-sm leading-relaxed whitespace-pre-wrap text-justify">
                            {CHARACTER_INFO.history}
                        </p>
                    </div>
                </div>
            )}

            {activeTab === Tab.GEAR && (
                <div className="space-y-8 animate-fadeIn pb-10">
                     {/* System Persona Description */}
                     <div className="bg-black border border-neon-magenta/40 p-4 shadow-[0_0_15px_rgba(255,0,255,0.1)]">
                         <div className="flex items-center gap-2 mb-3 border-b border-neon-magenta/20 pb-2">
                            <Zap size={14} className="text-neon-magenta" />
                            <h3 className="font-retro text-neon-magenta text-xs tracking-widest">PODERES: O SISTEMA PERSONA</h3>
                         </div>
                         <h4 className="font-mono text-white text-xs mb-2 font-bold uppercase">Dispositivo de Modulação Psíquica</h4>
                         <p className="font-mono text-purple-100 text-xs leading-relaxed text-justify">
                             {CHARACTER_INFO.personaSystem}
                         </p>
                     </div>

                     {/* Abilities Section */}
                    <div>
                        <h3 className="text-center font-retro text-neon-purple text-xs mb-4 border-b border-neon-purple/30 pb-2">HABILIDADES BIÔNICAS</h3>
                        <div className="grid gap-4">
                            {CHARACTER_INFO.abilities.map((ability, idx) => (
                                <div key={idx} className="bg-gray-900/50 p-4 border border-neon-purple/30 relative">
                                    <h4 className="font-retro text-neon-purple text-[10px] mb-2">{ability.title}</h4>
                                    {/* Updated text color to be lighter/clearer */}
                                    <p className="font-mono text-purple-200 text-sm leading-relaxed">{ability.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Weapons Section */}
                    <div>
                        <h3 className="text-center font-retro text-neon-magenta text-xs mb-4 border-b border-neon-magenta/30 pb-2">EQUIPAMENTO TÁTICO</h3>
                        <div className="grid gap-4">
                            {CHARACTER_INFO.weapons.map((w, i) => (
                                <div key={i} className="flex flex-col bg-gray-900/50 p-4 border-l-4 border-neon-magenta hover:bg-neon-magenta/5 transition-colors">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-retro text-neon-magenta text-[10px]">{w.name}</h4>
                                    </div>
                                    <p className="font-mono text-gray-400 text-xs leading-relaxed">
                                        {w.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === Tab.MISSIONS && (
                <div className="h-[600px] animate-fadeIn pb-4">
                    <MissionLog />
                </div>
            )}
        </div>
      </div>
    </main>
  );
};

export default App;