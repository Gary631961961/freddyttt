
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeInstagramUrl = async (url: string) => {
  if (!apiKey) return { type: 'unknown', confidence: 0, message: "Enter a valid URL" };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this URL and determine if it's an Instagram Reel, Story, or Post. 
      URL: ${url}
      Return JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            type: { type: Type.STRING, description: "reel, story, post, or unknown" },
            confidence: { type: Type.NUMBER },
            message: { type: Type.STRING }
          },
          required: ["type", "confidence", "message"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    return { type: 'unknown', confidence: 0, message: "Processing..." };
  }
};
