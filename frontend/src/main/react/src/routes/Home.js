import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Panel from "../widgets/Panel";
import { WebClient } from "../widgets/WebSocket";
//import SockJS from 'sockjs-client'; // Note this line
//import { Client, Message } from "@stomp/stompjs";
import { Slider } from "./HomeImages";
import { getUsersAPI } from "../widgets/Fetch.js";
import { EmptyIcon } from "../widgets/Components.js";

const Home = () => {
  const [getUsers, setUsers] = useState("");
  const userId =
    localStorage.getItem("userId") || window.location.assign("/michiapp");

  useEffect(() => {
    getUsersAPI(userId).then((value) => setUsers(value));
    //WebClient.activate();
  }, []);

  return (
    <Container>
      {(getUsers && <Slider slides={getUsers} />) || <EmptyIcon />}
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
  max-width: var(--large-width);
  display: grid;
  justify-items: center;
  margin: 0 auto;
  padding: 0;
  color: white;
  font-size: 18px;
  font-weight: bold;

  .to-left {
    transform: translateX(-30rem) rotate(-30deg) !important;
  }
  .to-right {
    transform: translate(30rem) rotate(30deg) !important;
  }
`;
export default Home;
