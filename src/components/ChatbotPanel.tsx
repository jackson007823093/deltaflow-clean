'use client';

import React, { useState } from 'react';

export default function ChatbotPanel() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div style={{
      border: '1px solid #cce0ff',
      borderRadius: '12px',
      padding: '1.5rem',
      marginTop: '2rem',
      backgroundColor: '#f2f6fc',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h3 style={{
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#003366',
        fontWeight: 'bold'
      }}>
        Delta Assistant Chat
      </h3>

      <div style={{
        background: '#ffffff',
        borderRadius: '8px',
        padding: '1rem',
        height: '200px',
        overflowY: 'auto',
        border: '1px solid #ddd',
        marginBottom: '1rem'
      }}>
        {messages.length === 0 ? (
          <p style={{ color: '#999' }}>Ask about delays, rebooking, or nearby services.</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} style={{
              marginBottom: '0.5rem',
              padding: '0.5rem',
              backgroundColor: '#e6f0ff',
              borderRadius: '6px'
            }}>
              <strong>You:</strong> {msg}
            </div>
          ))
        )}
      </div>

      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message…"
          style={{
            flexGrow: 1,
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#003366',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
