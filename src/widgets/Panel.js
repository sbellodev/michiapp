import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Panel() {
  return (
    <Container>
      <Link to="/home">
        <Icon src="/michiapp/icon_home.svg" />
      </Link>
      <Link to="/chats">
        <Icon src="/michiapp/icon_chats.png" />
      </Link>
      <Link to="/settings">
        <Icon src="/michiapp/icon_settings.png" />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
  animation: 1s ease-out 0s 1 appear;
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin: 0 auto;
  padding: 24px 0 24px 0;
`;

const Icon = styled.img`
  width: 58px;
  padding: 0 20px 0 20px;
`;

export default Panel;
