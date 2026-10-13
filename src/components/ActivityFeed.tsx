import React from 'react';
import { ActivityLog } from '../types';
import { Terminal, Shield, Mic, Cloud, CheckCircle, Zap } from 'lucide-react';

interface ActivityFeedProps {
  logs: ActivityLog[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ logs }) => {
  const getIcon = (type: ActivityLog['type']) => {
    switch (type) {
      case 'voice':
        return <Mic className="w-3.5 h-3.5 text-amber-400" />;
      case 'security':
        return <Shield className="w-3.5 h-3.5 text-rose-400" />;
      case 'firebase':
        return <Cloud className="w-3.5 h-3.5 text-cyan-400" />;
      default:
        return <Zap className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl p-4 shadow-xl">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            Empire Autonomous Activity Stream
          </h3>
        </div>
        <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          LIVE 60fps
        </span>
      </div>

      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
        {logs.map(log => (
          <div
            key={log.id}
            className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5 text-xs font-mono"
          >
            <div className="mt-0.5 shrink-0">{getIcon(log.type)}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-amber-400 font-semibold text-[11px] truncate">
                  [{log.agentName}]
                </span>
                <span className="text-[10px] text-slate-500 shrink-0">{log.timestamp}</span>
              </div>
              <p className="text-slate-300 text-[11px] mt-0.5 break-words">
                {log.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
