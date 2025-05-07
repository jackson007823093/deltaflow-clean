'use client';

import { useState } from 'react';

export default function ChatbotPanel() {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { user: userMessage, bot: '...' }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      const botMessage = data.reply || 'Sorry, no response.';

      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1].bot = botMessage;
        return updated;
      });
    } catch (err) {
      console.error('Chatbot error:', err);
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1].bot = 'An error occurred.';
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>Chat with DeltaFlow+</h3>

      <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '1rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>You:</strong> {msg.user}
            <br />
            <strong>Bot:</strong> {msg.bot}
            <hr />
          </div>
        ))}
        {loading && <p><em>Bot is thinking...</em></p>}
      </div>

      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        placeholder="Ask something..."
        style={{ width: '80%', padding: '0.5rem' }}
      />
      <button onClick={sendMessage} disabled={loading} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Send
      </button>
    </div>
  );
}
