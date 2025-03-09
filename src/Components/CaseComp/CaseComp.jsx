import React, { useState, useRef, useEffect } from 'react';
import './CaseComp.css';
import { prompt } from './prompt';

const CaseComp = () => {
  const startingMessage = { role: 'assistant', content: 'Hi, if you have any questions about our strategy regarding NVIDIAs "AI Compute as a Service" strategy, just ask!' }
  const startingPrompt = {role: 'developer', content: prompt}
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  // Automatic scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async (e) => {
    console.log("hello :)")
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message to chat
    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [startingPrompt,...messages, userMessage],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message;
      
      // Add AI response to chat
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
      // Add error message to chat
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserProfileClick = () => {
    window.open('https://github.com/luwaiwong', '_blank');
  };

  const handleUserLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/luwai/', '_blank');
  };


  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  const suggestedQuestions = [
    "What's NVIDIA's current market position?",
    "How does the 'AI Compute as a Service' model work?",
    "What are major players in the AI market currently?",
    "What are the financial projections for this strategy?"
  ];

  return (
    <div className="chatbot-container">
      <div className="chatbot-header-2">
        <h2 
          onClick={handleUserProfileClick} 
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          @luwaiwong
        </h2>
        <h2 
          onClick={handleUserLinkedinClick} 
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          linkedin
        </h2>
      </div>
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <div className="chatbot-header">
              <h2>NVIDIA's "AI Compute as a Service" Strategy</h2>
            </div>
            <div className="chatbot-header-2">
              <h2>Ask questions or try these suggestions:</h2>
            </div>
            <div className="suggestion-chips">
              {suggestedQuestions.map((question, index) => (
                <div 
                  key={index} 
                  className="suggestion-chip"
                  onClick={() => handleSuggestionClick(question)}
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.role === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <div className="message-content">{message.content}</div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="message ai-message">
            <div className="message-content loading">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form className="input-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button style={{color: "white"}}type="submit" disabled={isLoading || input.trim() === ''}>
          
        </button>
      </form>
    </div>
  );
};

export default CaseComp;