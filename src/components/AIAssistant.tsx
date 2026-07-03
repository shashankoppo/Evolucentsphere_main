import React, { useState, useRef, useEffect }  from 'react';
import { Bot, User, Brain, Sparkles, Send, Cpu, RefreshCw } from 'lucide-react';
import { aiCore } from '../lib/ai/core';
import { AI_CAPABILITIES } from '../lib/ai/capabilities';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  metadata?: {
    confidence?: number;
    capabilities?: string[];
    processingTime?: number;
    systemLoad?: Record<string, string>;
  };
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial greeting
    setMessages([
      {
        id: '0',
        role: 'assistant',
        content: 'Hello! I am Aarnik, your AI assistant powered by quantum computing and advanced neural networks. How can I help you today?',
        timestamp: new Date(),
        metadata: {
          capabilities: Object.keys(AI_CAPABILITIES),
          confidence: 1.0,
          systemLoad: {
            quantum: '78%',
            neural: '65%',
            processing: '45%'
          }
        }
      }
    ]);
  }, []);

  // Only scroll within the chat box after user has interacted
  useEffect(() => {
    if (hasInteracted) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, hasInteracted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    setHasInteracted(true);

    try {
      const startTime = performance.now();
      const response = await aiCore.process({
        type: 'user_input',
        content: input,
        context: {
          previousMessages: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        }
      });
      const processingTime = performance.now() - startTime;

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.result.reasoning,
        timestamp: new Date(),
        metadata: {
          confidence: response.confidence,
          processingTime,
          capabilities: Object.keys(AI_CAPABILITIES),
          systemLoad: {
            quantum: '78%',
            neural: '65%',
            processing: '45%'
          }
        }
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error processing request:', error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'I apologize, but I encountered an error processing your request. Please try again.',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="card overflow-hidden h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-brand-500 text-white p-4">
        <div className="flex items-center space-x-3">
          <Brain className="h-6 w-6" />
          <div>
            <h2 className="font-bold">Aarnik AI Assistant</h2>
            <p className="text-sm opacity-90">Quantum-powered intelligence at your service</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.role === 'user'
                  ? 'bg-brand-500 text-white'
                  : 'bg-surface'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                {message.role === 'user' ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4 text-brand-500" />
                )}
                <span className="text-xs opacity-75">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>

              <div className="prose max-w-none">
                {message.content}
              </div>

              {message.metadata && (
                <div className="mt-2 pt-2 border-t border-border space-y-1">
                  {message.metadata.confidence && (
                    <div className="flex items-center text-xs">
                      <Brain className="h-3 w-3 mr-1 text-brand-500" />
                      <span>Confidence: {(message.metadata.confidence * 100).toFixed(1)}%</span>
                    </div>
                  )}
                  {message.metadata.processingTime && (
                    <div className="flex items-center text-xs">
                      <Cpu className="h-3 w-3 mr-1 text-brand-500" />
                      <span>Processing Time: {message.metadata.processingTime.toFixed(0)}ms</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-4">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            disabled={isProcessing}
          />
          <button
            type="submit"
            disabled={isProcessing}
            className="btn-primary disabled:opacity-50"
          >
            {isProcessing ? (
              <RefreshCw className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-2 flex items-center justify-between text-xs text-ink-secondary">
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <Brain className="h-3 w-3 mr-1 text-brand-500" />
              Neural: Active
            </span>
            <span className="flex items-center">
              <Cpu className="h-3 w-3 mr-1 text-brand-500" />
              Quantum: Ready
            </span>
          </div>
          <div className="flex items-center">
            <Sparkles className="h-3 w-3 text-brand-500 mr-1" />
            <span>AI-Powered</span>
          </div>
        </div>
      </div>
    </div>
  );
}
