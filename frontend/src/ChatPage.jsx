import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getCurrentUserName } from "./handler";

const socket = io("http://localhost:4000");

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // alert(socket.active)
    socket.on("connect", () => {
      console.log("Connected to the server");
    });
    // we listening message event whever server emit the message event
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      // fire the message event
      socket.emit("message", { username: getCurrentUserName(), text: input });
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Socket.IO Chat</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender || "Some One"}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        style={{ padding: "5px", width: "70%", marginRight: "5px" }}
      />
      <button onClick={sendMessage} style={{ padding: "5px 10px" }}>
        Send
      </button>
    </div>
  );
}

export default ChatPage;
