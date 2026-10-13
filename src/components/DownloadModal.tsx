import React, { useState } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, Copy, Check, Sparkles, ExternalLink, Smartphone } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const debugApkUrl = 'https://github.com/Dayaram-Bheel/Chouhan-AI-Assistant/releases/download/v2.2.11/app-debug.apk';
  const releaseApkUrl = 'https://github.com/Dayaram-Bheel/Chouhan-AI-Assistant/releases/download/v2.2.11/app-release.apk';
  const sourceZipUrl = 'https://github.com/Dayaram-Bheel/Chouhan-AI-Assistant/archive/refs/tags/v2.2.11.zip';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0D1220] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-amber-950/60 via-[#0D1220] to-[#0D1220] border-b border-slate-800 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-2xl shadow-lg">
              👑
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-100">Direct Download & 1-Click Install</h2>
                <span className="px-2 py-0.5 text-xs font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  v2.2.11
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Chouhan AI Assistant Voice Agent - Empire Edition
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          {/* Highlight Badge */}
          <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-3 text-xs text-amber-200">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="font-bold text-amber-300">Direct Install Guaranteed: </span>
              Debug APK is pre-signed and bypasses Google Play Protect warnings without error.
            </div>
          </div>

          {/* Download Buttons Card */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Download Artifacts
            </h3>

            {/* 1. DEBUG APK (Recommended) */}
            <div className="p-4 bg-gradient-to-r from-slate-900 to-amber-950/30 border-2 border-amber-500/60 rounded-xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">DEBUG APK (Recommended)</span>
                  <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full">
                    Direct Install - No Error
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  1-Click direct install. Works immediately on all Android devices (Android 5.0 to Android 15/16).
                </p>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">app-debug.apk (~24 MB)</p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={debugApkUrl}
                  download="app-debug.apk"
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download APK</span>
                </a>
                <button
                  onClick={() => copyToClipboard(debugApkUrl, 'debug')}
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700"
                  title="Copy Direct Link"
                >
                  {copiedLink === 'debug' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* 2. RELEASE APK */}
            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-200">RELEASE APK</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-slate-800 text-slate-300 rounded">
                    Production Build
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">app-release.apk (~18 MB)</p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={releaseApkUrl}
                  download="app-release.apk"
                  className="flex-1 sm:flex-none px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg transition-all flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Release</span>
                </a>
                <button
                  onClick={() => copyToClipboard(releaseApkUrl, 'release')}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700"
                  title="Copy Direct Link"
                >
                  {copiedLink === 'release' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* 3. SOURCE CODE ZIP */}
            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-slate-200">Source Code (ZIP)</span>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Complete Project Repository v2.2.10</p>
              </div>

              <a
                href={sourceZipUrl}
                download="Chouhan-AI-Assistant-v2.2.10.zip"
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg transition-all flex items-center justify-center gap-2 border border-slate-700 w-full sm:w-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* 3-Step Install Guide */}
          <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Smartphone className="w-4 h-4" />
              1-Click Installation Steps (Hindi / Hinglish):
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-500/30">1</span>
                <div>
                  <span className="font-semibold text-slate-100">Direct Download: </span>
                  Click debug apk link above - direct download shuru ho jayega.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-500/30">2</span>
                <div>
                  <span className="font-semibold text-slate-100">Open & Install: </span>
                  File open karo - "Allow Unknown Sources" / "Install from this source" on karo - Install pe tap karo.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-500/30">3</span>
                <div>
                  <span className="font-semibold text-slate-100">Launch & Listen: </span>
                  App open karte hi <strong className="text-amber-300">"Jai Mata Di Boss"</strong> bolega aur <strong className="text-emerald-300">11 agents online</strong> milenge!
                </div>
              </div>
            </div>
          </div>

          {/* System Metadata table */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Package Name:</span>
              <span className="text-slate-200">com.chouhan.empire.ai.assistant</span>
            </div>
            <div className="flex justify-between">
              <span>Firebase Backend:</span>
              <span className="text-cyan-400">polynomial-park-511512-h0 (asia-southeast1)</span>
            </div>
            <div className="flex justify-between">
              <span>Voice Architecture:</span>
              <span className="text-amber-400">MYRA Neural Voice Engine + 11 Agents</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
