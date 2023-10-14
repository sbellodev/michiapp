import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { getUserLogin } from "../widgets/Fetch";
import { errorMessage } from "../widgets/Components";

let text = [
  "Logo con un gato redondo y el texto Michiapp",
  "Encuentra a los animales más cercanos a ti y conoce sus dueños",
  "Email",
  "Contraseña",
  "Entrar",
  "¿Todavía no tienes cuenta?",
  "¡Regístrate Aquí!",
  "Por favor, rellena todos los campos",
  "Email o contraseña incorrectos",
];
if (localStorage.getItem("language") !== "es") text = [
    "Logo with a round cat and the word Michiapp",
    "Find the closest animals to you and met their owners",
    "Email",
    "Password",
    "Login",
    "Don't have an account?",
    "Register here!",
    "Please fill all the fields",
    "Wrong email or password",
  ];

function Login() {
  const [formData, setFormData] = useState({
    email: "Perla@a.com",
    password: "123",
  });

  const errorEl = useRef(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return errorMessage(errorEl, text[7]);
    }

    return getUserLogin(formData).then((value) => {
      if (value) {
        localStorage.setItem("userId", value);
        return history.push("/home");
      }
      return errorMessage(errorEl, text[8]);
    });
  };

  return (
    <Container>
      <ImageContainer href="/michiapp">
        <img src="/michiapp/logo-michiapp.webp" alt={text[0]} />
      </ImageContainer>
      <Description>
        {text[1]}
        .
      </Description>
      <form>
      <InputBox
        type="email"
        id="email"
        name="email"
        value={formData.email}
        placeholder={`${text[2]}...`}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
        <br />
        <InputBox
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder={`${text[3]}...`}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <br />
        <br />
        <div ref={errorEl} />
        <BtnSubmit
          onClick={(e) => handleSubmit(e)}
          type="submit"
          value={text[4]}
        />
      </form>
      <TextCTA>
        <p>{text[5]}</p>
        <a href="/michiapp/signup">{text[6]}</a>
      </TextCTA>
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
  padding: 42px 12px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  max-width: var(--large-width);

  .msg-error {
    display: grid;
    place-content: center;
    height: 20px;
    background: var(--secondary-btn-color);
    font-style: normal;
    font-weight: bold;
    box-shadow: inset 0 -2px 0 var(--secondary-btn-color);

    color: white;
    border-radius: 20px;
    padding: 18px;
    font-style: italic;
    margin-top: 12px;
  }
`;
const Description = styled.h3`
  max-width: var(--large-width);
`;
const ImageContainer = styled.a`
  img {
    width: 100%;
    height: auto;
  }
`;
const InputBox = styled.input`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
const BtnSubmit = styled.input`
  height: 60px;
  background: #ff75a7;
  font-style: normal;
  font-weight: bold;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
const TextCTA = styled.div`
  font-size: 24px;
  padding-top: 18px;

  a {
    text-decoration: underline;
  }
`;

export default Login;
