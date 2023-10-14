import React from 'react';
import styled from 'styled-components';

function EmptyIcon() {
  return (
    <Container>
      <Icon src="/michiapp/loading.gif" />
    </Container>
  )
}

function EmptyText() {
  return (
    <Text>
      <span>No hay nada aquí... todavía</span>
    </Text>
  )
}

function errorMessage(element, message) {
  const currentElement = element;
  currentElement.current.style.display = 'block';
  setTimeout(() => {
    currentElement.current.innerHTML = '';
  }, 1000);
  currentElement.current.innerHTML = `<div class="msg-error">${message}</div>`;
}

const Container = styled.div`
  display: grid;
  place-self: center;
  height: 100vh;
`;

const Icon = styled.img`
  display: block;
  margin: auto;
  width: 58px;
`;

const Text = styled.span`
  display: grid;
  place-content: center;
  margin: auto;
  height: 50vh;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export { EmptyIcon, EmptyText, errorMessage };
