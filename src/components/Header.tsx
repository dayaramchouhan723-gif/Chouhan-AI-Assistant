import React from 'react';
import { ShieldCheck, Cloud, Download, Github, Volume2, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenDownload: () => void;
  onPlayGreeting: () => void;
  isSpeaking: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDownload,
  onPlayGreeting,
  isSpeaking
}) => {
  return (
    <header className="border-b border-slate-800 bg-[#0B0F19]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-[#0E1322] rounded-[10px] flex items-center justify-center text-xl">
              👑
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                Chouhan AI Assistant
              </h1>
              <span className="px-2 py-0.5 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                Empire v2.2.18
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span>MYRA Voice Core</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                11 Agents Online
              </span>
            </p>
          </div>
        </div>

        {/* Center / Cloud Telemetry */}
        <div className="hidden lg:flex items-center gap-3 text-xs bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
          <div className="flex items-center gap-1.5 text-cyan-400 font-mono">
            <Cloud className="w-3.5 h-3.5" />
            <span>polynomial-park-511512-h0</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">asia-southeast1</span>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Encrypted & Verified</span>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={onPlayGreeting}
            className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
              isSpeaking
                ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/30 animate-pulse'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
            title="Hear Voice Greeting: Jai Mata Di Boss"
          >
            <Volume2 className="w-4 h-4" />
            <span className="hidden sm:inline">"Jai Mata Di Boss"</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </button>

          <button
            onClick={onOpenDownload}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download APK (Direct)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
