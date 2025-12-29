const { GoogleGenerativeAI } = require("@google/generative-ai");

class AIClient {
    async call(prompt, model = 'google/gemini-2.0-flash-exp:free') {
        const apiKey = process.env.GEMINI_API_KEY || process.env.OPENROUTER_API_KEY;

        if (!apiKey || apiKey.includes('YOUR_')) {
            throw new Error('NO_API_KEY');
        }

        // --- METHOD 1: Direct Google Gemini (More reliable free tier) ---
        if (process.env.GEMINI_API_KEY && !process.env.GEMINI_API_KEY.includes('YOUR_')) {
            try {
                console.log("📡 Attempting Direct Google Gemini...");
                const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
                const geminiModel = genAI.getGenerativeModel({
                    model: "gemini-2.0-flash-exp",
                    generationConfig: { responseMimeType: "application/json" }
                });

                const finalPrompt = `You are an expert Senior code refactoring engine. Output ONLY valid JSON.\n\n${prompt}`;
                const result = await geminiModel.generateContent(finalPrompt);
                const response = result.response;
                const text = response.text();

                if (text) return text;
            } catch (error) {
                console.warn("⚠️ Direct Gemini Failed:", error.message);
                // Fall through to OpenRouter...
            }
        }

        // --- METHOD 2: OpenRouter (Fallback) ---
        const models = [
            'google/gemini-2.0-flash-exp:free',
            'meta-llama/llama-3-8b-instruct:free',
            'mistralai/mistral-7b-instruct:free',
        ];

        let lastError;
        for (const targetModel of models) {
            try {
                console.log(`📡 Calling OpenRouter (${targetModel})...`);
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                        "HTTP-Referer": "https://synapserefactor.vercel.app",
                        "X-Title": "Synapse AI"
                    },
                    body: JSON.stringify({
                        model: targetModel,
                        messages: [
                            { role: "system", content: "You are an expert Senior code refactoring engine. Output ONLY valid JSON." },
                            { role: "user", content: prompt }
                        ],
                        temperature: 0.2,
                    })
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    lastError = new Error(`AI API Error ${response.status}: ${errorText}`);
                    if (response.status === 429) {
                        console.warn(`⚠️ OpenRouter ${targetModel} is rate limited. Trying next...`);
                        continue;
                    }
                    throw lastError;
                }

                const data = await response.json();
                const content = data.choices[0]?.message?.content;
                if (!content) throw new Error("Empty response from OpenRouter");

                return content;
            } catch (error) {
                lastError = error;
                console.warn(`❌ Attempt with ${targetModel} failed: ${error.message}.`);
            }
        }
        throw lastError;
    }
}

module.exports = new AIClient();
