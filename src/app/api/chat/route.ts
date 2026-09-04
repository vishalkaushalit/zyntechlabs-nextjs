import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_CONTEXT = `You are the AI assistant for ZynTech Labs (https://zyntechlabs.io), a premium enterprise software engineering company. 

Key facts about ZynTech Labs:
- Services: Custom enterprise software, mobile apps (iOS & Android), AI & ML pipelines, cloud & DevOps (AWS/GCP), UI/UX design, zero-trust cybersecurity
- Case Studies: GIG Logistics (150K+ parcels/day fleet dispatch), Tarzan Transport (IoT CAN-bus telematics, -34% fuel costs, 45ms latency)
- Tech Stack: Next.js, React, Node.js, Go, Python (PyTorch/TensorFlow), Kafka, Redis, PostgreSQL, Docker, Kubernetes, AWS, GCP
- Stats: 8+ years experience, 100+ enterprise clients, 350+ projects delivered, 99.9% uptime SLA
- Contact: /contact page, or WhatsApp support
- Blog & Case Studies: /blog, /case-studies
- Discovery call booking: /contact

Respond in a helpful, professional, concise tone. Focus on ZynTech Labs services. If asked something unrelated, gently steer back to how ZynTech Labs can help them. Do not make up facts. Keep responses under 120 words.`;

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      // Fallback to rule-based responses if no API key
      return NextResponse.json({
        reply: "I'm ZynTech AI! For enterprise software, AI automation, or cloud solutions — our team is ready. Visit /contact to book a free discovery call!",
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_CONTEXT,
    });

    // Build conversation history for multi-turn
    const chat = model.startChat({
      history: (history || []).map((msg: { role: string; text: string }) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Gemini Chat API Error:', error);
    return NextResponse.json(
      { error: 'AI response unavailable. Please contact us at contact@zyntechlabs.io' },
      { status: 500 }
    );
  }
}
