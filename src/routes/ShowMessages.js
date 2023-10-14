import React from "react";
import styled from "styled-components";
import timeAgo from "../widgets/TimeAgo";

function ShowMessages({ chatData, userId }) {
  const rows = chatData.map((message, id) => (
    <ChatPreview
      key={id}
      style={{
        display: "flex",
        alignSelf: message.userId === userId ? "flex-end" : "flex-start",
        textAlign: message.userId === userId ? "right" : "left",
      }}
    >
      <MessageTime>{timeAgo(message.createdAt, true)}</MessageTime>
      <ChatPreviewText>
        <span>{message.message}</span>
      </ChatPreviewText>
    </ChatPreview>
  ));
  return <div>{rows}</div>;
}

ShowMessages.propTypes = {
  chatData: () => {},
  userId: () => {}
};

ShowMessages.defaultProps = {
  chatData: () => {},
  userId: () => {}
};

const MessageTime = styled.span`
  font-size: 12px;
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

const ChatPreview = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 24px;
`;


export default ShowMessages;
