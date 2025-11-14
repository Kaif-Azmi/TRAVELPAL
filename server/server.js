import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    
    console.log("📩 Received message:", message);

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are an expert travel planner AI." },
        { role: "user", content: message }
      ],
      max_tokens: 200,
      temperature: 0.7
    });

    console.log("✅ Groq API responded successfully");
    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    console.error("❌ Error:", err.message);
    console.error("Full error:", err);
    res.status(500).json({ error: "API error", details: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
