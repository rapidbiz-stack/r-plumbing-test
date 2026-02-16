
import React, { useState } from 'react';
import { getPlumbingAdvice } from '../services/gemini';
import { DiagnosticResult } from '../types';

const DiagnosticTool: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const handleDiagnose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const data = await getPlumbingAdvice(query);
    setResult(data);
    setLoading(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'emergency': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-slate-900';
      default: return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Left Side: Info */}
        <div className="lg:w-1/2 p-12 lg:p-20 text-white">
          <div className="bg-blue-600/30 text-blue-400 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Smart Diagnosis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Not sure what's wrong? <br />
            <span className="text-blue-500">Ask our AI Expert.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Describe your plumbing issue in plain English. Our AI-powered assistant (powered by Gemini) will analyze your symptoms and suggest the best course of action.
          </p>
          
          <ul className="space-y-4">
            {[
              "Instant troubleshooting advice",
              "Severity assessment",
              "Professional recommendations",
              "24/7 Availability"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-300">
                <i className="fa-solid fa-circle-check text-blue-500"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Tool */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-20">
          {!result ? (
            <form onSubmit={handleDiagnose} className="h-full flex flex-col justify-center">
              <label className="block text-slate-900 font-bold mb-4 text-xl">Describe your issue:</label>
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Example: My kitchen sink is draining slowly and there is a gurgling sound coming from the bathroom."
                className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none resize-none mb-6 text-slate-700"
              />
              <button 
                type="submit"
                disabled={loading || !query}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  loading ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200'
                }`}
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Analyzing Issue...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    Diagnose Now
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Diagnosis Report</h3>
                <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${getSeverityColor(result.severity)}`}>
                  {result.severity} Priority
                </span>
              </div>
              
              <div className="space-y-8 mb-10 overflow-y-auto max-h-[350px] pr-2">
                <div>
                  <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-2">Likely Cause</h4>
                  <p className="text-slate-700 leading-relaxed text-lg">{result.diagnosis}</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-2">Expert Recommendation</h4>
                  <p className="text-slate-700 leading-relaxed text-lg">{result.recommendation}</p>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <button 
                  onClick={() => setResult(null)}
                  className="w-full py-4 text-slate-500 font-bold hover:text-blue-600 transition-colors"
                >
                  <i className="fa-solid fa-rotate-left mr-2"></i> Try Another Search
                </button>
                <a 
                  href="#contact"
                  className="w-full block text-center py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                >
                  Schedule Professional Inspection
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTool;
