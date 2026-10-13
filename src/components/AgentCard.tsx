import React from 'react';
import { Agent } from '../types';
import { Activity, Volume2, ArrowRight } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  onSelect: (agent: Agent) => void;
  onVoiceSpeak: (agent: Agent) => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  onSelect,
  onVoiceSpeak
}) => {
  return (
    <div
      onClick={() => onSelect(agent)}
      className="group relative bg-[#0F1424] hover:bg-[#141B30] border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
      style={{
        boxShadow: `0 4px 20px -5px ${agent.bgGlow}`
      }}
    >
      {/* Top Banner */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shadow-md border"
              style={{
                backgroundColor: `${agent.color}15`,
                borderColor: `${agent.color}40`
              }}
            >
              {agent.emoji}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors">
                  {agent.name}
                </h3>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">{agent.title}</p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onVoiceSpeak(agent);
            }}
            className="w-7 h-7 rounded-lg bg-slate-800/80 hover:bg-amber-500/20 text-slate-400 hover:text-amber-400 border border-slate-700/60 flex items-center justify-center transition-colors"
            title={`Listen to ${agent.name}'s voice greeting`}
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Domain and description */}
        <div className="mb-3">
          <span
            className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-md uppercase tracking-wider mb-2"
            style={{
              backgroundColor: `${agent.color}20`,
              color: agent.color,
              border: `1px solid ${agent.color}35`
            }}
          >
            {agent.domain}
          </span>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {agent.description}
          </p>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 text-slate-300 font-mono">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span>Eff: {agent.efficiency}%</span>
        </div>

        <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium text-[11px]">
          Command <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
