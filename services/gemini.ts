
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPlumbingAdvice = async (issue: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User reports the following plumbing issue: "${issue}". 
      Diagnose the likely cause, estimate severity (low, medium, high, emergency), and provide a professional recommendation. 
      Emphasize when a professional from R Plumbing is needed.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diagnosis: { type: Type.STRING, description: 'Likely cause of the issue.' },
            severity: { type: Type.STRING, description: 'Severity: low, medium, high, or emergency.' },
            recommendation: { type: Type.STRING, description: 'Actionable steps or professional advice.' }
          },
          required: ["diagnosis", "severity", "recommendation"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      diagnosis: "We encountered an error analyzing your issue.",
      severity: "high",
      recommendation: "Please call us immediately at (555) R-PLUMB for a direct consultation."
    };
  }
};
