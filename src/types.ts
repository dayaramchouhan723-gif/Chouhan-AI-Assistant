export interface Agent {
  id: string;
  name: string;
  title: string;
  role?: string;
  emoji: string;
  icon?: string;
  domain: string;
  color: string;
  bgGlow: string;
  borderColor: string;
  status: 'ONLINE' | 'ACTIVE' | 'STANDBY';
  efficiency: number;
  description: string;
  systemPrompt?: string;
  tools?: string[];
  wakeWord?: string;
  voiceId?: string;
  hindiVoiceGreeting: string;
  englishVoiceGreeting: string;
  capabilities: string[];
  quickActions: {
    id: string;
    label: string;
    command: string;
    response: string;
  }[];
  telemetry: {
    label: string;
    value: string;
  }[];
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  agentId: string;
  agentName: string;
  type: 'voice' | 'system' | 'command' | 'security' | 'firebase';
  message: string;
}
