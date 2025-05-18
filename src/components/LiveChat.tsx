import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Brain, Sparkles, Zap } from 'lucide-react';
import { generateAIResponse, getAISystemStatus } from '../lib/ai';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  thinking?: boolean;
  confidence?: number;
  capabilities?: string[];
  metrics?: Record<string, any>;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [systemStatus, setSystemStatus] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const status = await getAISystemStatus();
      setSystemStatus(status);
    };
    fetchStatus();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    const thinkingMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: '',
      timestamp: new Date(),
      thinking: true
    };

    setMessages(prev => [...prev, userMessage, thinkingMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(inputMessage, {
        previousInteractions: messages.map(m => m.content)
      });
      
      setMessages(prev => [
        ...prev.filter(m => m.id !== thinkingMessage.id),
        {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          content: aiResponse.response,
          timestamp: new Date(),
          confidence: aiResponse.confidence,
          capabilities: aiResponse.capabilities,
          metrics: aiResponse.metrics
        }
      ]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [
        ...prev.filter(m => m.id !== thinkingMessage.id),
        {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          content: 'I apologize, but I encountered an error. Please try again.',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-w-full">
          <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <div className="text-xs flex items-center">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="h-96 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.type === 'user' ? 'flex justify-end' : 'flex justify-start'
                }`}
              >
                <div
                  className={`max-w-3/4 p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {message.type === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4 text-purple-600" />
                    )}
                    <span className="text-xs opacity-75">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  
                  {message.thinking ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-pulse">Thinking</div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  ) : (
                    <p>{message.content}</p>
                  )}

                  {message.capabilities && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {message.capabilities.map((cap, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full"
                        >
                          <Sparkles className="h-3 w-3 mr-1" />
                          {cap}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                disabled={isTyping}
                className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                {isTyping ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white"></div>
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
            
            <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
              <div className="flex items-center">
                <Zap className="h-3 w-3 mr-1" />
                <span>AI Powered</span>
              </div>
              {systemStatus && (
                <div className="flex items-center text-green-500">
                  <Brain className="h-3 w-3 mr-1" />
                  <span>System Online</span>
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}