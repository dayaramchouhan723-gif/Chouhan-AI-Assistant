import React, { useState, useEffect } from 'react';
import { Agent } from '../types';
import { X, Volume2, Sparkles, CheckCircle, Zap, Shield, Activity, Terminal, Play, Pause, SkipForward, SkipBack, Music, Key, Radio, Sliders } from 'lucide-react';
import { speechService } from '../utils/speech';
import { ATSScore } from './ATSScore';

interface AgentModalProps {
  agent: Agent | null;
  onClose: () => void;
  onRunAction: (command: string, response: string, agentName: string) => void;
}

export const AgentModal: React.FC<AgentModalProps> = ({
  agent,
  onClose,
  onRunAction
}) => {
  const [activeTab, setActiveTab] = useState<'actions' | 'telemetry' | 'capabilities' | 'workspace'>('actions');
  const [actionOutput, setActionOutput] = useState<string | null>(null);

  // Stonic Spotify states
  const [spotifyApiKey, setSpotifyApiKey] = useState('sp_live_chouhan_empire_token_96ceb4');
  const [isConnectedSpotify, setIsConnectedSpotify] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(85);
  const [currentTrack, setCurrentTrack] = useState('Jai Mata Di - Sherawali Mata Bhajan');
  const [currentPlaylist, setCurrentPlaylist] = useState<'mata_rani' | 'empire_mix'>('mata_rani');
  const [stonicWaveform, setStonicWaveform] = useState<number[]>([30, 50, 80, 60, 95, 45, 70, 85, 40, 90, 65, 50]);

  useEffect(() => {
    if (agent?.id === 'stonic') {
      setActiveTab('workspace');
    } else if (agent?.id === 'resumax') {
      setActiveTab('workspace');
    } else {
      setActiveTab('actions');
    }
  }, [agent?.id]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && agent?.id === 'stonic') {
      interval = setInterval(() => {
        setStonicWaveform(prev => prev.map(() => Math.floor(Math.random() * 75) + 25));
      }, 120);
    }
    return () => clearInterval(interval);
  }, [isPlaying, agent?.id]);

  if (!agent) return null;

  const handlePlayVoice = (isHindi: boolean) => {
    const text = isHindi ? agent.hindiVoiceGreeting : agent.englishVoiceGreeting;
    speechService.playImperialChime();
    speechService.speak(text, undefined, isHindi);
  };

  const handleExecuteQuick = (action: { label: string; command: string; response: string }) => {
    setActionOutput(action.response);
    onRunAction(action.command, action.response, agent.name);
    speechService.playImperialChime();
    speechService.speak(action.response, undefined, true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-3xl bg-[#0D1220] border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        style={{ borderColor: `${agent.color}50` }}
      >
        {/* Header */}
        <div
          className="p-5 border-b border-slate-800 flex items-start justify-between relative"
          style={{
            background: `linear-gradient(135deg, ${agent.color}20, #0D1220)`
          }}
        >
          <div className="flex items-center gap-3.5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg border"
              style={{
                backgroundColor: `${agent.color}25`,
                borderColor: `${agent.color}60`
              }}
            >
              {agent.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-100">{agent.name} Agent</h2>
                <span className="px-2 py-0.5 text-xs font-bold rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  {agent.status}
                </span>
                {agent.wakeWord && (
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-amber-300 border border-slate-700">
                    Wake: "{agent.wakeWord}"
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 font-medium">{agent.title}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{agent.domain}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Voice Greeting Action Bar */}
        <div className="px-5 py-3 bg-[#090D18] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-slate-400 font-medium flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
            Voice Synthesis:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePlayVoice(true)}
              className="px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-semibold transition-all flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Hindi Voice Greeting</span>
            </button>
            <button
              onClick={() => handlePlayVoice(false)}
              className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-semibold transition-all flex items-center gap-1"
            >
              <span>English Voice</span>
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 text-xs font-medium bg-slate-900/50">
          {(agent.id === 'stonic' || agent.id === 'resumax') && (
            <button
              onClick={() => setActiveTab('workspace')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                activeTab === 'workspace'
                  ? 'border-emerald-400 text-emerald-300 bg-slate-800/50 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {agent.id === 'stonic' ? <Music className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
              <span>{agent.id === 'stonic' ? 'STONIC Spotify Workspace' : 'RESUMAX ATS Scanner'}</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('actions')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'actions'
                ? 'border-amber-400 text-amber-300 bg-slate-800/50 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Autonomous Actions</span>
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'telemetry'
                ? 'border-cyan-400 text-cyan-300 bg-slate-800/50 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Live Telemetry</span>
          </button>
          <button
            onClick={() => setActiveTab('capabilities')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'capabilities'
                ? 'border-emerald-400 text-emerald-300 bg-slate-800/50 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Specialty Specs</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {/* STONIC Dedicated Workspace */}
          {activeTab === 'workspace' && agent.id === 'stonic' && (
            <div className="space-y-4 animate-fadeIn">
              {/* SpotifyConnect Card */}
              <div className="p-4 bg-gradient-to-r from-slate-900 to-[#12231E] border border-[#96CEB4]/40 rounded-xl shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#96CEB4]/20 border border-[#96CEB4]/50 flex items-center justify-center text-[#96CEB4]">
                      <Radio className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        SpotifyConnect Live Bridge
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-400">
                          {isConnectedSpotify ? 'CONNECTED' : 'DISCONNECTED'}
                        </span>
                      </h4>
                      <p className="text-[11px] text-slate-400">Media API & Web Playback SDK</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsConnectedSpotify(!isConnectedSpotify)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-[#96CEB4] border border-[#96CEB4]/30"
                  >
                    {isConnectedSpotify ? 'Reconnect Token' : 'Connect'}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#96CEB4] shrink-0" />
                  <input
                    type="password"
                    value={spotifyApiKey}
                    onChange={e => setSpotifyApiKey(e.target.value)}
                    placeholder="Enter Spotify Client ID / API Key"
                    className="flex-1 px-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 font-mono focus:outline-none focus:border-[#96CEB4]"
                  />
                  <span className="text-[10px] text-slate-400">Auth Token</span>
                </div>
              </div>

              {/* Now Playing Orb & #96CEB4 Waveform */}
              <div className="p-5 bg-slate-950/90 border border-[#96CEB4]/30 rounded-xl flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  {/* Now Playing Orb Animation */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    {isPlaying && (
                      <div className="absolute inset-0 rounded-full bg-[#96CEB4]/20 animate-ping"></div>
                    )}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#12231E] to-[#96CEB4]/30 border-2 border-[#96CEB4] flex items-center justify-center text-xl shadow-lg shadow-[#96CEB4]/20">
                      🎵
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#96CEB4]">
                      {isPlaying ? '● NOW STREAMING' : '❚❚ PAUSED'}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{currentTrack}</h4>
                    <p className="text-xs text-slate-400">STONIC Sovereign Media Core • High Fidelity</p>
                  </div>
                </div>

                {/* #96CEB4 Waveform Spectrum */}
                <div className="flex items-end gap-1 h-10 px-3 py-1.5 bg-[#0A1110] rounded-lg border border-[#96CEB4]/30">
                  {stonicWaveform.map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`w-1.5 rounded-full transition-all duration-100 ${
                        isPlaying ? 'bg-[#96CEB4]' : 'bg-[#96CEB4]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Media Controls Bar & Volume Slider */}
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setCurrentTrack('Jai Mata Di - Bhor Bhai Din Chadh Gaya');
                      setIsPlaying(true);
                    }}
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center"
                    title="Previous Track"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-11 h-11 rounded-full bg-[#96CEB4] hover:bg-[#85bca3] text-black flex items-center justify-center shadow-lg shadow-[#96CEB4]/30 transition-transform active:scale-95"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 text-black" /> : <Play className="w-5 h-5 text-black ml-0.5" />}
                  </button>

                  <button
                    onClick={() => {
                      setCurrentTrack('Chouhan Empire Mix - Bass Anthem v2.2.11');
                      setIsPlaying(true);
                    }}
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center"
                    title="Next Track"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>

                {/* Volume Slider */}
                <div className="flex items-center gap-2.5 w-full sm:w-56 text-xs text-slate-300">
                  <Sliders className="w-4 h-4 text-[#96CEB4]" />
                  <span className="text-[11px] font-mono">Vol: {volume}%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={e => setVolume(Number(e.target.value))}
                    className="flex-1 accent-[#96CEB4] cursor-pointer"
                  />
                </div>
              </div>

              {/* Playlists: Mata Rani Bhajans & Chouhan Empire Mix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Playlist 1: Mata Rani Bhajans */}
                <div
                  onClick={() => {
                    setCurrentPlaylist('mata_rani');
                    setCurrentTrack('Jai Mata Di - Sherawali Mata Bhajan');
                    setIsPlaying(true);
                    speechService.speak('जय माता दी! माता रानी का पावन भजन शुरू हो गया है।', undefined, true);
                  }}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    currentPlaylist === 'mata_rani'
                      ? 'bg-[#12231E] border-[#96CEB4] shadow-lg shadow-[#96CEB4]/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      🌸 Mata Rani Bhajans
                    </span>
                    <span className="text-[10px] font-bold text-[#96CEB4]">4 Tracks</span>
                  </div>
                  <ul className="text-[11px] text-slate-300 space-y-1">
                    <li className="flex items-center gap-1">▶ Jai Mata Di - Sherawali Bhajan</li>
                    <li className="flex items-center gap-1 text-slate-400">♪ Chalo Bulawa Aaya Hai</li>
                    <li className="flex items-center gap-1 text-slate-400">♪ Ambe Gauri Aarti Special</li>
                  </ul>
                </div>

                {/* Playlist 2: Chouhan Empire Mix */}
                <div
                  onClick={() => {
                    setCurrentPlaylist('empire_mix');
                    setCurrentTrack('Chouhan Empire Mix - Sovereign Audio v2.2.11');
                    setIsPlaying(true);
                    speechService.speak('Chouhan Empire Mix now streaming with STONIC audio engine.', undefined, false);
                  }}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    currentPlaylist === 'empire_mix'
                      ? 'bg-[#12231E] border-[#96CEB4] shadow-lg shadow-[#96CEB4]/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      👑 Chouhan Empire Mix
                    </span>
                    <span className="text-[10px] font-bold text-[#96CEB4]">4 Tracks</span>
                  </div>
                  <ul className="text-[11px] text-slate-300 space-y-1">
                    <li className="flex items-center gap-1">▶ Sovereign Audio Anthem v2.2.11</li>
                    <li className="flex items-center gap-1 text-slate-400">♪ Royal Bass Focus Stream</li>
                    <li className="flex items-center gap-1 text-slate-400">♪ Low-Latency Synth Wave</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* RESUMAX Dedicated Workspace */}
          {activeTab === 'workspace' && agent.id === 'resumax' && (
            <div className="space-y-4 animate-fadeIn">
              <ATSScore />
            </div>
          )}

          {/* Autonomous Actions Tab */}
          {activeTab === 'actions' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                Dedicated Agent Commands
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {agent.quickActions.map(action => (
                  <button
                    key={action.id}
                    onClick={() => handleExecuteQuick(action)}
                    className="p-3 text-left bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-xl transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-200 group-hover:text-amber-300">
                      <span>{action.label}</span>
                      <Zap className="w-3.5 h-3.5 text-amber-400 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{action.command}</p>
                  </button>
                ))}
              </div>

              {actionOutput && (
                <div className="mt-4 p-3.5 bg-slate-950 border border-amber-500/30 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-amber-400">Execution Output:</span>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Success (Spoken Audio)
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{actionOutput}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Telemetry Diagnostics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {agent.telemetry.map(item => (
                  <div key={item.label} className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <p className="text-[11px] text-slate-400">{item.label}</p>
                    <p className="text-sm font-bold text-cyan-400 mt-1 font-mono">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'capabilities' && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Autonomous Capabilities Matrix
              </h4>
              <ul className="space-y-2">
                {agent.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
