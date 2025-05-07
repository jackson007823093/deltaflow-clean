export async function POST(req: Request) {
    const { message } = await req.json();
  
    // You can connect this to OpenAI, GPT, or any logic.
    const reply = `Echo: ${message}`;
  
    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  