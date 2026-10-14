import React, { useState } from 'react';
import { EMPIRE_AGENTS } from './data/agents';
import { Agent, ActivityLog } from './types';
import { Header } from './components/Header';
import { VoiceCore } from './components/VoiceCore';
import { AgentCard } from './components/AgentCard';
import { AgentModal } from './components/AgentModal';
import { DownloadModal } from './components/DownloadModal';
import { ActivityFeed } from './components/ActivityFeed';
import { ATSScore } from './components/ATSScore';
import { TelemetryCard } from './components/TelemetryCard';
import { speechService } from './utils/speech';
import { Crown, Sparkles, Search, Music, FileText } from 'lucide-react';

export const App: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>(EMPIRE_AGENTS);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [showDirectAts, setShowDirectAts] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [lastResponse, setLastResponse] = useState<{ text: string; agent: string } | null>({
    agent: 'MYRA Voice Core',
    text: 'जय माता दी बॉस! मायरा 148 भाषाओं और 11 साम्राज्य एजेंट्स के साथ ऑनलाइन है। स्टोनिक और रेज़्यूमैक्स तैयार हैं!'
  });

  const [logs, setLogs] = useState<ActivityLog[]>([
    {
      id: '1',
      timestamp: '11:24:27',
      agentId: 'myra',
      agentName: 'MYRA',
      type: 'voice',
      message: 'MYRA Voice-first core armed. 148 languages (hi-IN, en-IN, sd-IN) & OCR online.'
    },
    {
      id: '2',
      timestamp: '11:24:28',
      agentId: 'stonic',
      agentName: 'STONIC',
      type: 'system',
      message: 'STONIC Spotify Media Commander active. Mata Rani Bhajans playlist loaded (#96CEB4).'
    },
    {
      id: '3',
      timestamp: '11:24:29',
      agentId: 'resumax',
      agentName: 'RESUMAX',
      type: 'system',
      message: 'RESUMAX ATS Scanner calibrated. Target 85/100 score Dubai UAE keywords ready.'
    },
    {
      id: '4',
      timestamp: '11:24:30',
      agentId: 'jarvis',
      agentName: 'JARVIS',
      type: 'system',
      message: 'JARVIS Windows System Control active. CPU 3.2% nominal.'
    }
  ]);

  const handlePlayGreeting = () => {
    setIsSpeaking(true);
    speechService.playImperialChime();
    const greeting = 'जय माता दी बॉस! मैं हूँ मायरा। स्टोनिक और सभी 11 साम्राज्य एजेंट्स तैयार हैं।';
    setLastResponse({ text: greeting, agent: 'MYRA' });
    speechService.speak(greeting, () => {
      setIsSpeaking(false);
    }, true);

    addLog('MYRA', 'voice', 'Voice trigger: "Jai Mata Di Boss" synthesized successfully.');
  };

  const addLog = (agentName: string, type: ActivityLog['type'], message: string) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    const newLog: ActivityLog = {
      id: Date.now().toString(),
      timestamp: timeStr,
      agentId: agentName.toLowerCase(),
      agentName,
      type,
      message
    };
    setLogs(prev => [newLog, ...prev.slice(0, 19)]);
  };

  const handleCommandRun = (command: string, response: string, agentName: string) => {
    setLastResponse({ text: response, agent: agentName });
    addLog(agentName, 'command', `Executed: "${command}" -> ${response.slice(0, 60)}...`);
  };

  const handleMasterBroadcast = () => {
    setIsSpeaking(true);
    speechService.playImperialChime();
    const broadcastMsg = 'मायरा मास्टर ब्रॉडकास्ट: साम्राज्य के सभी 11 एजेंट्स (मायरा, स्टोनिक, रेज़्यूमैक्स, जार्विस, कायरा...) ऑनलाइन हैं बॉस!';
    setLastResponse({ text: broadcastMsg, agent: 'MYRA (Sovereign)' });
    speechService.speak(broadcastMsg, () => setIsSpeaking(false), true);
    addLog('MYRA', 'system', 'Master Broadcast dispatched to all 11 Chouhan Empire agents simultaneously.');
  };

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.domain.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === 'all' || agent.domain.toLowerCase().includes(selectedDomain.toLowerCase());
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col selection:bg-rose-500 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenDownload={() => setIsDownloadOpen(true)}
        onPlayGreeting={handlePlayGreeting}
        isSpeaking={isSpeaking}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:px-6 space-y-6">
        {/* Banner with Empire Status */}
        <div className="bg-gradient-to-r from-rose-950/40 via-slate-900 to-[#0F1424] border border-rose-500/30 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-2xl shadow-lg shrink-0">
              👑
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-bold text-slate-100">
                  Chouhan Empire Autonomous Network
                </h2>
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  11/11 Online
                </span>
                <span className="px-2 py-0.5 text-xs font-mono bg-rose-950 text-rose-300 border border-rose-800 rounded">
                  v2.2.18
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Say <strong className="text-rose-300">"Hey MYRA"</strong> or <strong className="text-amber-300">"Jai Mata Di"</strong> to wake up all 11 autonomous agents.
              </p>
            </div>
          </div>

          {/* Quick Hub Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto flex-wrap sm:flex-nowrap">
            <button
              onClick={() => {
                const stonicAgent = agents.find(a => a.id === 'stonic') || null;
                setSelectedAgent(stonicAgent);
              }}
              className="px-3.5 py-2 rounded-xl bg-[#12231E] hover:bg-[#18312a] text-[#96CEB4] border border-[#96CEB4]/40 font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <Music className="w-4 h-4 text-[#96CEB4]" />
              <span>STONIC Media</span>
            </button>

            <button
              onClick={() => setShowDirectAts(!showDirectAts)}
              className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>{showDirectAts ? 'Hide ATS' : 'ATS 85/100'}</span>
            </button>

            <button
              onClick={handleMasterBroadcast}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-bold text-xs shadow-lg shadow-rose-500/20 transition-all flex items-center gap-2"
            >
              <Crown className="w-4 h-4" />
              <span>Broadcast 11 Agents</span>
            </button>
          </div>
        </div>

        {/* ATS Resume Scanner Section (if toggled) */}
        {showDirectAts && (
          <div className="animate-fadeIn">
            <ATSScore />
          </div>
        )}

        {/* MYRA Voice Core Console */}
        <VoiceCore
          onCommandRun={handleCommandRun}
          isSpeaking={isSpeaking}
          setIsSpeaking={setIsSpeaking}
          lastResponse={lastResponse}
        />

        {/* Real Firebase Agent Status Telemetry Card (11 Agents Green/Red Matrix) */}
        <TelemetryCard agents={agents} />

        {/* Agents Section */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <h2 className="text-lg font-bold text-slate-100">
                  The 11 Sovereign Chouhan Empire Agents
                </h2>
              </div>
              <p className="text-xs text-slate-400">
                MYRA • KAYRA • MAYA • JARVIS • ZOYA • VYRON • ARCHER • NOVA • STONIC • LUNA • RESUMAX
              </p>
            </div>

            {/* Filter and Search controls */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search agents..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
          </div>

          {/* 11 Agents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAgents.map(agent => (
              <AgentCard
                key={agent.id}
                agent={agent}
                onSelect={setSelectedAgent}
                onVoiceSpeak={agent => {
                  setIsSpeaking(true);
                  speechService.playImperialChime();
                  speechService.speak(agent.hindiVoiceGreeting, () => setIsSpeaking(false), true);
                  addLog(agent.name, 'voice', `Greeting spoken: "${agent.hindiVoiceGreeting}"`);
                }}
              />
            ))}
          </div>
        </section>

        {/* Real-time Activity Stream & Telemetry */}
        <ActivityFeed logs={logs} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#060810] py-5 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span>👑 Chouhan AI Assistant v2.2.18</span>
            <span>•</span>
            <span className="text-amber-400 font-mono">com.chouhan.aiassistant</span>
          </div>
          <div className="text-slate-400">
            Developer: <span className="text-white font-semibold">dayaramchouhan723-gif</span> | Firebase: <span className="text-cyan-400 font-mono">polynomial-park-511512-h0</span> (asia-southeast1)
          </div>
        </div>
      </footer>

      {/* Agent Deep Command Modal */}
      <AgentModal
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
        onRunAction={handleCommandRun}
      />

      {/* Direct Download & Install Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </div>
  );
};

export default App;
