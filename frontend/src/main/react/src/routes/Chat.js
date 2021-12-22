import styled from "styled-components";
import Panel from "../widgets/Panel";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getChatAPI, saveMessage } from "../widgets/Fetch.js";
import { timeAgo } from "../widgets/TimeAgo.js";
import { EmptyIcon } from "../widgets/Components.js";
import { WebClient } from "../widgets/WebSocket";

const Chat = () => {
  const [getChat, setChat] = useState({data: []});
  const [getMessage, setMessage] = useState("");
  const getChatRef = useRef();
  getChatRef.current = getChat;
  const [WebSocketConnected, setWebSocketConnected] = useState(false);
  const location = useLocation();
  const userId =
    parseInt(localStorage.getItem("userId")) ||
    window.location.assign("/michiapp");

  const handleWebSocketMessage = (message) => {
       var msg = JSON.parse(message.body);
       var newMessage = {id: msg.id, chatroomId: chat_id, userId: chat_other_id, message: msg.message, createdAt: msg.date};
       var newChat = [newMessage, ...getChatRef.current.data];

       setChat({data: newChat});
 };

  const _myWebClient = WebClient(userId);
  const { chat_id, chat_img, chat_img_type, chat_name, chat_other_id } = location.state || {
    chad_id: "",
    chat_img: "",
    chat_img_type: "",
    chat_name: "",
    chat_other_id: "",
  };
  let text = ["Enviar"];
  if (localStorage.getItem("language") !== "es") text = ["Send"];
  const inputBox = useRef(null);
  const sendBox = useRef(null);

  const Profile = (chatData) => {
    return (
      <ProfileContainer>
        <ImgProfile src={"data:" + chat_img_type + ";base64," + chat_img} />
        <span>{chat_name}</span>
      </ProfileContainer>
    );
  };

  const ShowMessages = ({ chatData }) => {
    const row = chatData.length ? (
      chatData.map((value, id) => (
        <ChatPreview
          key={id}
          style={{
            display: "flex",
            alignSelf: value.userId === userId ? "end" : "start",
            textAlign: value.userId === userId ? "right" : "left",
          }}
        >
          <MessageTime>{timeAgo(value.createdAt, true)}</MessageTime>
          <ChatPreviewText key={value.id}>
            <span>{value.message}</span>
          </ChatPreviewText>
        </ChatPreview>
      ))
    ) : (
      <div>No hay mensajes</div>
    );
    return row;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (getMessage.length) {
      saveMessage(userId, chat_id, getMessage).then(() => {
        getChatAPI(chat_id).then((value) => {
          inputBox.current.value = "";
          setMessage("");
          setChat({data: value});
        });
      });
    }
  };

    useEffect(() => {
      _myWebClient.activate();
      _myWebClient.onConnect = function (frame) {
        setWebSocketConnected(true);
        _myWebClient.subscribe("/user/queue/reply", handleWebSocketMessage);
      }
      return () => {
        _myWebClient.deactivate();
      };
    }, []);

  useEffect(() => {
    getChatAPI(chat_id).then((value) => {
        setChat({data: value});
    });
  }, [chat_id]);

  return (
    <Container>
      {((getChat.data.length > 0) && (
        <ChatContainer>
          <Profile chatData={{ chat_name, chat_img, chat_img_type }} />
          <ChatBox>
            <ShowMessages chatData={getChat.data} />
          </ChatBox>
          <InputBox>
            <input
              ref={inputBox}
              onKeyDown={(e) => {
                if (e.keyCode === 13) handleSubmit(e);
              }}
              onInput={(e) => setMessage(e.target.value)}
              type="text"
              pattern=".*\S.*"
              placeholder={"..."}
              required
            />
            <BtnSubmit
              ref={sendBox}
              onClick={(e) => handleSubmit(e)}
              type="submit"
              value={text[0]}
            />
          </InputBox>
        </ChatContainer>
      )) || <EmptyIcon />}
      <Panel />
    </Container>
  );
};

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

const ProfileContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0;
  font-weight: bold;

  span {
    padding-left: 18px;
  }
`;

const ImgProfile = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: black 1px 2px;
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
const ChatPreview = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 24px;
`;

const ChatPreviewText = styled.div`
  max-width: max-content;
  display: flex;
  margin-bottom: 6px;
  padding: 12px 24px;
  background: white;
  font-style: normal;
  font-weight: bold;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
const MessageTime = styled.span`
  font-size: 12px;
`;
export default Chat;
