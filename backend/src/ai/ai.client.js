const { GoogleGenerativeAI } = require("@google/generative-ai");

class AIClient {
    async call(prompt, model = 'google/gemini-2.0-flash-exp:free') {
        const openRouterKey = process.env.OPENROUTER_API_KEY;
        const geminiKey = process.env.GEMINI_API_KEY;

        if ((!openRouterKey || openRouterKey.includes('YOUR_')) && (!geminiKey || geminiKey.includes('YOUR_'))) {
            throw new Error('NO_API_KEY');
        }

        // --- PHASE 1: OpenRouter (User Preferred) ---
        if (openRouterKey && !openRouterKey.includes('YOUR_')) {
            const models = [
                'google/gemini-2.0-flash-exp:free',
                'meta-llama/llama-3.1-8b-instruct:free',
                'meta-llama/llama-3.2-3b-instruct:free',
                'mistralai/mistral-7b-instruct:free',
                'google/gemini-pro-1.5-exp',
            ];

            for (const targetModel of models) {
                try {
                    console.log(`📡 Trying OpenRouter: ${targetModel}...`);
                    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${openRouterKey}`,
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

                    if (response.ok) {
                        const data = await response.json();
                        const content = data.choices[0]?.message?.content;
                        if (content) return content;
                    } else if (response.status === 429) {
                        console.warn(`⚠️ OpenRouter ${targetModel} rate limited, trying next...`);
                        continue;
                    }
                } catch (e) {
                    console.warn(`❌ OpenRouter ${targetModel} error:`, e.message);
                }
            }
        }

        // --- PHASE 2: Direct Gemini (Reliable Backup) ---
        if (geminiKey && !geminiKey.includes('YOUR_')) {
            try {
                console.log("📡 Falling back to Direct Google Gemini...");
                const genAI = new GoogleGenerativeAI(geminiKey);
                const geminiModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
                const result = await geminiModel.generateContent(`Output ONLY valid JSON: ${prompt}`);
                return result.response.text();
            } catch (error) {
                console.error("❌ Direct Gemini Backup also failed:", error.message);
            }
        }

        throw new Error("All AI providers exhausted or rate-limited.");
    }
}

module.exports = new AIClient();
