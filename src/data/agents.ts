import { Agent } from '../types';

export const EMPIRE_AGENTS: Agent[] = [
  {
    id: 'myra',
    name: 'MYRA',
    title: 'Main Voice Assistant & Sovereign Core',
    role: 'Main Voice Assistant',
    emoji: '🎙️',
    icon: '🎙️',
    domain: 'Neural Voice & Multimodal Vision',
    color: '#FF2D75',
    bgGlow: 'rgba(255, 45, 117, 0.25)',
    borderColor: '#FF2D75',
    status: 'ONLINE',
    efficiency: 100,
    systemPrompt: 'You are MYRA from codeninjavik/MYRA-AI-ASSISTANT-, voice-first, 148 languages hi-IN en-IN sd-IN, screen reader OCR google_mlkit_text_recognition, camera vision, system control, wake word Jai Mata Di Hey MYRA',
    tools: ['voice_engine', 'screen_reader', 'vision', 'system_control', 'whatsapp'],
    wakeWord: 'Hey MYRA',
    voiceId: '21m00Tcm4TlvDq8ikWAM',
    description: 'Supreme voice-first neural core of Chouhan Empire. Fluent in 148 languages including hi-IN, en-IN, sd-IN. Governs OCR text recognition, live camera vision, and system control.',
    hindiVoiceGreeting: 'जय माता दी बॉस! मैं हूँ मायरा, आपकी मुख्य वॉइस असिस्टेंट। 11 साम्राज्य एजेंट्स तैयार हैं, आज्ञा दीजिए!',
    englishVoiceGreeting: 'Jai Mata Di Boss! MYRA Voice Engine active. 148 languages online, awaiting command.',
    capabilities: [
      'Voice-First Engine (148 Languages: hi-IN, en-IN, sd-IN)',
      'Screen Reader OCR (google_mlkit_text_recognition)',
      'Camera Vision & Live Scene Interpreter',
      'System Control & WhatsApp Dispatcher'
    ],
    quickActions: [
      {
        id: 'voice_diagnostic',
        label: 'Voice Core Diagnostic',
        command: 'Check speech recognition, TTS and 148 language models',
        response: 'MYRA Voice Core 100% operational. Latency 9ms. Wake words "Jai Mata Di" and "Hey MYRA" armed.'
      },
      {
        id: 'ocr_vision_test',
        label: 'Run Screen OCR & Vision',
        command: 'Execute google_mlkit_text_recognition screen scan',
        response: 'Vision sensor active. OCR text recognition pipeline loaded and ready for live screen inference.'
      }
    ],
    telemetry: [
      { label: 'Voice ID', value: '21m00Tcm4TlvDq8ikWAM' },
      { label: 'Wake Word', value: 'Hey MYRA / Jai Mata Di' },
      { label: 'Languages', value: '148 Active' }
    ]
  },
  {
    id: 'kayra',
    name: 'KAYRA',
    title: 'Productivity & File Manager',
    role: 'Productivity & File Manager',
    emoji: '📁',
    icon: '📁',
    domain: 'File System & Workspace IO',
    color: '#00E676',
    bgGlow: 'rgba(0, 230, 118, 0.2)',
    borderColor: '#00E676',
    status: 'ONLINE',
    efficiency: 99.4,
    systemPrompt: 'You are KAYRA file manager create delete rename',
    tools: ['file_manager'],
    wakeWord: 'Hey KAYRA',
    voiceId: 'KAYRA-00E676',
    description: 'Autonomous workspace custodian. Manages system file creation, deletion, renaming, directory organization, and cloud archive backups.',
    hindiVoiceGreeting: 'कायरा फाइल मैनेजर तैयार है बॉस! आपकी सभी फाइल्स, स्टोरेज और वर्कस्पेस व्यवस्थित हैं।',
    englishVoiceGreeting: 'KAYRA File Manager online. Directories indexed, ready for IO operations.',
    capabilities: [
      'File System Create, Delete, Move & Rename',
      'Storage Optimization & Temp Purge',
      'Batch Document Categorization',
      'Workspace Sync Pipeline'
    ],
    quickActions: [
      {
        id: 'clean_storage',
        label: 'Organize Workspace',
        command: 'Audit directory tree and purge orphaned temp files',
        response: 'Workspace cleaned. Zero orphaned files. 512MB redundant cache released.'
      },
      {
        id: 'backup_files',
        label: 'Snapshot Documents',
        command: 'Create instant snapshot of critical empire project files',
        response: 'Archive created: empire_backup_v2211.zip ready in safe storage.'
      }
    ],
    telemetry: [
      { label: 'Storage IO', value: 'Instant / NVMe' },
      { label: 'Managed Files', value: '4,820 Active' },
      { label: 'Index State', value: 'Synchronized' }
    ]
  },
  {
    id: 'maya',
    name: 'MAYA',
    title: 'Website & Frontend Dev Specialist',
    role: 'Website & Frontend Dev',
    emoji: '💻',
    icon: '💻',
    domain: 'Web Architecture & Modern UI',
    color: '#FFD700',
    bgGlow: 'rgba(255, 215, 0, 0.2)',
    borderColor: '#FFD700',
    status: 'ONLINE',
    efficiency: 99.8,
    systemPrompt: 'You are MAYA website and frontend dev specialist code generation',
    tools: ['website_gen', 'code_gen'],
    wakeWord: 'Hey MAYA',
    voiceId: 'MAYA-FFD700',
    description: 'Expert frontend architect. Designs lightning-fast responsive web applications, Tailwind CSS layouts, React/Flutter UI components, and API integrations.',
    hindiVoiceGreeting: 'नमस्ते बॉस! माया वेब और फ्रंटेंड डेवलपर हाजिर है। आपका वेबसाइट कोड 100% परफेक्ट है।',
    englishVoiceGreeting: 'MAYA Frontend Architect ready. React, Tailwind, and Flutter UI pipelines online.',
    capabilities: [
      'Responsive Website Synthesis',
      'Modern Tailwind & Jetpack Compose UI',
      'State Management & Reactive Hooks',
      'Zero-Bug Production Code Generation'
    ],
    quickActions: [
      {
        id: 'audit_frontend',
        label: 'Audit Frontend Speed',
        command: 'Check Lighthouse performance, DOM complexity and responsive styles',
        response: 'Frontend audit score: 99/100. First Contentful Paint: 0.3s. 60fps smooth rendering.'
      },
      {
        id: 'generate_component',
        label: 'Generate M3 UI Widget',
        command: 'Synthesize gold theme adaptive navigation rail',
        response: 'M3 Component generated with full Material 3 elevation and accessible touch targets.'
      }
    ],
    telemetry: [
      { label: 'Lighthouse', value: '99/100' },
      { label: 'Render Mode', value: 'Vite 60fps' },
      { label: 'Framework', value: 'React / Compose' }
    ]
  },
  {
    id: 'jarvis',
    name: 'JARVIS',
    title: 'Windows System Control Commander',
    role: 'Windows System Control',
    emoji: '🤖',
    icon: '🤖',
    domain: 'OS Automation & Process Hooks',
    color: '#00E5FF',
    bgGlow: 'rgba(0, 229, 255, 0.2)',
    borderColor: '#00E5FF',
    status: 'ONLINE',
    efficiency: 99.5,
    systemPrompt: 'You are JARVIS windows system control agent execute commands monitor tasks',
    tools: ['system_control'],
    wakeWord: 'Hey JARVIS',
    voiceId: 'JARVIS-00E5FF',
    description: 'Hardware and OS level commander. Automates background process scheduling, task killing, resource throttling, volume control, and shell commands.',
    hindiVoiceGreeting: 'जार्विस ऑनलाइन है बॉस! सिस्टम के सभी प्रोसेसेस, सीपीयू और टास्क आपके नियंत्रण में हैं।',
    englishVoiceGreeting: 'JARVIS System Commander standing by. All OS hooks and sub-routines active.',
    capabilities: [
      'OS System & Shell Commands',
      'Process Monitor & Task Killer',
      'Hardware Sensors & Thermal Watcher',
      'Power States & Standby Choreography'
    ],
    quickActions: [
      {
        id: 'check_processes',
        label: 'Process Health Check',
        command: 'Inspect active background worker daemons',
        response: 'CPU load 3.2%, RAM usage optimal. No runaway threads detected.'
      },
      {
        id: 'boost_performance',
        label: 'Max Performance Mode',
        command: 'Allocate maximum priority to MYRA and Chouhan AI processes',
        response: 'Performance governor set to High Priority. Thread scheduling optimized.'
      }
    ],
    telemetry: [
      { label: 'CPU Usage', value: '3.2% Nominal' },
      { label: 'Processes', value: '44 Controlled' },
      { label: 'Kernel Link', value: 'Direct Pipe' }
    ]
  },
  {
    id: 'zoya',
    name: 'ZOYA',
    title: 'Communication & Messaging Envoy',
    role: 'Communication',
    emoji: '💬',
    icon: '💬',
    domain: 'Instant Messaging & Voice Alerts',
    color: '#FF6B6B',
    bgGlow: 'rgba(255, 107, 107, 0.2)',
    borderColor: '#FF6B6B',
    status: 'ONLINE',
    efficiency: 98.9,
    systemPrompt: 'You are ZOYA communication agent send whatsapp sms notify',
    tools: ['whatsapp', 'sms'],
    wakeWord: 'Hey ZOYA',
    voiceId: 'ZOYA-FF6B6B',
    description: 'High-velocity communication liaison. Sends automated WhatsApp notifications, SMS alerts, executive briefs, and urgent contact relays.',
    hindiVoiceGreeting: 'ज़ोया कम्युनिकेशन तैयार है बॉस! व्हाट्सएप, मैसेजेस और कॉन्टैक्ट्स सब सिंक हैं।',
    englishVoiceGreeting: 'ZOYA Communications ready. WhatsApp bridge and dispatch gateway online.',
    capabilities: [
      'Automated WhatsApp Message Dispatch',
      'SMS & Push Notification Gateway',
      'Priority Message Filtering',
      'Executive Communications Log'
    ],
    quickActions: [
      {
        id: 'whatsapp_status',
        label: 'Check WhatsApp Gateway',
        command: 'Test connection to WhatsApp business and SMS gateways',
        response: 'WhatsApp API bridge is verified. Ready to send automated alerts on cue.'
      },
      {
        id: 'send_summary',
        label: 'Dispatch Empire Brief',
        command: 'Send quick status notification to commander contact',
        response: 'Empire Status dispatch prepared: "All 11 agents online. Firebase connected."'
      }
    ],
    telemetry: [
      { label: 'Gateway', value: 'WhatsApp / SMS' },
      { label: 'Queue', value: '0 Pending' },
      { label: 'Delivery Rate', value: '100%' }
    ]
  },
  {
    id: 'vyron',
    name: 'VYRON',
    title: 'Research & Intelligence Specialist',
    role: 'Research & Intelligence',
    emoji: '🔍',
    icon: '🔍',
    domain: 'Deep Synthesis & Investigation',
    color: '#8B38FF',
    bgGlow: 'rgba(139, 56, 255, 0.2)',
    borderColor: '#8B38FF',
    status: 'ONLINE',
    efficiency: 99.2,
    systemPrompt: 'You are VYRON research intelligence agent deep research tavily search',
    tools: ['deep_research', 'tavily_search'],
    wakeWord: 'Hey VYRON',
    voiceId: 'VYRON-8B38FF',
    description: 'Deep investigative analyst. Executes multi-source web syntheses, academic paper analyses, market forecasts, and competitive research dossiers.',
    hindiVoiceGreeting: 'वाइरॉन रिसर्च एजेंट तैयार है बॉस! किसी भी विषय पर गहन विश्लेषण और इनसाइट्स तुरंत उपलब्ध हैं।',
    englishVoiceGreeting: 'VYRON Research & Intel online. Multi-source search and synthesis engines primed.',
    capabilities: [
      'Multi-Source Deep Web Research',
      'Tavily Neural Search Integration',
      'Competitor Intel & Trend Forecasting',
      'Automated Executive Dossier Synthesis'
    ],
    quickActions: [
      {
        id: 'ai_research',
        label: 'Research Voice Agent Trends',
        command: 'Analyze latest mobile voice agent paradigms and on-device neural chips',
        response: 'Dossier generated: On-device voice LLMs paired with multi-agent architecture represent the cutting edge.'
      },
      {
        id: 'market_intel',
        label: 'Global Market Intel',
        command: 'Scan macroeconomic shifts and developer tool ecosystems',
        response: 'Analysis complete: Mobile Flutter/Compose hybrid applications showing 3x engagement.'
      }
    ],
    telemetry: [
      { label: 'Search Depth', value: 'Level 5 Deep' },
      { label: 'Sources', value: '1,400+ Verified' },
      { label: 'Accuracy', value: '99.6%' }
    ]
  },
  {
    id: 'archer',
    name: 'ARCHER',
    title: 'Internet & News Scout',
    role: 'Internet & News',
    emoji: '🏹',
    icon: '🏹',
    domain: 'Live News & Digital Reconnaissance',
    color: '#4ECDC4',
    bgGlow: 'rgba(78, 205, 196, 0.2)',
    borderColor: '#4ECDC4',
    status: 'ONLINE',
    efficiency: 98.7,
    systemPrompt: 'You are ARCHER internet news browsing agent latest headlines realtime',
    tools: ['news', 'browsing'],
    wakeWord: 'Hey ARCHER',
    voiceId: 'ARCHER-4ECDC4',
    description: 'Rapid-fire digital scout. Tracks breaking global news, technology headlines, market tickers, and trending developer topics in real time.',
    hindiVoiceGreeting: 'आर्चर इंटरनेट और न्यूज़ स्काउट सक्रिय है बॉस! देश-दुनिया की ताज़ा खबरें सीधे आपकी स्क्रीन पर।',
    englishVoiceGreeting: 'ARCHER News Radar online. Scanning global wire services and breaking feeds.',
    capabilities: [
      'Real-Time Breaking News Aggregator',
      'Targeted Domain Browsing & Scrape',
      'Fact-Checking & Bias Verification',
      'Instant Audio News Bulletins'
    ],
    quickActions: [
      {
        id: 'news_bulletin',
        label: 'Top 3 News Headlines',
        command: 'Summarize top global technology and business stories',
        response: '1) Next-gen Android release rolls out. 2) India tech ecosystem surges. 3) AI Assistant adoption jumps 45%.'
      },
      {
        id: 'scrape_feed',
        label: 'Scan RSS & Wire Alerts',
        command: 'Verify latest Reuters and TechCrunch feeds',
        response: 'Wire feeds verified. Zero high-impact disruptions reported in tech infrastructure.'
      }
    ],
    telemetry: [
      { label: 'Feeds Tracked', value: '380 Active' },
      { label: 'Refresh Rate', value: '30 Seconds' },
      { label: 'Filter', value: 'Clean Intel' }
    ]
  },
  {
    id: 'nova',
    name: 'NOVA',
    title: 'Notes, PDFs & QR Master',
    role: 'Notes PDFs QR',
    emoji: '📝',
    icon: '📝',
    domain: 'Document Digitization & OCR',
    color: '#45B7D1',
    bgGlow: 'rgba(69, 183, 209, 0.2)',
    borderColor: '#45B7D1',
    status: 'ONLINE',
    efficiency: 99.1,
    systemPrompt: 'You are NOVA notes pdf qr ocr agent scan extract summarize',
    tools: ['notes', 'pdf', 'qr', 'ocr'],
    wakeWord: 'Hey NOVA',
    voiceId: 'NOVA-45B7D1',
    description: 'Document intelligence agent. Generates summaries from PDF files, creates and scans QR codes, extracts text via OCR, and organizes voice notes.',
    hindiVoiceGreeting: 'नोवा नोट्स और पीडीएफ एजेंट तैयार है बॉस! किसी भी दस्तावेज या क्यूआर कोड को तुरंत प्रोसेस करें।',
    englishVoiceGreeting: 'NOVA Document Master ready. PDF, Notes, QR generation and OCR tools active.',
    capabilities: [
      'PDF Parsing & Smart Executive Summary',
      'Dynamic QR Code Generator & Decoder',
      'Live Image Text Extraction (OCR)',
      'Timestamped Voice Note Transcriptions'
    ],
    quickActions: [
      {
        id: 'generate_qr',
        label: 'Generate Empire QR',
        command: 'Create quick QR code linking to Chouhan AI APK download',
        response: 'QR Code synthesized: Directly routes to GitHub Release v2.2.11 for 1-click install.'
      },
      {
        id: 'ocr_document',
        label: 'Scan Sample Document',
        command: 'Run OCR on incoming document scan',
        response: 'Document text extracted with 99.8% precision. Ready for export to markdown.'
      }
    ],
    telemetry: [
      { label: 'OCR Precision', value: '99.8%' },
      { label: 'PDF Engine', value: 'Vector Native' },
      { label: 'QR Generator', value: 'Instant' }
    ]
  },
  {
    id: 'stonic',
    name: 'STONIC',
    title: 'Spotify & Media Commander',
    role: 'Spotify & Media Commander',
    emoji: '🎵',
    icon: '🎵',
    domain: 'Music Streaming & Audio Control',
    color: '#96CEB4',
    bgGlow: 'rgba(150, 206, 180, 0.25)',
    borderColor: '#96CEB4',
    status: 'ONLINE',
    efficiency: 99.6,
    systemPrompt: 'You are STONIC Spotify Media Agent, play Mata Rani Bhajans, Jai Mata Di songs, media control, volume, playlists',
    tools: ['spotify', 'media_control', 'playlist'],
    wakeWord: 'Hey STONIC',
    voiceId: 'STONIC-96CEB4',
    description: 'Autonomous music and streaming maestro. Plays Mata Rani Bhajans, "Jai Mata Di" devotional tracks, Chouhan Empire Mix, controls volume, playback and Spotify playlists.',
    hindiVoiceGreeting: 'जय माता दी बॉस! मैं हूँ स्टोनिक, आपका मीडिया और स्पॉटिफाई कमांडर। माता रानी के भजन और संगीत तैयार हैं!',
    englishVoiceGreeting: 'Hey Boss! STONIC Spotify Media Commander active. Mata Rani Bhajans and empire tracks primed.',
    capabilities: [
      'Spotify Connect & Web Playback SDK',
      'Mata Rani Bhajans & Jai Mata Di Playlist',
      'Now Playing Dynamic Waveform Spectrum (#96CEB4)',
      'Smart Volume Normalizer & Track Queue'
    ],
    quickActions: [
      {
        id: 'play_bhajan',
        label: 'Play Mata Rani Bhajans',
        command: 'Start playing devotional Mata Rani and Jai Mata Di bhajans',
        response: 'Now playing: "Jai Mata Di - Sherawali Mata Bhajan" on STONIC Spotify Commander! Waveform active.'
      },
      {
        id: 'empire_mix',
        label: 'Play Chouhan Empire Mix',
        command: 'Start Chouhan Empire high-energy motivational mix',
        response: 'Playing: Chouhan Empire Mix v2.2.11. Volume set to 80% with bass boost.'
      }
    ],
    telemetry: [
      { label: 'Now Playing', value: 'Jai Mata Di Bhajan' },
      { label: 'Audio Engine', value: 'Spotify / Web' },
      { label: 'Waveform Color', value: '#96CEB4' }
    ]
  },
  {
    id: 'luna',
    name: 'LUNA',
    title: 'Bhajan & Avee Player Specialist',
    role: 'Bhajan & Avee Player',
    emoji: '🌙',
    icon: '🌙',
    domain: 'Visualizer & Devotional Media',
    color: '#FFEAA7',
    bgGlow: 'rgba(255, 234, 167, 0.2)',
    borderColor: '#FFEAA7',
    status: 'ONLINE',
    efficiency: 98.6,
    systemPrompt: 'You are LUNA bhajan and avee player agent visual templates audio',
    tools: ['bhajan', 'avee_template'],
    wakeWord: 'Hey LUNA',
    voiceId: 'LUNA-FFEAA7',
    description: 'Aesthetic devotional media and audio visualizer specialist. Generates Avee Player templates, visual spectrums, and plays devotional melodies.',
    hindiVoiceGreeting: 'लूना भजन और एवी प्लेयर एजेंट ऑनलाइन है बॉस! भक्ति संगीत और विजुअल स्पेक्ट्रम तैयार हैं।',
    englishVoiceGreeting: 'LUNA Avee Player & Bhajan specialist online. Visual templates loaded.',
    capabilities: [
      'Avee Player Visualizer Templates',
      'Devotional Bhajan Audio Player',
      'Custom Particle & Glow Rings',
      'High-Definition Audio Spectrum'
    ],
    quickActions: [
      {
        id: 'avee_visualizer',
        label: 'Load Avee Template',
        command: 'Render Avee Player gold devotional visual spectrum',
        response: 'Avee Player template loaded: Gold glow ring with reactive bass pulse.'
      },
      {
        id: 'play_aarti',
        label: 'Play Ambe Gauri Aarti',
        command: 'Play sacred Aarti music with ambient chimes',
        response: 'Playing: Jai Ambe Gauri Aarti with soothing temple bells and chimes.'
      }
    ],
    telemetry: [
      { label: 'Visual Engine', value: 'Avee Spectrum' },
      { label: 'Spectrum Bars', value: '64 Band' },
      { label: 'Bass Reaction', value: 'Reactive' }
    ]
  },
  {
    id: 'resumax',
    name: 'RESUMAX',
    title: 'ATS Resume Scanner & Career Sniper',
    role: 'ATS Resume Scanner 85/100',
    emoji: '📄',
    icon: '📄',
    domain: 'Resume Optimization & ATS Benchmarking',
    color: '#FFD700',
    bgGlow: 'rgba(255, 215, 0, 0.25)',
    borderColor: '#FFD700',
    status: 'ONLINE',
    efficiency: 99.4,
    systemPrompt: 'You are RESUMAX ATS 85/100 keywords Dubai UAE Flutter, cover letter 1-tap, TTS vocal review',
    tools: ['ats_scan', 'resume_parser', 'live_ocr'],
    wakeWord: 'Hey RESUMAX',
    voiceId: 'RESUMAX-FFD700',
    description: 'Elite career intelligence agent. Scans resumes against global ATS benchmarks (Dubai, UAE, India, US), calculates scores (85/100 target), identifies missing keywords, and drafts 1-tap cover letters.',
    hindiVoiceGreeting: 'रेज़्यूमैक्स एटीएस स्कैनर तैयार है बॉस! आपका रेज़्यूमे 85/100 स्कोर और दुबई-यूएई कीवर्ड्स के साथ तैयार है।',
    englishVoiceGreeting: 'RESUMAX ATS Scanner active. 85/100 gold target score calibrated. Keywords ready.',
    capabilities: [
      'ATS Score Calculation (85/100 Gold Benchmark)',
      'High-Impact Keyword Audit (Dubai, UAE, Flutter, AI)',
      '1-Tap Tailored Cover Letter Generator',
      'TTS Vocal Review of Strengths & Deficiencies'
    ],
    quickActions: [
      {
        id: 'scan_ats',
        label: 'Run ATS Resume Scan',
        command: 'Evaluate current resume profile for Flutter / AI Engineer roles in Dubai/UAE',
        response: 'ATS Score: 85/100! Strengths: Flutter, Jetpack Compose, AI Voice. Recommended addition: CI/CD Docker.'
      },
      {
        id: 'cover_letter',
        label: 'Draft 1-Tap Cover Letter',
        command: 'Generate winning executive cover letter with TTS review',
        response: 'Cover Letter generated: Tailored for Senior Mobile AI Architect. Tap Copy to clipboard.'
      }
    ],
    telemetry: [
      { label: 'ATS Score', value: '85/100 Gold' },
      { label: 'Target Market', value: 'Dubai / UAE' },
      { label: 'Review Mode', value: 'TTS Vocal' }
    ]
  }
];
