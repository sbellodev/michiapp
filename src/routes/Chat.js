import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { getChatAPI, saveMessage } from "../widgets/Fetch";
import { EmptyIcon } from "../widgets/Components";
import Panel from "../widgets/Panel";
import ProfileChat from "../routes/ProfileChat"
import ShowMessages from "../routes/ShowMessages";

function filterOtherUser(chatUsers, currentUserId) {
  const tempOtherUser = chatUsers.find((user) => user.user1_id !== currentUserId || user.user2_id !== currentUserId);

  return tempOtherUser ? (tempOtherUser.user1_id !== currentUserId ? tempOtherUser.user1_id : tempOtherUser.user2_id) : null;
}

function Chat() {
  const userId = parseInt(localStorage.getItem("userId"), 10) || window.location.assign("/michiapp");
  const [getChat, setChat] = useState({});
  const [getOtherUser, setOtherUser] = useState({});
  const [getMessage, setMessage] = useState("");
  const getChatRef = useRef();
  const location = useLocation();
  const serverHost = window.location.hostname === "localhost"
    ? process.env.REACT_APP_LOCAL_HOST_WEBSOCKETS
    : process.env.REACT_APP_SERVER_HOST_WEBSOCKETS;
  console.log(serverHost)
  const URL = `wss://${serverHost}/api/michisocket/` + userId;
  const ws = useRef(null);
  getChatRef.current = getChat;

  const {
    chatId,
    chatImg,
    chatImgType,
    chatName,
  } = location.state || {
    chatId: "",
    chatImg: "",
    chatImgType: "",
    chatName: "",
  };

  let text = ["Enviar"];
  if (localStorage.getItem("language") !== "es") text = ["Send"];
  const inputBox = useRef(null);
  const sendBox = useRef(null);

  const handleSubmit = (event) => {
    const currentMsg = getMessage;
    event.preventDefault();
    if (getMessage.length) {
      ws.current.send(currentMsg);
      saveMessage(userId, chatId, currentMsg).then(() => {
        inputBox.current.value = "";
      });
      setMessage("");
    }
  };

  useEffect(() => {
    ws.current = new WebSocket(URL);

    ws.current.onopen = (e) => {
      newFunction(e);

      function newFunction(e) {
        console.log("WebSocket Front Connected");
      }
    };

    ws.current.onmessage = (e) => {
      let rawMessage = e.data;
      const message = JSON.parse(rawMessage);

        try {
          setChat((prevChat) => [...prevChat, {message}]);
        } catch (error) {
          console.error("Error parsing incoming message:", error);
        }
    };

    return () => {
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.close();
      }
    };
  }, []);

  useEffect(() => {

    getChatAPI(chatId).then((value) => {
      const tempOtherUser = filterOtherUser(value.chatRoomUserIds, userId)
      if(tempOtherUser) {
        setOtherUser(tempOtherUser)
      }
      const updatedChat = value.chatMessages.map((msg) => ({
        name: msg.name, // Assuming 'name' is the same for all messages
        userId: msg.user_id,
        message: msg.message,
        imgType: msg.img_type,
        createdAt: msg.created_at,
        messageId: msg.message_id,
        imgEncoded: msg.img_encoded,
      }));

      setChat(updatedChat);
    });
  }, [chatId]);

  return (
    <Container>
      {getChat.length > 0 ? (
        <ChatContainer>
          <ProfileChat 
            chatImg={chatImg} 
            chatName={chatName} 
            chatType={chatImgType} 
            chatOtherId={getOtherUser}
          />
          <ChatBox>
            <ShowMessages chatData={getChat} userId={userId} />
          </ChatBox>
          <InputBox>
            <input
              ref={inputBox}
              type="text"
              pattern=".*\S.*"
              placeholder="..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
              onInput={(e) => setMessage(e.target.value)}
              required
            />
            <BtnSubmit 
              type="submit" 
              ref={sendBox} 
              value={text[0]} 
              onClick={(e) => handleSubmit(e)} 
            />
          </InputBox>
        </ChatContainer>
      ) : (
        <EmptyIcon />
      )}
      <Panel />
    </Container>
  );
}

const Container = styled.main`
  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
  animation: 1s ease-out 0s 1 appear;
  display: grid;
  justify-items: center;
  margin: 0 auto;
  padding: 42px 0;
  font-size: 18px;
`;
const ChatContainer = styled.div`
  padding: 18px;
  border: 1px solid #5093f8;
  border-radius: 20px;
  box-shadow: 1px 1px 3px #5093f8;
`;
const ChatBox = styled.div`
  max-width: var(--large-width);
  height: 500px;
  display: flex;
  flex-direction: column-reverse;
  padding: 18px;
  background-color: skyblue;
  overflow: scroll;
  overflow-x: hidden;
  word-break: break-all;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const BtnSubmit = styled.input`
  height: 60px;
  margin-left: 12px;
  background: #ff75a7;
  color: white;
  font-style: normal;
  font-weight: bold;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export default Chat;
