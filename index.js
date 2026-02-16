
import { GoogleGenAI, Type } from "@google/genai";

// --- State Management ---
const state = {
    isScrolled: false,
    diagnosticLoading: false,
    diagnosticResult: null
};

// --- Templates ---

const Header = () => `
    <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${state.isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-200">R</div>
                <span class="text-2xl font-bold tracking-tight ${state.isScrolled ? 'text-slate-900' : 'text-white'}">Plumbing</span>
            </div>
            <nav class="hidden md:flex items-center gap-8">
                <a href="#home" class="hover:text-blue-600 font-medium transition-colors ${state.isScrolled ? 'text-slate-600' : 'text-slate-200'}">Home</a>
                <a href="#services" class="hover:text-blue-600 font-medium transition-colors ${state.isScrolled ? 'text-slate-600' : 'text-slate-200'}">Services</a>
                <a href="#diagnose" class="hover:text-blue-600 font-medium transition-colors ${state.isScrolled ? 'text-slate-600' : 'text-slate-200'}">AI Diagnostic</a>
                <a href="#contact" class="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">Emergency Call</a>
            </nav>
            <button class="md:hidden text-2xl ${state.isScrolled ? 'text-slate-900' : 'text-white'}">
                <i class="fa-solid fa-bars-staggered"></i>
            </button>
        </div>
    </header>
`;

const Hero = () => `
    <section id="home" class="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-900">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070" class="w-full h-full object-cover opacity-40" alt="Plumbing Background">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-50"></div>
        </div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-3xl">
                <div class="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-blue-500/30 animate-fade-in">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Available 24/7 for Emergencies
                </div>
                <h1 class="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter animate-fade-in" style="animation-delay: 0.1s">
                    Modern Plumbing. <br> <span class="text-blue-500">Expert Care.</span>
                </h1>
                <p class="text-xl text-slate-300 mb-12 max-w-xl leading-relaxed animate-fade-in" style="animation-delay: 0.2s">
                    We bring precision engineering to your home plumbing. Fast, clean, and powered by decades of professional experience.
                </p>
                <div class="flex flex-col sm:flex-row gap-5 animate-fade-in" style="animation-delay: 0.3s">
                    <a href="tel:5557758622" class="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30">
                        <i class="fa-solid fa-phone-volume"></i>
                        (555) R-PLUMB
                    </a>
                    <a href="#diagnose" class="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all">
                        <i class="fa-solid fa-wand-magic-sparkles text-blue-400"></i>
                        AI Diagnostic
                    </a>
                </div>
            </div>
        </div>
    </section>
`;

const Services = () => {
    const items = [
        { title: 'Emergency Repair', icon: 'fa-bolt-lightning', desc: 'Burst pipes, floods, or sewage backups handled instantly.' },
        { title: 'Leak Detection', icon: 'fa-droplet-slash', desc: 'Thermal imaging and acoustic sensors to find hidden leaks.' },
        { title: 'Full Repiping', icon: 'fa-pipe', desc: 'Modern PEX or copper solutions for aging residential systems.' },
        { title: 'Water Heaters', icon: 'fa-fire-flame-curved', desc: 'Tankless and hybrid system installations and maintenance.' },
        { title: 'Drain Jetting', icon: 'fa-faucet-drip', desc: 'High-pressure cleaning to restore flow to clogged main lines.' },
        { title: 'Smart Home', icon: 'fa-house-signal', desc: 'Smart leak shutoff valves and monitoring system integration.' }
    ];

    return `
        <section id="services" class="py-32 bg-slate-50">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div class="max-w-2xl">
                        <h2 class="text-blue-600 font-bold tracking-widest uppercase mb-4 text-sm">Our Expertise</h2>
                        <h3 class="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Plumbing services for the modern home.</h3>
                    </div>
                    <p class="text-slate-500 text-lg max-w-md">We don't just fix leaks; we optimize your home's entire water infrastructure for longevity and efficiency.</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${items.map(s => `
                        <div class="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <i class="fa-solid ${s.icon}"></i>
                            </div>
                            <h4 class="text-2xl font-bold mb-4 text-slate-900">${s.title}</h4>
                            <p class="text-slate-600 leading-relaxed">${s.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
};

const DiagnosticTool = () => `
    <section id="diagnose" class="py-32 bg-white">
        <div class="container mx-auto px-6">
            <div class="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-3xl">
                <div class="lg:w-5/12 p-12 lg:p-24 text-white">
                    <div class="bg-blue-500/20 text-blue-400 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">AI Assistant</div>
                    <h2 class="text-4xl lg:text-5xl font-black mb-8 leading-tight">Instant AI <br><span class="text-blue-500">Diagnostic Tool</span></h2>
                    <p class="text-slate-400 text-lg leading-relaxed mb-10">Don't wait for a callback. Describe your symptoms to our Gemini-powered engine for an immediate assessment of the problem.</p>
                </div>
                <div class="lg:w-7/12 bg-slate-50/50 p-8 lg:p-16 flex flex-col justify-center border-l border-slate-800" id="diagnostic-display">
                    ${DiagnosticForm()}
                </div>
            </div>
        </div>
    </section>
`;

const DiagnosticForm = () => `
    <div class="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 animate-fade-in">
        <h3 class="text-2xl font-bold text-slate-900 mb-6">Describe the Issue</h3>
        <form id="ai-form" class="space-y-6">
            <div class="relative">
                <textarea 
                    id="ai-query"
                    required
                    class="w-full h-48 p-8 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
                    placeholder="e.g., 'My kitchen faucet is leaking from the handle and making a high-pitched whistling sound when I turn on the hot water.'"
                ></textarea>
            </div>
            <button type="submit" class="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                <i class="fa-solid fa-microchip"></i>
                Analyze Symptoms
            </button>
        </form>
    </div>
`;

const DiagnosticResultTemplate = (data) => `
    <div class="animate-fade-in">
        <div class="flex justify-between items-start mb-8">
            <h3 class="text-3xl font-black text-slate-900">Diagnosis Report</h3>
            <span class="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                data.severity === 'emergency' ? 'bg-red-100 text-red-600' : 
                data.severity === 'high' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
            }">${data.severity || 'Analysis'} Priority</span>
        </div>
        <div class="grid gap-8 mb-12">
            <div class="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                <p class="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Likely Cause</p>
                <p class="text-slate-800 text-xl font-medium leading-relaxed">${data.diagnosis}</p>
            </div>
            <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Professional Recommendation</p>
                <p class="text-slate-700 leading-relaxed text-lg">${data.recommendation}</p>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
            <button id="reset-diag-btn" class="flex-1 py-4 text-slate-500 font-bold hover:text-blue-600 transition-colors">
                <i class="fa-solid fa-arrow-left mr-2"></i> Start Over
            </button>
            <a href="tel:5557758622" class="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold text-center hover:bg-blue-700 shadow-xl shadow-blue-200">
                Schedule Repair
            </a>
        </div>
    </div>
`;

const Footer = () => `
    <footer class="bg-white py-24 border-t border-slate-100">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-4 gap-16 mb-20">
                <div class="col-span-2">
                    <div class="flex items-center gap-2 mb-8">
                        <div class="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg">R</div>
                        <span class="text-2xl font-bold tracking-tight text-slate-900">Plumbing</span>
                    </div>
                    <p class="text-slate-400 text-xl max-w-sm mb-10 leading-relaxed">Modern solutions for residential and commercial plumbing needs. 24/7 reliability.</p>
                </div>
                <div>
                    <h4 class="font-black text-slate-900 uppercase tracking-widest text-xs mb-8">Emergency</h4>
                    <p class="text-slate-400 mb-4">Immediate dispatch available 24 hours a day.</p>
                    <a href="tel:5557758622" class="text-2xl font-black text-blue-600 hover:underline tracking-tighter">(555) 775-8622</a>
                </div>
            </div>
            <div class="pt-12 border-t border-slate-50 text-slate-400 text-sm flex justify-between">
                <p>© 2024 R Plumbing Inc.</p>
            </div>
        </div>
    </footer>
`;

// --- AI Logic ---

// Wrapped in a helper to prevent immediate crash if process.env is missing
const getAIClient = () => {
    try {
        return new GoogleGenAI({ apiKey: process.env.API_KEY });
    } catch (e) {
        console.error("AI Client Init Error:", e);
        return null;
    }
};

async function runDiagnostic(query) {
    const ai = getAIClient();
    if (!ai) return { diagnosis: "System Error", severity: "high", recommendation: "Please call us directly." };

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `User reports: "${query}". Provide a plumbing diagnosis and professional recommendation in JSON.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        diagnosis: { type: Type.STRING },
                        severity: { type: Type.STRING, enum: ['low', 'medium', 'high', 'emergency'] },
                        recommendation: { type: Type.STRING }
                    },
                    required: ["diagnosis", "severity", "recommendation"]
                }
            }
        });
        return JSON.parse(response.text);
    } catch (error) {
        console.error("Gemini Error:", error);
        return {
            diagnosis: "Unable to analyze request.",
            severity: "high",
            recommendation: "Please call our technicians at (555) 775-8622."
        };
    }
}

// --- App Orchestration ---

function attachEventListeners() {
    const form = document.getElementById('ai-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const query = document.getElementById('ai-query').value;
            const display = document.getElementById('diagnostic-display');
            
            display.innerHTML = `
                <div class="flex flex-col items-center justify-center py-20 animate-fade-in">
                    <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6"></div>
                    <p class="text-xl font-bold text-slate-900">Analyzing symptoms...</p>
                </div>
            `;

            const result = await runDiagnostic(query);
            display.innerHTML = DiagnosticResultTemplate(result);
            
            // Attach reset listener
            const resetBtn = document.getElementById('reset-diag-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    display.innerHTML = DiagnosticForm();
                    attachEventListeners();
                });
            }
        });
    }
}

function init() {
    const root = document.getElementById('app');
    if (!root) return;

    root.innerHTML = `
        ${Header()}
        <main>
            ${Hero()}
            ${Services()}
            ${DiagnosticTool()}
        </main>
        ${Footer()}
    `;

    // Signal loader to fade out
    document.body.classList.add('ready');
    
    attachEventListeners();

    // Scroll Observer
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (!header) return;
        const isScrolled = window.scrollY > 50;
        if (isScrolled !== state.isScrolled) {
            state.isScrolled = isScrolled;
            if (isScrolled) {
                header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                header.classList.remove('bg-transparent', 'py-6');
                header.querySelectorAll('span, a:not(.bg-blue-600)').forEach(el => el.classList.replace('text-white', 'text-slate-900'));
                header.querySelectorAll('a:not(.bg-blue-600)').forEach(el => el.classList.replace('text-slate-200', 'text-slate-600'));
            } else {
                header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                header.classList.add('bg-transparent', 'py-6');
                header.querySelectorAll('span, a:not(.bg-blue-600)').forEach(el => el.classList.replace('text-slate-900', 'text-white'));
                header.querySelectorAll('a:not(.bg-blue-600)').forEach(el => el.classList.replace('text-slate-600', 'text-slate-200'));
            }
        }
    });
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
