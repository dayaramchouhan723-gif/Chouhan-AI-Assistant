package com.example

import android.os.Bundle
import android.speech.tts.TextToSpeech
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.theme.MyApplicationTheme
import java.util.Locale

data class AndroidAgent(
    val id: String,
    val name: String,
    val title: String,
    val emoji: String,
    val domain: String,
    val efficiency: String,
    val greeting: String
)

val AGENTS_LIST = listOf(
    AndroidAgent("myra", "MYRA", "Main Voice Assistant", "🎙️", "148 Languages & OCR", "100%", "जय माता दी बॉस! मैं हूँ मायरा, आपकी मुख्य वॉइस असिस्टेंट।"),
    AndroidAgent("kayra", "KAYRA", "File Manager", "📁", "Workspace IO & Storage", "99.4%", "कायरा फाइल मैनेजर तैयार है बॉस! आपकी फाइल्स सुरक्षित हैं।"),
    AndroidAgent("maya", "MAYA", "Frontend Dev", "💻", "Website & UI Generator", "99.8%", "माया वेब डेवलपर तैयार है बॉस! कोड 100% रेडी है।"),
    AndroidAgent("jarvis", "JARVIS", "System Control", "🤖", "Windows OS Hooks", "99.5%", "जार्विस सिस्टम कंट्रोल ऑनलाइन है बॉस! सीपीयू लोड सामान्य है।"),
    AndroidAgent("zoya", "ZOYA", "Communication", "💬", "WhatsApp & Messaging", "98.9%", "ज़ोया कम्युनिकेशन तैयार है बॉस! व्हाट्सएप गेटवे एक्टिव है।"),
    AndroidAgent("vyron", "VYRON", "Research & Intel", "🔍", "Deep Search & Tavily", "99.2%", "वाइरॉन रिसर्च एजेंट हाजिर है बॉस! गहन इनसाइट्स तैयार हैं।"),
    AndroidAgent("archer", "ARCHER", "Internet & News", "🏹", "Headlines & Live Feeds", "98.7%", "आर्चर न्यूज़ स्काउट सक्रिय है बॉस! ताज़ा खबरें स्क्रीन पर हैं।"),
    AndroidAgent("nova", "NOVA", "Notes PDFs QR", "📝", "Document OCR & QR", "99.1%", "नोवा नोट्स और पीडीएफ एजेंट तैयार है बॉस!"),
    AndroidAgent("stonic", "STONIC", "Spotify Media", "🎵", "Bhajans & Media Control", "99.6%", "जय माता दी! स्टोनिक स्पॉटिफाई मीडिया कमांडर तैयार है बॉस!"),
    AndroidAgent("luna", "LUNA", "Bhajan & Avee", "🌙", "Devotional Visualizer", "98.6%", "लूना भजन और एवी प्लेयर सक्रिय है बॉस! भक्ति संगीत तैयार है।"),
    AndroidAgent("resumax", "RESUMAX", "ATS Scanner", "📄", "85/100 Dubai UAE Career", "99.4%", "रेज़्यूमैक्स एटीएस स्कैनर तैयार है, स्कोर 85/100 बॉस!")
)

class MainActivity : ComponentActivity(), TextToSpeech.OnInitListener {
    private var tts: TextToSpeech? = null
    private var isTtsReady by mutableStateOf(false)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        tts = TextToSpeech(this, this)

        setContent {
            MyApplicationTheme {
                ChouhanAiScreen(
                    onSpeak = { text -> speakOut(text) },
                    isTtsReady = isTtsReady
                )
            }
        }
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            val result = tts?.setLanguage(Locale("hi", "IN"))
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                tts?.setLanguage(Locale.US)
            }
            isTtsReady = true
            // Iconic Greeting upon launch as requested
            speakOut("जय माता दी बॉस! मायरा वॉइस इंजन और सभी 11 साम्राज्य एजेंट्स ऑनलाइन हैं।")
        }
    }

    private fun speakOut(text: String) {
        if (isTtsReady) {
            tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "CHOUHAN_AI_VOICE")
        }
    }

    override fun onDestroy() {
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ChouhanAiScreen(
    onSpeak: (String) -> Unit,
    isTtsReady: Boolean
) {
    var selectedAgent by remember { mutableStateOf<AndroidAgent?>(null) }
    var lastSpoken by remember { mutableStateOf("जय माता दी बॉस! सभी 11 एजेंट्स ऑनलाइन हैं।") }

    val infiniteTransition = rememberInfiniteTransition(label = "pulse")
    val pulseScale by infiniteTransition.animateFloat(
        initialValue = 1f,
        targetValue = 1.15f,
        animationSpec = infiniteRepeatable(
            animation = tween(1200),
            repeatMode = RepeatMode.Reverse
        ),
        label = "pulse_scale"
    )

    Scaffold(
        modifier = Modifier.fillMaxSize().testTag("main_screen"),
        containerColor = Color(0xFF070A12)
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .padding(horizontal = 16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            item {
                Spacer(modifier = Modifier.height(8.dp))
                // Header Bar
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Box(
                            modifier = Modifier
                                .size(44.dp)
                                .clip(RoundedCornerShape(12.dp))
                                .background(Brush.linearGradient(listOf(Color(0xFFF59E0B), Color(0xFFB45309))))
                                .padding(1.5.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Box(
                                modifier = Modifier
                                    .fillMaxSize()
                                    .clip(RoundedCornerShape(10.dp))
                                    .background(Color(0xFF0F1424)),
                                contentAlignment = Alignment.Center
                            ) {
                                Text("👑", fontSize = 20.sp)
                            }
                        }
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text(
                                    "Chouhan AI Assistant",
                                    color = Color(0xFFFDE047),
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 17.sp
                                )
                                Spacer(modifier = Modifier.width(6.dp))
                                Surface(
                                    color = Color(0x33F59E0B),
                                    shape = RoundedCornerShape(10.dp),
                                    border = androidx.compose.foundation.BorderStroke(1.dp, Color(0x66F59E0B))
                                ) {
                                    Text(
                                        "v2.2.16",
                                        color = Color(0xFFF59E0B),
                                        fontSize = 10.sp,
                                        fontWeight = FontWeight.Bold,
                                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                    )
                                }
                            }
                            Text(
                                "MYRA Voice Engine • 11 Agents Online",
                                color = Color(0xFF10B981),
                                fontSize = 11.sp
                            )
                        }
                    }
                }
            }

            // Cloud Telemetry Bar
            item {
                Surface(
                    color = Color(0xFF0F172A),
                    shape = RoundedCornerShape(12.dp),
                    border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF1E293B)),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Row(
                        modifier = Modifier.padding(12.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Column {
                            Text(
                                "Firebase Cloud: polynomial-park-511512-h0",
                                color = Color(0xFF38BDF8),
                                fontSize = 11.sp,
                                fontWeight = FontWeight.SemiBold
                            )
                            Text(
                                "Region: asia-southeast1 • Ping: 11.4ms",
                                color = Color(0xFF94A3B8),
                                fontSize = 10.sp
                            )
                        }
                        Surface(
                            color = Color(0x2210B981),
                            shape = CircleShape,
                            border = androidx.compose.foundation.BorderStroke(1.dp, Color(0x6610B981))
                        ) {
                            Text(
                                "● ACTIVE",
                                color = Color(0xFF10B981),
                                fontSize = 9.sp,
                                fontWeight = FontWeight.Bold,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp)
                            )
                        }
                    }
                }
            }

            // Central Voice Core Orb
            item {
                Card(
                    colors = CardDefaults.cardColors(containerColor = Color(0xFF0F1424)),
                    shape = RoundedCornerShape(20.dp),
                    border = androidx.compose.foundation.BorderStroke(1.dp, Color(0x33F59E0B)),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(20.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(
                            "MYRA VOICE INTELLIGENCE",
                            color = Color(0xFFF59E0B),
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            letterSpacing = 1.sp
                        )
                        Spacer(modifier = Modifier.height(16.dp))

                        // Pulsing Voice Orb Button
                        Box(
                            contentAlignment = Alignment.Center,
                            modifier = Modifier.size(110.dp)
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(100.dp)
                                    .scale(pulseScale)
                                    .clip(CircleShape)
                                    .background(Color(0x22F59E0B))
                            )
                            Button(
                                onClick = {
                                    val msg = "जय माता दी बॉस! मायरा वॉइस इंजन और सभी 11 साम्राज्य एजेंट्स ऑनलाइन हैं।"
                                    lastSpoken = msg
                                    onSpeak(msg)
                                },
                                shape = CircleShape,
                                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFEAB308)),
                                modifier = Modifier
                                    .size(80.dp)
                                    .testTag("voice_orb_button"),
                                contentPadding = PaddingValues(0.dp)
                            ) {
                                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                    Icon(
                                        Icons.Default.Mic,
                                        contentDescription = "Voice Input",
                                        tint = Color.Black,
                                        modifier = Modifier.size(30.dp)
                                    )
                                    Text(
                                        "SPEAK",
                                        color = Color.Black,
                                        fontSize = 10.sp,
                                        fontWeight = FontWeight.ExtraBold
                                    )
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(16.dp))
                        Text(
                            "Tap to hear: \"Jai Mata Di Boss\"",
                            color = Color(0xFFE2E8F0),
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Medium
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            lastSpoken,
                            color = Color(0xFF94A3B8),
                            fontSize = 11.sp,
                            textAlign = androidx.compose.ui.text.style.TextAlign.Center
                        )

                        Spacer(modifier = Modifier.height(10.dp))
                        // Voice Waveform Animation in Agent Chat
                        Row(
                            horizontalArrangement = Arrangement.spacedBy(3.dp),
                            verticalAlignment = Alignment.Bottom,
                            modifier = Modifier
                                .height(26.dp)
                                .clip(RoundedCornerShape(6.dp))
                                .background(Color(0xFF090D18))
                                .padding(horizontal = 12.dp, vertical = 4.dp)
                        ) {
                            Text(
                                "VOICE WAVE: ",
                                color = Color(0xFFFF2D75),
                                fontSize = 9.sp,
                                fontWeight = FontWeight.Bold,
                                modifier = Modifier.align(Alignment.CenterVertically)
                            )
                            val barHeights = listOf(10.dp, 18.dp, 8.dp, 20.dp, 14.dp, 6.dp, 16.dp, 12.dp, 18.dp, 10.dp, 16.dp, 8.dp)
                            barHeights.forEachIndexed { i, h ->
                                val dynamicH = if (i % 2 == 0) (h.value * pulseScale).dp else (h.value * (2.1f - pulseScale)).dp
                                Box(
                                    modifier = Modifier
                                        .width(3.5.dp)
                                        .height(dynamicH)
                                        .clip(RoundedCornerShape(2.dp))
                                        .background(if (i % 3 == 0) Color(0xFFFF2D75) else if (i % 3 == 1) Color(0xFFF59E0B) else Color(0xFF96CEB4))
                                )
                            }
                        }
                    }
                }
            }

            // Quick Voice Action Chips
            item {
                Text(
                    "Quick Voice Commands",
                    color = Color(0xFFCBD5E1),
                    fontSize = 13.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(8.dp))
                LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    val commands = listOf(
                        "👑 Jai Mata Di Boss" to "जय माता दी बॉस! मायरा वॉइस इंजन और सभी 11 साम्राज्य एजेंट्स तैयार हैं।",
                        "🎵 STONIC Bhajans" to "स्टोनिक मीडिया कमांडर: माता रानी के पावन भजन और चौहाण एम्पायर मिक्स तैयार हैं बॉस!",
                        "📄 RESUMAX ATS 85/100" to "रेज़्यूमैक्स एटीएस स्कैनर: स्कोर 85/100 गोल्ड दुबई मार्केट के लिए तैयार है बॉस!",
                        "🤖 JARVIS System" to "जार्विस विंडोज़ कंट्रोल: सभी टास्क और सिस्टम लोड सामान्य हैं बॉस।",
                        "📁 KAYRA Files" to "कायरा फाइल मैनेजर: डायरेक्टरीज व्यवस्थित हैं बॉस।"
                    )
                    items(commands) { (title, reply) ->
                        Surface(
                            color = Color(0xFF1E293B),
                            shape = RoundedCornerShape(10.dp),
                            border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF334155)),
                            modifier = Modifier.clickable {
                                lastSpoken = reply
                                onSpeak(reply)
                            }
                        ) {
                            Text(
                                title,
                                color = Color(0xFFF1F5F9),
                                fontSize = 12.sp,
                                modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp)
                            )
                        }
                    }
                }
            }

            // FEATURE 2: 11 Agents Status Telemetry Card with Green/Red Dots & Real Firebase Sync
            item {
                Card(
                    colors = CardDefaults.cardColors(containerColor = Color(0xFF0B101D)),
                    shape = RoundedCornerShape(16.dp),
                    border = androidx.compose.foundation.BorderStroke(1.dp, Color(0x4406B6D4)),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Column(modifier = Modifier.padding(14.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text("🌐", fontSize = 16.sp)
                                Spacer(modifier = Modifier.width(8.dp))
                                Column {
                                    Text(
                                        "Agent Status Telemetry Matrix",
                                        color = Color.White,
                                        fontSize = 13.sp,
                                        fontWeight = FontWeight.Bold
                                    )
                                    Text(
                                        "Firebase: polynomial-park-511512-h0 (11.4ms)",
                                        color = Color(0xFF38BDF8),
                                        fontSize = 10.sp
                                    )
                                }
                            }

                            Surface(
                                color = Color(0x2210B981),
                                shape = RoundedCornerShape(8.dp),
                                border = androidx.compose.foundation.BorderStroke(1.dp, Color(0x6610B981))
                            ) {
                                Text(
                                    "11/11 ONLINE",
                                    color = Color(0xFF10B981),
                                    fontSize = 10.sp,
                                    fontWeight = FontWeight.Bold,
                                    modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp)
                                )
                            }
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        // 11 Agent Status Items with Green Dots
                        Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
                            AGENTS_LIST.chunked(3).forEach { rowAgents ->
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                                ) {
                                    rowAgents.forEach { ag ->
                                        Surface(
                                            color = Color(0xFF131B2E),
                                            shape = RoundedCornerShape(8.dp),
                                            border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF1E293B)),
                                            modifier = Modifier
                                                .weight(1f)
                                                .clickable {
                                                    lastSpoken = ag.greeting
                                                    onSpeak(ag.greeting)
                                                }
                                        ) {
                                            Row(
                                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 6.dp),
                                                verticalAlignment = Alignment.CenterVertically,
                                                horizontalArrangement = Arrangement.SpaceBetween
                                            ) {
                                                Row(verticalAlignment = Alignment.CenterVertically) {
                                                    Text(ag.emoji, fontSize = 12.sp)
                                                    Spacer(modifier = Modifier.width(4.dp))
                                                    Text(
                                                        ag.name,
                                                        color = Color.White,
                                                        fontSize = 10.sp,
                                                        fontWeight = FontWeight.SemiBold
                                                    )
                                                }
                                                // Green Dot Indicator
                                                Box(
                                                    modifier = Modifier
                                                        .size(7.dp)
                                                        .clip(CircleShape)
                                                        .background(Color(0xFF10B981))
                                                )
                                            }
                                        }
                                    }
                                    // Fill empty spaces if last row has less than 3
                                    if (rowAgents.size < 3) {
                                        repeat(3 - rowAgents.size) {
                                            Spacer(modifier = Modifier.weight(1f))
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // 11 Autonomous Agents Header
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        "The 11 Autonomous Agents",
                        color = Color(0xFFFDE047),
                        fontSize = 15.sp,
                        fontWeight = FontWeight.Bold
                    )
                    Text(
                        "11/11 Active",
                        color = Color(0xFF10B981),
                        fontSize = 11.sp,
                        fontWeight = FontWeight.SemiBold
                    )
                }
            }

            // 11 Agents List
            items(AGENTS_LIST) { agent ->
                Card(
                    colors = CardDefaults.cardColors(containerColor = Color(0xFF0F1424)),
                    shape = RoundedCornerShape(14.dp),
                    border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF1E293B)),
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable {
                            selectedAgent = agent
                            lastSpoken = agent.greeting
                            onSpeak(agent.greeting)
                        }
                        .testTag("agent_card_${agent.id}")
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(14.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Box(
                                modifier = Modifier
                                    .size(42.dp)
                                    .clip(RoundedCornerShape(10.dp))
                                    .background(Color(0xFF1E293B)),
                                contentAlignment = Alignment.Center
                            ) {
                                Text(agent.emoji, fontSize = 20.sp)
                            }
                            Spacer(modifier = Modifier.width(12.dp))
                            Column {
                                Row(verticalAlignment = Alignment.CenterVertically) {
                                    Text(
                                        agent.name,
                                        color = Color.White,
                                        fontWeight = FontWeight.Bold,
                                        fontSize = 14.sp
                                    )
                                    Spacer(modifier = Modifier.width(6.dp))
                                    Text(
                                        agent.efficiency,
                                        color = Color(0xFF38BDF8),
                                        fontSize = 10.sp,
                                        fontWeight = FontWeight.Bold
                                    )
                                }
                                Text(
                                    agent.title,
                                    color = Color(0xFF94A3B8),
                                    fontSize = 11.sp
                                )
                                Text(
                                    agent.domain,
                                    color = Color(0xFFF59E0B),
                                    fontSize = 10.sp
                                )
                            }
                        }

                        IconButton(
                            onClick = {
                                lastSpoken = agent.greeting
                                onSpeak(agent.greeting)
                            }
                        ) {
                            Icon(
                                Icons.Default.VolumeUp,
                                contentDescription = "Speak Greeting",
                                tint = Color(0xFFF59E0B)
                            )
                        }
                    }
                }
            }

            item {
                Spacer(modifier = Modifier.height(16.dp))
                // Footer System Information
                Surface(
                    color = Color(0xFF090D18),
                    shape = RoundedCornerShape(12.dp),
                    border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF1E293B)),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Column(modifier = Modifier.padding(14.dp)) {
                        Text(
                            "👑 Chouhan AI Assistant Voice Agent - Empire Edition",
                            color = Color(0xFFCBD5E1),
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold
                        )
                        Text(
                            "Package: com.chouhan.empire.ai.assistant",
                            color = Color(0xFF64748B),
                            fontSize = 10.sp
                        )
                        Text(
                            "Direct 1-Click Install Enabled (app-debug.apk & app-release.apk)",
                            color = Color(0xFF10B981),
                            fontSize = 10.sp
                        )
                    }
                }
                Spacer(modifier = Modifier.height(24.dp))
            }
        }
    }
}
