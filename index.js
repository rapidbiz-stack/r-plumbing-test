
import { GoogleGenAI, Type } from "@google/genai";

// --- Components ---

const Header = (isScrolled = false) => `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">R</div>
                <span class="text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white md:text-blue-900'}">Plumbing</span>
            </div>
            <nav class="hidden md:flex items-center gap-8">
                <a href="#home" class="hover:text-blue-600 font-medium transition-colors">Home</a>
                <a href="#services" class="hover:text-blue-600 font-medium transition-colors">Services</a>
                <a href="#diagnose" class="hover:text-blue-600 font-medium transition-colors">AI Help</a>
                <a href="#testimonials" class="hover:text-blue-600 font-medium transition-colors">Reviews</a>
                <a href="#contact" class="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg">Get a Quote</a>
            </nav>
            <button class="md:hidden text-2xl ${isScrolled ? 'text-slate-900' : 'text-white'}">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>
`;

const Hero = () => `
    <section id="home" class="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070')">
            <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-3xl">
                <span class="inline-block bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-600/30">24/7 Emergency Service Available</span>
                <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">Expert Plumbing <br> <span class="text-blue-500">Done Right.</span></h1>
                <p class="text-xl text-slate-300 mb-10 max-w-xl">Reliable, professional solutions for your home. From emergency leaks to modern system installations.</p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="tel:5557758622" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl">(555) R-PLUMB</a>
                    <a href="#services" class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-white/20 transition-all">Explore Services</a>
                </div>
            </div>
        </div>
    </section>
`;

const Services = () => `
    <section id="services" class="py-24 bg-white">
        <div class="container mx-auto px-6 text-center mb-16">
            <h2 class="text-blue-600 font-bold tracking-widest uppercase mb-2 text-sm">Our Expertise</h2>
            <h3 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Plumbing Solutions For You</h3>
            <div class="grid md:grid-cols-3 gap-8 text-left mt-16">
                ${[
                    { title: 'Emergency Repairs', icon: 'fa-truck-fast', desc: 'Burst pipes or major leaks? We are there in 30 mins.' },
                    { title: 'Water Heaters', icon: 'fa-temperature-arrow-up', desc: 'Installation and repair for all major brands.' },
                    { title: 'Drain Cleaning', icon: 'fa-faucet-drip', desc: 'Professional clearing of the toughest blockages.' }
                ].map(s => `
                    <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                        <div class="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6"><i class="fa-solid ${s.icon}"></i></div>
                        <h4 class="text-2xl font-bold mb-4">${s.title}</h4>
                        <p class="text-slate-600">${s.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
`;

const DiagnosticTool = () => `
    <section id="diagnose" class="py-24 bg-slate-100">
        <div class="container mx-auto px-6">
            <div class="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                <div class="lg:w-1/2 p-12 lg:p-20 text-white">
                    <h2 class="text-4xl font-bold mb-8">Not sure what's wrong? <br><span class="text-blue-500">Ask our AI Expert.</span></h2>
                    <p class="text-slate-400 text-lg">Describe your plumbing issue and our Gemini-powered assistant will diagnose it for you instantly.</p>
                </div>
                <div class="lg:w-1/2 bg-white p-12 lg:p-20" id="diagnostic-form-container">
                    <form id="diagnostic-form">
                        <label class="block text-slate-900 font-bold mb-4 text-xl">Describe the symptoms:</label>
                        <textarea id="diagnostic-query" class="w-full h-40 p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-6 outline-none focus:border-blue-500" placeholder="My kitchen sink is gurgling..."></textarea>
                        <button type="submit" class="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all">Diagnose Problem</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
`;

const Contact = () => `
    <section id="contact" class="py-24 bg-slate-900 text-white">
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-20">
            <div>
                <h2 class="text-blue-500 font-bold uppercase mb-4">Contact</h2>
                <h3 class="text-5xl font-extrabold mb-10">Ready to fix it?</h3>
                <div class="space-y-6">
                    <p class="flex items-center gap-4 text-xl"><i class="fa-solid fa-phone text-blue-500"></i> (555) 775-8622</p>
                    <p class="flex items-center gap-4 text-xl"><i class="fa-solid fa-envelope text-blue-500"></i> service@rplumbing.com</p>
                </div>
            </div>
            <div class="bg-white text-slate-900 p-10 rounded-3xl">
                <h4 class="text-2xl font-bold mb-6">Quick Inquiry</h4>
                <div class="space-y-4">
                    <input type="text" placeholder="Your Name" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <input type="email" placeholder="Email Address" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <button class="w-full py-4 bg-blue-600 text-white rounded-xl font-bold">Send Message</button>
                </div>
            </div>
        </div>
    </section>
`;

const Footer = () => `
    <footer class="py-12 border-t border-slate-200">
        <div class="container mx-auto px-6 text-center text-slate-500">
            <p>© 2024 R Plumbing Inc. Expert solutions, reliable results.</p>
        </div>
    </footer>
`;

// --- Logic & AI ---

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function handleDiagnostic(event) {
    event.preventDefault();
    const query = document.getElementById('diagnostic-query').value;
    const container = document.getElementById('diagnostic-form-container');
    if (!query) return;

    container.innerHTML = `<div class="flex flex-col items-center justify-center h-full py-10"><i class="fa-solid fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i><p class="font-bold">Consulting Gemini AI...</p></div>`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `User plumbing issue: "${query}". Provide a professional diagnosis (likely cause) and a recommendation. Format as JSON.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        diagnosis: { type: Type.STRING },
                        recommendation: { type: Type.STRING },
                        severity: { type: Type.STRING }
                    }
                }
            }
        });

        const data = JSON.parse(response.text);
        container.innerHTML = `
            <div class="animate-fadeIn">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-2xl font-bold">AI Diagnosis</h3>
                    <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">${data.severity || 'Report'}</span>
                </div>
                <div class="space-y-6">
                    <div>
                        <p class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Likely Cause</p>
                        <p class="text-slate-700">${data.diagnosis}</p>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Expert Advice</p>
                        <p class="text-slate-700">${data.recommendation}</p>
                    </div>
                </div>
                <button onclick="location.reload()" class="mt-8 w-full py-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">Try Again</button>
            </div>
        `;
    } catch (error) {
        container.innerHTML = `<p class="text-red-500">Connection error. Please call us at (555) 775-8622.</p>`;
    }
}

function render(isScrolled = false) {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${Header(isScrolled)}
        <main>
            ${Hero()}
            ${Services()}
            ${DiagnosticTool()}
            ${Contact()}
        </main>
        ${Footer()}
    `;

    // Re-attach event listeners after every render
    const form = document.getElementById('diagnostic-form');
    if (form) form.addEventListener('submit', handleDiagnostic);
}

// Initial Render
render();

// Global Scroll Listener
let lastScrollState = false;
window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== lastScrollState) {
        lastScrollState = isScrolled;
        const header = document.querySelector('header');
        if (isScrolled) {
            header.classList.add('bg-white', 'shadow-md', 'py-3');
            header.classList.remove('bg-transparent', 'py-5');
            header.querySelectorAll('span, a:not(.bg-blue-600)').forEach(el => el.classList.add('text-blue-900'));
        } else {
            header.classList.remove('bg-white', 'shadow-md', 'py-3');
            header.classList.add('bg-transparent', 'py-5');
            header.querySelectorAll('span, a:not(.bg-blue-600)').forEach(el => el.classList.remove('text-blue-900'));
        }
    }
});
