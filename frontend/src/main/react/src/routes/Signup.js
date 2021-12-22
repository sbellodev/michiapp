import styled from "styled-components";
import React, { useState, useRef } from "react";
import { saveUser } from "../widgets/Fetch";
import Cities from "../widgets/cities";
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import { errorMessage } from "../widgets/Components";

let text = [
  "Logo con un gato redondo y el texto Michiapp",
  "¡Regístrate!",
  "Nombre",
  "Nombre de la mascota",
  "Correo",
  "Contraseña",
  "Registrarme",
  "Por favor, rellena todos los campos",
  "Error. Email inválido",
  "Error. No se ha podido registrar el usuario",
  "Error. Ya existe un usuario con ese email",
];
if (localStorage.getItem("language") !== "es")
  text = [
    "Logo with a round cat and the word Michiapp",
    "Sign up!",
    "Name",
    "Pet's name",
    "Email",
    "Password",
    "Sign up",
    "Please fill all the fields",
    "Error. Email not valid",
    "Error. User not registered",
    "Error. User with that email already exists",
  ];

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    animal_name: "",
    email: "",
    password: "",
    cityId: 1,
  });
  let history = useHistory();
  const errorEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailPatt = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!formData.name || !formData.email || !formData.password)
      return errorMessage(errorEl, text[7]);

    if (!formData.email.match(emailPatt)) return errorMessage(errorEl, text[8]);

    saveUser(formData).then((res) => {
      if (res.ok) {
        return history.push("/michiapp");
      } else if (res.status === 400) {
        return errorMessage(errorEl, text[10]);
      }
      return errorMessage(errorEl, text[9]);
    });
  };

  const CityDropDown = ({ citiesList }) => {
    citiesList = citiesList.sort((a, b) => a.name.localeCompare(b.name));
    return (
      <CityContainer
        name="city"
        value={formData.cityId}
        onChange={(e) => setFormData({ ...formData, cityId: e.target.value })}
      >
        {citiesList.map((city, i, a) => {
          return (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          );
        })}
      </CityContainer>
    );
  };

  return (
    <Container>
      <ImageContainer href={"/michiapp"}>
        <img src={"/michiapp/logo-michiapp.webp"} alt={text[0]} />
      </ImageContainer>

      <Description>{text[1]}</Description>

      <form>
        <InputBox
          type="text"
          id="name"
          name="name"
          placeholder={text[2] + "..."}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <br />
        <InputBox
          type="text"
          id="animal_name"
          name="animal_name"
          placeholder={text[3] + "..."}
          onChange={(e) =>
            setFormData({ ...formData, animal_name: e.target.value })
          }
          required
        />
        <br />
        <InputBox
          type="email"
          id="email"
          name="email"
          placeholder={text[4] + "..."}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <br />
        <InputBox
          type="password"
          id="password"
          name="password"
          placeholder={text[5] + "..."}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <br />
        {Cities && <CityDropDown citiesList={Cities} />}
        <br />
        <br />
        <div ref={errorEl}></div>
        <BtnSubmit
          onClick={(e) => handleSubmit(e)}
          type="submit"
          defaultValue={text[6]}
        />
      </form>
      <span>
        <BackLink onClick={() => history.push("/michiapp/")}>Volver</BackLink>
      </span>
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
const CityContainer = styled.select`
  font-size: 18px;
  color: gray;
`;
const BtnSubmit = styled.input`
  height: 60px;
  font-style: normal;
  background: var(--secondary-bg-color);
  font-weight: bold;
  box-shadow: inset -1px -2px 2px black;

  color: white;
  border-radius: 20px;
  padding: 18px;
  margin-top: 12px;
`;
const BackLink = styled.a`
  text-decoration: underline;
  font-style: italic;
  float: left;
`;

export default Signup;
