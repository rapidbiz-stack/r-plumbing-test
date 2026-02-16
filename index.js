
import { GoogleGenAI, Type } from "@google/genai";

// --- State Management ---
const state = {
    currentPage: 'home',
    isScrolled: false,
    assistantOpen: false,
    assistantHistory: [
        { role: 'model', text: 'Identity confirmed. I am the R-Plumbing Cyber-Assistant. How can I optimize your infrastructure today?' }
    ]
};

// --- AI Initialization ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- Router Logic ---
const routes = {
    home: renderHome,
    services: renderServices,
    lab: renderLab,
    contact: renderContact
};

function navigate(route) {
    const r = route.replace('#', '') || 'home';
    state.currentPage = r;
    renderApp();
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', () => navigate(window.location.hash));

// --- Global UI Components ---

const Header = () => `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${state.isScrolled ? 'glass py-3' : 'bg-transparent py-6'}">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="flex items-center gap-3 cursor-pointer" onclick="location.hash='#home'">
                <div class="bg-cyan-500 text-slate-900 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(6,182,212,0.5)]">R</div>
                <div class="flex flex-col">
                    <span class="text-xl font-black tracking-tighter text-white uppercase">Plumbing</span>
                    <span class="text-[10px] font-mono text-cyan-400 tracking-[0.2em] -mt-1">CYBERNETIC DIVISION</span>
                </div>
            </div>
            <nav class="hidden md:flex items-center gap-10">
                ${['home', 'services', 'lab', 'contact'].map(page => `
                    <a href="#${page}" class="nav-link font-medium uppercase tracking-widest text-xs transition-all hover:text-cyan-400 ${state.currentPage === page ? 'text-cyan-400' : 'text-slate-400'}">
                        ${page === 'lab' ? 'AI Lab' : page}
                    </a>
                `).join('')}
                <a href="tel:5557758622" class="neon-glow bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-900 transition-all">
                    Emergency Uplink
                </a>
            </nav>
        </div>
    </header>
`;

const AIChatWidget = () => `
    <div class="fixed bottom-6 right-6 z-[100]">
        <button id="toggle-assistant" class="w-16 h-16 rounded-full bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center text-slate-900 text-2xl hover:scale-110 transition-transform">
            <i class="fa-solid ${state.assistantOpen ? 'fa-xmark' : 'fa-robot'}"></i>
        </button>
        
        <div id="assistant-panel" class="${state.assistantOpen ? 'flex' : 'hidden'} absolute bottom-20 right-0 w-[350px] h-[500px] glass rounded-3xl flex-col overflow-hidden shadow-2xl border-cyan-500/30">
            <div class="p-4 border-b border-white/10 bg-cyan-500/10 flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span class="text-xs font-bold uppercase tracking-tighter text-cyan-400 font-mono">Cyber-Assistant Active</span>
            </div>
            <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-[13px]">
                ${state.assistantHistory.map(msg => `
                    <div class="${msg.role === 'user' ? 'text-right' : 'text-left'}">
                        <span class="inline-block p-3 rounded-2xl ${msg.role === 'user' ? 'bg-cyan-500 text-slate-900' : 'bg-slate-800 text-cyan-100'}">
                            ${msg.text}
                        </span>
                    </div>
                `).join('')}
            </div>
            <form id="assistant-form" class="p-4 bg-slate-900/50 border-t border-white/10">
                <input id="assistant-input" type="text" placeholder="Awaiting command..." class="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-cyan-100 placeholder-slate-500 outline-none focus:border-cyan-500/50">
            </form>
        </div>
    </div>
`;

// --- Page Renderers ---

function renderHome() {
    return `
        <section class="min-h-screen relative flex items-center pt-20">
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
                <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2070" class="w-full h-full object-cover opacity-20" alt="Tech Background">
            </div>
            <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div class="animate-fade-in">
                    <div class="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        <i class="fa-solid fa-microchip animate-pulse"></i> Next-Gen Infrastructure
                    </div>
                    <h1 class="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-8">
                        PLUMBING <br> <span class="text-neon italic">RECODED.</span>
                    </h1>
                    <p class="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed font-light">
                        Leveraging quantum-grade diagnostics and AI-driven precision to manage your home's vital fluid systems. The future of maintenance is here.
                    </p>
                    <div class="flex gap-6">
                        <button onclick="location.hash='#lab'" class="bg-cyan-500 text-slate-900 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">Launch AI Diagnostic</button>
                        <button onclick="location.hash='#services'" class="glass px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">Core Protocols</button>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="glass p-8 rounded-[3rem] neon-glow relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent"></div>
                        <div class="flex justify-between items-center mb-10">
                            <span class="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">System Status</span>
                            <span class="text-[10px] font-mono text-emerald-400 animate-pulse">● NETWORK NOMINAL</span>
                        </div>
                        <div class="space-y-6">
                            ${[
                                { label: 'Response Latency', val: '14ms', icon: 'fa-bolt' },
                                { label: 'Predictive Accuracy', val: '99.8%', icon: 'fa-brain' },
                                { label: 'Uptime Reliability', val: '100%', icon: 'fa-shield-halved' }
                            ].map(stat => `
                                <div class="flex items-center gap-4 border-b border-white/5 pb-4">
                                    <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                                        <i class="fa-solid ${stat.icon}"></i>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-[10px] text-slate-500 uppercase tracking-widest">${stat.label}</p>
                                        <p class="text-xl font-bold text-white">${stat.val}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderServices() {
    const services = [
        { title: 'Neural Leak Detection', icon: 'fa-fingerprint', desc: 'Acoustic AI sensors pinpoint sub-surface fluid escapes with millimeter precision.' },
        { title: 'Smart Node Install', icon: 'fa-gears', desc: 'IoT integration for full autonomous shut-off and pressure modulation.' },
        { title: 'Quantum Water Purification', icon: 'fa-atom', desc: 'Advanced filtration arrays designed for chemical-perfect hydration.' },
        { title: 'High-Velocity Jetting', icon: 'fa-wind', desc: 'Supersonic fluid dynamics to clear architectural obstructions instantly.' }
    ];
    return `
        <section class="py-32 bg-slate-900/50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-24">
                    <h2 class="text-cyan-400 font-mono tracking-[0.4em] uppercase text-xs mb-4">Core Service Protocols</h2>
                    <h3 class="text-5xl font-black tracking-tight">Technical Capability Matrix</h3>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${services.map(s => `
                        <div class="glass p-10 rounded-[2.5rem] hover:border-cyan-500/50 transition-all duration-500 group relative">
                            <div class="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                                <i class="fa-solid ${s.icon}"></i>
                            </div>
                            <h4 class="text-xl font-bold mb-4 text-white">${s.title}</h4>
                            <p class="text-slate-400 text-sm leading-relaxed mb-6">${s.desc}</p>
                            <div class="h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderLab() {
    return `
        <section class="py-32">
            <div class="container mx-auto px-6">
                <div class="glass rounded-[4rem] p-12 lg:p-24 overflow-hidden relative">
                    <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px]"></div>
                    <div class="max-w-3xl">
                        <h2 class="text-neon text-4xl lg:text-6xl font-black mb-8">AI DIAGNOSTIC <br>INTERFACE</h2>
                        <p class="text-slate-400 text-lg mb-12 font-light">Input anomaly data below. Our deep-learning hydraulic models will cross-reference 50 years of maintenance data to provide immediate resolution vectors.</p>
                        
                        <div id="lab-display">
                            <form id="lab-form" class="space-y-6">
                                <div class="bg-slate-800/50 border border-white/10 rounded-3xl p-8">
                                    <textarea id="lab-query" placeholder="Describe the mechanical anomaly..." class="w-full h-40 bg-transparent text-cyan-100 outline-none resize-none placeholder-slate-600 font-mono"></textarea>
                                </div>
                                <button type="submit" class="w-full bg-cyan-500 text-slate-900 py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg hover:shadow-cyan-500/40 transition-all">Execute Diagnosis</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderContact() {
    return `
        <section class="py-32">
            <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 class="text-neon text-5xl font-black mb-10">UPLINK</h2>
                    <p class="text-slate-400 text-xl font-light mb-12">Connect directly with our engineering division. Global coverage for residential and industrial complexes.</p>
                    <div class="space-y-8">
                        <div class="flex items-center gap-6 glass p-6 rounded-2xl">
                            <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400"><i class="fa-solid fa-phone"></i></div>
                            <div>
                                <p class="text-[10px] text-slate-500 uppercase tracking-widest">Primary Line</p>
                                <p class="text-xl font-bold text-white">(555) 775-8622</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6 glass p-6 rounded-2xl">
                            <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400"><i class="fa-solid fa-envelope"></i></div>
                            <div>
                                <p class="text-[10px] text-slate-500 uppercase tracking-widest">Digital Mailbox</p>
                                <p class="text-xl font-bold text-white">ops@rplumbing.cyber</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="glass p-12 rounded-[3rem]">
                    <form class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="ENTITY NAME" class="bg-slate-800/50 border border-white/10 p-4 rounded-xl text-white font-mono outline-none focus:border-cyan-500">
                            <input type="text" placeholder="CONTACT FREQUENCY" class="bg-slate-800/50 border border-white/10 p-4 rounded-xl text-white font-mono outline-none focus:border-cyan-500">
                        </div>
                        <textarea placeholder="MISSION DESCRIPTION" class="w-full h-32 bg-slate-800/50 border border-white/10 p-4 rounded-xl text-white font-mono outline-none focus:border-cyan-500"></textarea>
                        <button class="w-full bg-white text-slate-900 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-cyan-500 transition-all">Send Transmission</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

// --- AI Handlers ---

async function handleAssistant(input) {
    state.assistantHistory.push({ role: 'user', text: input });
    renderAssistantMessages();
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `You are a futuristic, slightly robotic plumbing AI assistant for R-Plumbing. Be helpful, concise, and stay in character. User says: "${input}"`,
            config: { maxOutputTokens: 150 }
        });
        state.assistantHistory.push({ role: 'model', text: response.text });
    } catch (e) {
        state.assistantHistory.push({ role: 'model', text: 'CONNECTION ERROR: SYSTEM OFFLINE.' });
    }
    renderAssistantMessages();
}

function renderAssistantMessages() {
    const chat = document.getElementById('chat-messages');
    if (!chat) return;
    chat.innerHTML = state.assistantHistory.map(msg => `
        <div class="${msg.role === 'user' ? 'text-right' : 'text-left'}">
            <span class="inline-block p-3 rounded-2xl ${msg.role === 'user' ? 'bg-cyan-500 text-slate-900' : 'bg-slate-800 text-cyan-100'}">
                ${msg.text}
            </span>
        </div>
    `).join('');
    chat.scrollTop = chat.scrollHeight;
}

async function executeLabDiagnosis(query) {
    const display = document.getElementById('lab-display');
    display.innerHTML = `
        <div class="flex flex-col items-center py-20 animate-pulse">
            <div class="w-20 h-20 border-t-2 border-cyan-400 rounded-full animate-spin mb-6"></div>
            <p class="font-mono text-cyan-400 uppercase tracking-[0.3em] text-xs">Simulating Fluid Dynamics...</p>
        </div>
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `User plumbing issue: "${query}". Provide a futuristic diagnostic report in JSON.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        cause: { type: Type.STRING },
                        severity: { type: Type.STRING },
                        vector: { type: Type.STRING, description: "Technical solution path" }
                    },
                    required: ["cause", "severity", "vector"]
                }
            }
        });
        const data = JSON.parse(response.text);
        display.innerHTML = `
            <div class="animate-fade-in font-mono">
                <div class="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
                    <span class="text-cyan-400 uppercase text-xs">Report ID: RP-${Math.floor(Math.random()*99999)}</span>
                    <span class="px-3 py-1 bg-red-500/20 text-red-400 text-[10px] rounded-full">${data.severity.toUpperCase()} PRIORITY</span>
                </div>
                <div class="space-y-8 mb-12">
                    <div>
                        <p class="text-slate-500 uppercase text-[10px] tracking-widest mb-2">Detected Anomaly</p>
                        <p class="text-white text-xl">${data.cause}</p>
                    </div>
                    <div class="p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                        <p class="text-cyan-400 uppercase text-[10px] tracking-widest mb-2">Correction Vector</p>
                        <p class="text-cyan-100 leading-relaxed">${data.vector}</p>
                    </div>
                </div>
                <button onclick="location.reload()" class="text-slate-500 hover:text-white transition-colors text-xs uppercase tracking-widest"><i class="fa-solid fa-rotate-left mr-2"></i> New Analysis</button>
            </div>
        `;
    } catch (e) {
        display.innerHTML = `<p class="text-red-400 font-mono">ENCOUNTERED UNKNOWN SYSTEM ERROR. PLEASE CALL HUMAN OPERATOR.</p>`;
    }
}

// --- Initialization ---

function renderApp() {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${Header()}
        <main>
            ${routes[state.currentPage]()}
        </main>
        <footer class="py-20 border-t border-white/5 bg-slate-900/80">
            <div class="container mx-auto px-6 text-center">
                <div class="flex justify-center items-center gap-3 mb-10 opacity-50">
                    <div class="bg-cyan-500 text-slate-900 w-6 h-6 rounded flex items-center justify-center font-bold text-xs">R</div>
                    <span class="text-xs font-black tracking-widest uppercase text-white">Cyber-Plumbing Systems Inc.</span>
                </div>
                <p class="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em]">© 2025 ALL INFRASTRUCTURE BELONGS TO THE NETWORK</p>
            </div>
        </footer>
    `;

    document.getElementById('ai-widget-container').innerHTML = AIChatWidget();
    attachListeners();
}

function attachListeners() {
    // Header Scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== state.isScrolled) {
            state.isScrolled = scrolled;
            renderApp();
        }
    }, { passive: true });

    // Assistant Toggle
    const toggle = document.getElementById('toggle-assistant');
    if (toggle) {
        toggle.onclick = () => {
            state.assistantOpen = !state.assistantOpen;
            renderApp();
        };
    }

    // Assistant Form
    const assistantForm = document.getElementById('assistant-form');
    if (assistantForm) {
        assistantForm.onsubmit = (e) => {
            e.preventDefault();
            const input = document.getElementById('assistant-input');
            if (input.value.trim()) {
                handleAssistant(input.value.trim());
                input.value = '';
            }
        };
    }

    // Lab Form
    const labForm = document.getElementById('lab-form');
    if (labForm) {
        labForm.onsubmit = (e) => {
            e.preventDefault();
            const query = document.getElementById('lab-query').value;
            if (query.trim()) executeLabDiagnosis(query);
        };
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    navigate(window.location.hash);
    setTimeout(() => {
        document.body.classList.add('ready');
    }, 1000);
});
