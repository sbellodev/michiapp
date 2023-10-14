import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Panel from '../widgets/Panel';
import { getChatsAPI } from '../widgets/Fetch';
import timeAgo from '../widgets/TimeAgo';
import { EmptyText } from '../widgets/Components';

function Chats() {
  const [getChats, setChats] = useState('');
  const userId = localStorage.getItem('userId') || window.location.assign('/michiapp');

  const ShowChats = ({ chatData }) => {
    const row = chatData.length
      ? chatData.map(value => (
        <ChatPreview key={value.chat_id}>
          <Link to={`/profile/${value.other_user_id}`}>
            <ImgProfile src={`data:${value.img_type};base64,${value.img_encoded}`} />
          </Link>
          <Link
            to={{
              pathname: '/chat',
              state: {
                chatId: value.chat_id,
                chatImg: value.img_encoded,
                chatImgType: value.img_type,
                chatName: value.other_user_name,
                chatOtherId: value.otherId,
              },
            }}
          >
            <ChatPreviewTextBox>
              <ChatName>{value.other_user_name}</ChatName>
              <ChatPreviewText>
                <span>{value.last_message}</span>
              </ChatPreviewText>
              <MessageTime>{timeAgo(value.last_message_timestamp)}</MessageTime>
            </ChatPreviewTextBox>
          </Link>
        </ChatPreview>
      ))
      : (
        <EmptyText />
      );
    return row;
  };

  useEffect(() => {
    getChatsAPI(userId).then(value => setChats(value));
  }, []);

  return (
    <Container>
      {(getChats && (
        <ChatContainer>
          {/*
                <ProfileContainer>
                            {getChats && <ShowProfileContainer chatData={getChats} />}
                </ProfileContainer>
            */}
          <ChatPreviews>
            <ShowChats chatData={getChats} />
          </ChatPreviews>
        </ChatContainer>
      )) || <EmptyText />}
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
  max-width: var(--large-width);
  display: grid;
  justify-items: center;
  padding: 0;
  margin: 0 auto;
  font-size: 18px;
`;

const ChatContainer = styled.div`
  width: 90vw;
  max-width: var(--large-width);
  padding: 18px;
  border: 1px solid #5093f8;
  border-radius: 20px;
  box-shadow: 1px 1px 3px #5093f8;
`;
const ImgProfile = styled.img`
  width: 90vw;
  height: 90vh;
  max-width: 84px;
  max-height: 84px;
  margin-right: 24px;
  border-radius: 50%;
  box-shadow: black 1px 2px;
  object-fit: cover;
`;
const ChatPreviews = styled.div`
  max-height: var(--large-width);
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: 12px;
  scrollbar-color: #d4def2;

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #d4def2;
    border-radius: 20px 20px 20px 20px;
    opacity: 0.5;
  }
`;
const ChatPreview = styled.div`
  display: grid;
      grid-template-columns: 1fr 5fr;

  min-height: 120px;
  flex-direction: row;
  align-items: center;
`;
const ChatPreviewTextBox = styled.div`
  display: grid;
  grid-row-gap: 12px;
  width: 100%;
`;

const ChatPreviewText = styled.div`
  background: white;
  padding: 18px;
  margin-right: 10px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  font-style: italic;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const ChatName = styled.span`
  font-weight: bold;
`;
const MessageTime = styled.span`
  font-size: 12px;
  text-align: right;
  margin-right: 10px;
`;
export default Chats;
