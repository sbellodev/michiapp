import React, { useState, useRef, useEffect } from "react";

const WebSocketTest = () => {
  const [message, setMessage] = useState("");
  const ws = useRef(null);
  const userId = parseInt(localStorage.getItem("userId"), 10) || window.location.assign("/michiapp");


  useEffect(() => {
    // Initialize the WebSocket connection
    const URL = "ws://localhost:3500/api/michisocket/" + userId;
    ws.current = new WebSocket(URL);
    //ws.current = new WebSocket("ws://localhost:3500/api/michisocket/YOUR_USER_ID");

    // Handle incoming messages
    ws.current.onmessage = (event) => {
      const receivedMessage = event.data;
      console.log("Received message: ", receivedMessage);
      // Handle the incoming message as needed
    };

    // Handle WebSocket errors
    ws.current.onerror = (error) => {
      console.error("WebSocket error: ", error);
    };

    // Handle WebSocket closure
    ws.current.onclose = (event) => {
      console.log("WebSocket connection closed: ", event);
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.close();
      }
    };
  }, []);

  const handleSend = () => {
    if (message) {
      // Send the message via WebSocket
      ws.current.send(message);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h2>WebSocket Testing</h2>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Enter a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default WebSocketTest;
