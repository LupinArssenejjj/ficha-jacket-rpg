import React, { useState, useRef, useEffect } from 'react';
import { Send, Cpu, Loader, Terminal } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendChatMessage } from '../services/geminiService';

const GeminiTerminal: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'RECORDER SYSTEM ONLINE.\nWAITING FOR INPUT...', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Context for the AI to behave like the internal recorder/system
    const history = messages.map(m => `${m.role.toUpperCase()}: ${m.text}`).join('\n');
    const response = await sendChatMessage(history, userMsg.text);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col bg-black border border-neon-cyan/30 rounded overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] relative">
       {/* Scanline overlay for terminal specifically */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] z-10 opacity-20"></div>

      {/* Terminal Header */}
      <div className="bg-neon-cyan/10 p-2 border-b border-neon-cyan/30 flex items-center justify-between z-20">
        <span className="font-retro text-[10px] text-neon-cyan flex items-center gap-2">
            <Terminal size={14} /> SYS.LOGS // RECORDER
        </span>
        <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      {/* Output Area */}
      <div 
        ref={scrollRef}
        className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-4 bg-black/80 z-20"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
             <div className={`inline-block p-2 rounded max-w-[90%] break-words ${
               msg.role === 'user' 
                 ? 'bg-neon-purple/10 text-neon-magenta border-r-2 border-neon-magenta/50' 
                 : 'bg-transparent text-neon-cyan border-l-2 border-neon-cyan/50 pl-3'
             }`}>
                <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                {/* Timestamp removed for cleaner look or kept very subtle */}
             </div>
          </div>
        ))}
        {loading && (
            <div className="text-neon-cyan font-mono text-xs pl-3 flex items-center gap-2">
                 <Loader className="animate-spin h-3 w-3" /> DECRYPTING...
            </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-2 bg-black border-t border-neon-cyan/30 flex gap-2 z-20">
        <span className="text-neon-cyan py-2 pl-2 font-mono">{'>'}</span>
        <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ACCESS DATABASE..."
            className="flex-1 bg-transparent text-neon-cyan font-mono px-2 text-sm focus:outline-none placeholder-neon-cyan/30"
            disabled={loading}
        />
        <button 
            onClick={handleSend}
            disabled={loading}
            className="p-2 text-neon-cyan hover:bg-neon-cyan/10 rounded transition-colors disabled:opacity-50"
        >
            <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default GeminiTerminal;