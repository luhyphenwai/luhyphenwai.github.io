import React, { useState, useRef, useEffect } from 'react';
import './CaseComp.css';
import { prompt } from './prompt';

import ReactMarkdown from 'react-markdown';
function xorEncrypt(text, key) {
  let encrypted = [];
  
  for (let i = 0; i < text.length; i++) {
      // XOR each character with the corresponding key character
      let encryptedChar = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      encrypted.push(encryptedChar);
  }

  // Convert array of numbers to a string (for easy storage/transmission)
  return encrypted.join(",");
}

function xorDecrypt(encryptedString, key) {
  let encryptedNumbers = encryptedString.split(",").map(num => parseInt(num, 10));
  let decrypted = '';

  for (let i = 0; i < encryptedNumbers.length; i++) {
      // XOR each number with the corresponding key character
      let decryptedChar = encryptedNumbers[i] ^ key.charCodeAt(i % key.length);
      decrypted += String.fromCharCode(decryptedChar);
  }

  return decrypted;
}


const CaseComp = () => {
  const startingMessage = { role: 'assistant', content: 'Hi, if you have any questions about our strategy regarding NVIDIAs "AI Compute as a Service" strategy, just ask!' }
  const startingPrompt = {role: 'developer', content: prompt}
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const API_KEY = xorDecrypt(process.env.REACT_APP_OPENAI_API_KEY, "PLEASENOHACK");

  // Automatic scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const sendMessage = async (e) => {
    console.log("if you're here, hi! also please don't try to break the ai i'm begging you :)")
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
    "What are the major players in the AI market?",
    "How does the 'AI Compute as a Service' model work?",
    "What are the benefits of this strategy?",
    "What are the financial projections for this strategy?",
  ];

  return (
    <div className="chatbot-container">
      <div className="chatbot-header-2">
        <p 
          onClick={handleUserProfileClick} 
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          @luwaiwong
        </p>
        <p
          onClick={handleUserLinkedinClick} 
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          linkedin
        </p>
      </div>
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
          <div className="header">
            <h2>Flashpoint AI</h2>
          </div>
            <div className="chatbot-header">
              <h2>NVIDIA's Next Move: <br/> AI Compute as a Service</h2>
            </div>
            <div className="chatbot-header-3">
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
              <div className="message-content">
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
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