"use client";
import { useState } from "react";
import { XIcon, SendIcon } from "lucide-react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", content: "Hi, I am ChatBot. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", content: input }]);
      // Here you would typically send the message to your chatbot backend
      // and then add the response to the messages
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "Thank you for your message. How else can I help you?",
        },
      ]);
      setInput("");
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-8 z-50">
      {isOpen ? (
        <div className="bg-[#FFFAFA] rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden transition-transform transform scale-100">
          <div className="bg-[#B93267] text-[#FFFAFA] p-4 flex justify-between items-center shadow-md">
            <h2 className="text-lg font-semibold">ChatBot</h2>
            <button
              onClick={toggleChat}
              className="text-[#FFFAFA] hover:text-[#FFFAFA]/80 focus:outline-none"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="h-96 p-4 overflow-y-auto bg-[#FFFAFA] rounded-b-lg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.type === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg shadow-md ${
                    message.type === "user"
                      ? "bg-[#B93267] text-[#FFFAFA]"
                      : "bg-[#FFFAFA] text-[#B93267]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-[#B93267] bg-[#FFFAFA] rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B93267] shadow-sm transition-shadow duration-300"
              />
              <button
                onClick={handleSend}
                className="bg-[#B93267] text-[#FFFAFA] px-4 py-2 rounded-lg hover:bg-[#97144D] focus:outline-none focus:ring-2 focus:ring-[#B93267] focus:ring-offset-2 shadow-md transition-transform transform hover:scale-105"
              >
                <SendIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-[#B93267] hover:bg-[#97144D] text-[#FFFAFA] font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          <IoChatbubbleEllipsesSharp className="h-8" />
        </button>
      )}
    </div>
  );
}
