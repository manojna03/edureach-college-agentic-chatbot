import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ChatDrawer from "./ChatDrawer";

export default function FloatingChatButton() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);

  const handleClick = () => {
    if (user) {
      setChatOpen(!chatOpen);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Chat Drawer */}
      <ChatDrawer
        open={chatOpen}
        onClose={() => setChatOpen(false)}
      />

      {/* Floating Chat Button */}
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 ${
          chatOpen
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        title={user ? "Chat with EduReach Bot" : "Login to chat"}
      >
        {chatOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-yellow-300 animate-bounce" />
        )}
      </button>
    </>
  );
}