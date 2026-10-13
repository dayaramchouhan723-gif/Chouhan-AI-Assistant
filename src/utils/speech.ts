// Speech and Sound Engine for MYRA Voice Assistant

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private audioCtx: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  private initAudio() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
  }

  playImperialChime() {
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      
      const now = this.audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Imperial Victory Chord)
      
      notes.forEach((freq, idx) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.001, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.5);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.55);
      });
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  speak(text: string, onEnd?: () => void, isHindi: boolean = false): boolean {
    if (!this.synth) return false;

    try {
      this.synth.cancel(); // Stop any active speech

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;

      const voices = this.synth.getVoices();
      if (isHindi) {
        const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('HI'));
        if (hindiVoice) utterance.voice = hindiVoice;
      } else {
        const inVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('hi-IN')) 
                     || voices.find(v => v.lang.includes('en-US')) 
                     || voices[0];
        if (inVoice) utterance.voice = inVoice;
      }

      if (onEnd) {
        utterance.onend = onEnd;
        utterance.onerror = () => onEnd();
      }

      this.synth.speak(utterance);
      return true;
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      if (onEnd) onEnd();
      return false;
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const speechService = new SpeechService();
