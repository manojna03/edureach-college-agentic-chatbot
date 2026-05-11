import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Minus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { sendMessage } from "../services/chat.service";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface ChatDrawerProps {
  open: boolean;
  onClose: () => void;
}

const quickQuestions = [
  "What courses do you offer?",
  "Tell me about placements",
  "What is the fee structure?",
  "How to apply for admissions?",
];

export default function ChatDrawer({
  open,
  onClose,
}: ChatDrawerProps) {
  const { user } = useAuth();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hi ${
        user?.name?.split(" ")[0] || "there"
      }! I'm EduReach Bot. Ask me anything about courses, fees, admissions, or campus life.`,
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();

    if (!messageText || sending) return;

    const userMsg: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setSending(true);

    try {
      const data = await sendMessage(messageText);

      const botMsg: Message = {
        id: Date.now() + 1,
        text: data.message,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: Message = {
        id: Date.now() + 1,
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
      };

      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">

          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Bot className="w-5 h-5 text-white" />
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm">
              EduReach Bot
            </h3>

            <p className="text-white/80 text-xs">
              Ask me anything
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 transition-all duration-200 hover:scale-110"
          >
            <Minus className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 transition-all duration-200 hover:scale-110"
          >
            <X className="w-4 h-4" />
          </button>

        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-blue-50">

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            {/* Bot Icon */}
            {msg.sender === "bot" && (
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}

            {/* Message Bubble */}
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-md transition-all duration-200 ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-br-sm"
                  : "bg-white text-gray-800 border border-blue-100 rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>

            {/* User Icon */}
            {msg.sender === "user" && (
              <div className="w-7 h-7 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <User className="w-4 h-4 text-purple-700" />
              </div>
            )}
          </div>
        ))}

        {/* Typing Animation */}
        {sending && (
          <div className="flex items-end gap-2">

            <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
              <Bot className="w-4 h-4 text-white" />
            </div>

            <div className="bg-white border border-blue-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-md">

              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>

            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="px-3 py-3 bg-white border-t border-gray-100">

          <p className="text-xs text-gray-500 mb-2">
            Quick questions:
          </p>

          <div className="flex flex-wrap gap-2">

            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-200 shadow-sm"
              >
                {q}
              </button>
            ))}

          </div>
        </div>
      )}

      {/* Input Section */}
      <div className="bg-white border-t border-gray-200 p-3">

        <div className="flex items-center gap-2">

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            disabled={sending}
            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm disabled:opacity-50 transition-all duration-200"
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || sending}
            className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl flex items-center justify-center hover:scale-105 disabled:opacity-50 transition-all duration-200 shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>
  );
}