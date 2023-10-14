import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Panel from '../widgets/Panel';
import Slider from './HomeImages';
import { getUsersAPI } from '../widgets/Fetch';
import { EmptyIcon } from '../widgets/Components';
import { useHistory } from "react-router-dom";


function Home() {
  const [getUsers, setUsers] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    const userId = localStorage.getItem('userId') || history.push("/");
    getUsersAPI(userId).then(value => setUsers(value));
  }, []);

  return (
    <Container>
      {(getUsers && <Slider slides={getUsers} />) || <EmptyIcon />}
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