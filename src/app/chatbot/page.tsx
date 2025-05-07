'use client';

import Header from '@/components/Header';
import ChatbotPanel from '@/components/ChatbotPanel';

export default function ChatbotPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Chatbot Assistant</h1>
        <ChatbotPanel />
      </main>
    </>
  );
}
